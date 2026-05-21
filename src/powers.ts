export type CursePower = {
  id: number
  name: string
  category: string
  grade: string
  description: string
  drawback: string
}

const adjectives = [
  'Soggy',
  'Tax-Evading',
  'Midnight',
  'Side-Eye',
  'Bluetooth',
  'Expired',
  'Unhinged',
  'Velvet',
  'Static',
  'Snack-Fueled',
  'Noisy',
  'Pocket',
  'Leftover',
  'Moonlit',
  'Haunted',
  'Crispy',
  'Overdue',
  'Fermented',
  'Suspicious',
  'Glittering',
  'Petty',
  'Basement',
  'Office',
  'Rainy',
  'Holographic',
  'Tiny',
  'Forbidden',
  'Discount',
  'Gremlin',
]

const techniques = [
  'Domain of Mild Inconvenience',
  'Binding Vow of the Last French Fry',
  'Shikigami Receipt Summon',
  'Reversed Technique: Apology Beam',
  'Cursed Speech: Group Chat Ping',
  'Simple Domain: Awkward Elevator',
  'Maximum Technique: Laundry Mountain',
  'Hexed Inventory Expansion',
  'Vengeful Spirit Customer Support',
  'Curtain of Suspicious Fog',
  'Cursed Tool: Bent Spoon',
  'Territory Expansion: Empty Calendar',
  'Phantom Familiar: Bus Seat Crow',
  'Reverse Hex: Lucky Parking Spot',
  'Oath Technique: One More Episode',
  'Barrier Art: Blanket Fort',
  'Innate Technique: Coincidence Magnet',
]

const nouns = [
  'Miso Phantom',
  'Umbrella Oni',
  'Convenience Store Oracle',
  'Ramen Poltergeist',
  'Moth Familiar',
  'Parking Lot Yokai',
  'Alarm Clock Demon',
  'Couch Goblin',
  'Train Station Wraith',
  'Rice Cooker Imp',
  'Spreadsheet Specter',
  'Vending Machine Saint',
  'Puddle Dragon',
  'Locker Room Banshee',
  'Moon Rabbit Grudge',
  'Karaoke Revenant',
  'Mushroom Familiar',
  'Origami Curse',
  'Thrift Store Tengu',
  'Cafeteria Shade',
  'Neon Shrine Beetle',
]

const effects = [
  'summons a tiny curse that dramatically points at the nearest bad decision',
  'turns every dramatic entrance into a squeaky-shoe sound effect',
  'forces enemies to remember one embarrassing thing they said in 2017',
  'opens a pocket domain where all snacks are technically yours',
  'makes hostile curses explain their plan like a tired substitute teacher',
  'converts nervous energy into harmless purple sparks and better posture',
  'lets you fold shadows into paper cranes that deliver rude notes',
  'marks one target with a glowing sticker that says probably cursed',
  'summons a shikigami that can find any lost remote but judges you silently',
  'turns a binding vow into a coupon with alarming fine print',
  'lets you parry bad vibes by snapping invisible chopsticks',
  'creates a barrier where everyone must speak in indoor voices',
  'reverses minor curses into compliments that feel legally binding',
]

const drawbacks = [
  'Only works after you say you were just about to do that.',
  'The technique fizzles if anyone nearby is wearing matching socks.',
  'Every activation costs one oddly specific memory of a hallway.',
  'Your shikigami demands a beverage break afterward.',
  'The domain collapses if someone correctly guesses your favorite noodle.',
  'You must clap once like the meeting is finally over.',
  'A tiny bell rings whenever you try to look mysterious.',
  'The power refuses to activate during reasonable business hours.',
  'You gain advantage only while pretending this was intentional.',
]

const grades = ['Grade 4', 'Grade 3', 'Grade 2', 'Semi-Grade 1', 'Grade 1', 'Special-ish Grade']
const categories = ['Innate Technique', 'Domain Trick', 'Binding Vow', 'Shikigami', 'Cursed Tool', 'Reversed Technique']

export const CURSE_POWER_COUNT = 6201

function makePower(id: number): CursePower {
  const adjective = adjectives[id % adjectives.length]
  const technique = techniques[Math.floor(id / adjectives.length) % techniques.length]
  const noun = nouns[Math.floor(id / (adjectives.length * techniques.length)) % nouns.length]
  const effect = effects[(id * 7 + 3) % effects.length]
  const drawback = drawbacks[(id * 11 + 5) % drawbacks.length]
  const category = categories[(id * 5 + 1) % categories.length]
  const grade = grades[(id * 13 + 2) % grades.length]

  return {
    id,
    name: `${adjective} ${technique} of the ${noun}`,
    category,
    grade,
    description: `You channel ${noun.toLowerCase()} energy and ${effect}.`,
    drawback,
  }
}

export const cursePowers: CursePower[] = Array.from({ length: CURSE_POWER_COUNT }, (_, id) =>
  makePower(id),
)

export function hashNickname(nickname: string) {
  const normalized = nickname.trim().toLocaleLowerCase()
  let hash = 2166136261

  for (let index = 0; index < normalized.length; index += 1) {
    hash ^= normalized.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

export function pickPowerForNickname(nickname: string) {
  return cursePowers[hashNickname(nickname) % cursePowers.length]
}
