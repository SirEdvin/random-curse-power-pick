import { readFileSync } from 'node:fs'
import ts from 'typescript'

const powersSource = readFileSync(new URL('../src/powers.ts', import.meta.url), 'utf8')
const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')

function fail(message) {
  console.error(`Dataset verification failed: ${message}`)
  process.exit(1)
}

function assertPresent(value, message) {
  if (typeof value !== 'string' || value.trim().length === 0) {
    fail(message)
  }
}

const countMatch = powersSource.match(/export const CURSE_POWER_COUNT = (\d+)/)
if (!countMatch) {
  fail('CURSE_POWER_COUNT export is missing')
}

const count = Number(countMatch[1])
if (count !== 500) {
  fail(`expected exactly 500 cursed techniques, found ${count}`)
}

if (!powersSource.includes('Array.from({ length: CURSE_POWER_COUNT }')) {
  fail('cursePowers must be generated from CURSE_POWER_COUNT')
}

if (!/export function hashNickname/.test(powersSource) || !/export function pickPowerForNickname/.test(powersSource)) {
  fail('deterministic nickname picker exports are missing')
}

if (/\b(fetch|XMLHttpRequest|WebSocket|EventSource)\b/.test(`${powersSource}\n${appSource}`)) {
  fail('network calls are not allowed')
}

const transpiled = ts.transpileModule(powersSource, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2023,
  },
}).outputText
const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled).toString('base64')}`
const powers = await import(moduleUrl)

if (powers.CURSE_POWER_COUNT !== 500) {
  fail(`runtime CURSE_POWER_COUNT mismatch: ${powers.CURSE_POWER_COUNT}`)
}

if (!Array.isArray(powers.cursePowers) || powers.cursePowers.length !== 500) {
  fail(`runtime cursePowers must contain exactly 500 records, found ${powers.cursePowers?.length}`)
}

const ids = new Set()
const names = new Set()
const domainNames = new Set()

powers.cursePowers.forEach((power, index) => {
  if (power.id !== index) {
    fail(`power at index ${index} has invalid id ${power.id}`)
  }

  assertPresent(power.name, `power ${index} is missing a technique name`)
  assertPresent(power.category, `power ${index} is missing a category`)
  assertPresent(power.grade, `power ${index} is missing a grade`)
  assertPresent(power.description, `power ${index} is missing a description`)
  assertPresent(power.drawback, `power ${index} is missing a binding drawback`)
  assertPresent(power.domain?.name, `power ${index} is missing a domain name`)
  assertPresent(power.domain?.environment, `power ${index} is missing a domain environment`)
  assertPresent(power.domain?.sureHit, `power ${index} is missing a domain sure-hit effect`)

  ids.add(power.id)
  names.add(power.name)
  domainNames.add(power.domain.name)
})

if (ids.size !== 500) {
  fail(`expected 500 unique ids, found ${ids.size}`)
}

if (names.size !== 500) {
  fail(`expected 500 unique technique names, found ${names.size}`)
}

if (domainNames.size !== 500) {
  fail(`expected 500 unique domain names, found ${domainNames.size}`)
}

const sampleName = 'Nanami Accountant'
const firstPick = powers.pickPowerForNickname(sampleName)
const secondPick = powers.pickPowerForNickname(sampleName)
const normalizedPick = powers.pickPowerForNickname(`  ${sampleName.toLocaleUpperCase()}  `)

if (firstPick !== secondPick || firstPick !== normalizedPick) {
  fail('nickname picker must be deterministic and normalize whitespace/case')
}

console.log('Verified local dataset: exactly 500 unique cursed techniques with domains.')
