import { readFileSync } from 'node:fs'

const powersSource = readFileSync(new URL('../src/powers.ts', import.meta.url), 'utf8')
const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')

function fail(message) {
  console.error(`Dataset verification failed: ${message}`)
  process.exit(1)
}

const countMatch = powersSource.match(/export const CURSE_POWER_COUNT = (\d+)/)
if (!countMatch) {
  fail('CURSE_POWER_COUNT export is missing')
}

const count = Number(countMatch[1])
if (count <= 6000) {
  fail(`expected more than 6000 powers, found ${count}`)
}

if (!powersSource.includes('Array.from({ length: CURSE_POWER_COUNT }')) {
  fail('cursePowers must be generated from CURSE_POWER_COUNT')
}

if (!powersSource.includes('hashNickname') || !powersSource.includes('pickPowerForNickname')) {
  fail('deterministic nickname picker exports are missing')
}

if (/\b(fetch|XMLHttpRequest)\b/.test(`${powersSource}\n${appSource}`)) {
  fail('network calls are not allowed for the MVP')
}

console.log(`Verified local generated dataset: ${count} curse powers.`)
