export type DomainExpansion = {
  name: string
  environment: string
  sureHit: string
}

export type CursePower = {
  id: number
  name: string
  category: string
  grade: string
  description: string
  drawback: string
  domain: DomainExpansion
}

type TechniqueSeed = Omit<CursePower, 'id'>

export const CURSE_POWER_COUNT = 500

const inspiredTechniques: TechniqueSeed[] = [
  {
    name: 'Limitless',
    category: 'Inherited Spatial Technique',
    grade: 'Special Grade',
    description:
      'Controls the distance between things, slowing attacks into unreachable drift and crushing space into precise impact points.',
    drawback: 'Requires exact focus on vectors; emotional distraction makes the space around you wobble dangerously.',
    domain: {
      name: 'Unlimited Void',
      environment: 'A silent cosmic chamber packed with impossible information and suspended starlight.',
      sureHit: 'The target is flooded with endless sensory input until action, thought, and defense stall.',
    },
  },
  {
    name: 'Ten Shadows Technique',
    category: 'Inherited Shikigami Technique',
    grade: 'Special Grade',
    description:
      'Shapes shadow into loyal familiars, storing weapons and movement inside darkness cast by the user.',
    drawback: 'Each destroyed familiar leaves a lingering grief that dulls your cursed energy control for hours.',
    domain: {
      name: 'Chimera Shadow Garden',
      environment: 'A flooded black garden where every reflection can become a summoning gate.',
      sureHit: 'Shadow familiars emerge from every blind spot and strike the marked target in sequence.',
    },
  },
  {
    name: 'Boogie Woogie',
    category: 'Innate Position-Swap Technique',
    grade: 'Grade 1',
    description: 'Swaps the positions of cursed-energy-bearing targets through rhythmic claps and feints.',
    drawback: 'The swap only works when your timing is sincere; fake rhythm makes the technique misfire.',
    domain: {
      name: 'Applause Hall Reversal',
      environment: 'A mirrored concert hall where every surface echoes a delayed clap.',
      sureHit: 'Every clap forces the target into the least advantageous open position in the hall.',
    },
  },
  {
    name: 'Ratio Technique',
    category: 'Innate Precision Technique',
    grade: 'Grade 1',
    description: 'Divides a target along a seven-to-three line and turns that measured point into a weak spot.',
    drawback: 'Overtime makes it stronger, but using it before a fair interval causes wrist-numbing backlash.',
    domain: {
      name: 'Ledger of Perfect Proportions',
      environment: 'A tiled office of brass rulers, clock hands, and glowing fractional grids.',
      sureHit: 'The target is automatically mapped, exposing a critical ratio point with every movement.',
    },
  },
  {
    name: 'Cursed Speech',
    category: 'Inherited Command Technique',
    grade: 'Semi-Grade 1',
    description: 'Loads commands into spoken words, compelling listeners that cannot defend their ears or souls.',
    drawback: 'Every strong command tears at your throat and makes ordinary speech hazardous afterward.',
    domain: {
      name: 'Choir of Sealed Tongues',
      environment: 'A chapel of floating mouth talismans and mute bells.',
      sureHit: 'A single spoken order reaches the target directly, bypassing distance and normal hearing.',
    },
  },
  {
    name: 'Straw Doll Technique',
    category: 'Resonance Effigy Technique',
    grade: 'Grade 1',
    description: 'Links nails, straw, and a piece of the target to echo damage through a sympathetic curse.',
    drawback: 'The link demands a real trace of the target; substitutions rebound into your own fingertips.',
    domain: {
      name: 'Effigy Barn of Rusted Nails',
      environment: 'A moonlit storehouse filled with hanging dolls and red-thread lattices.',
      sureHit: 'Any nail driven into an effigy transmits resonance to the target without needing a body fragment.',
    },
  },
  {
    name: 'Blood Manipulation',
    category: 'Inherited Hematic Technique',
    grade: 'Special Grade 1',
    description: 'Hardens, accelerates, and shapes blood into blades, bindings, projectiles, and body reinforcement.',
    drawback: 'Using your own blood risks collapse unless you ration output or carry prepared reserves.',
    domain: {
      name: 'Crimson Marrow Reservoir',
      environment: 'A cathedral-vein cistern where red currents climb the walls like living ropes.',
      sureHit: 'The target is traced by arterial threads that pierce from every exposed angle.',
    },
  },
  {
    name: 'Idle Transfiguration',
    category: 'Soul-Shaping Technique',
    grade: 'Special Grade',
    description: 'Touches the outline of a soul to distort the body, heal warped flesh, or create grotesque tools.',
    drawback: 'Understanding another soul too deeply lets its terror leak into your own shape during sleep.',
    domain: {
      name: 'Self-Embodiment of Perfection',
      environment: 'A palm-lined inner world of stitched hands and wet mirrors.',
      sureHit: 'The target soul is placed within reach of the technique without requiring physical contact.',
    },
  },
  {
    name: 'Shrine',
    category: 'Innate Cleaving Technique',
    grade: 'Special Grade',
    description: 'Unleashes invisible slashes calibrated either to cut matter cleanly or adapt to cursed durability.',
    drawback: 'Precision cuts require a mental offering; careless use shaves memories from your recent past.',
    domain: {
      name: 'Malevolent Shrine',
      environment: 'An open-air ritual altar surrounded by bone-white gates and red dust.',
      sureHit: 'Relentless slashes carve everything within range according to the target assigned.',
    },
  },
  {
    name: 'Disaster Flames',
    category: 'Volcanic Disaster Technique',
    grade: 'Special Grade',
    description: 'Condenses volcanic hatred into eruptions, ember insects, and heat that bends the air.',
    drawback: 'Rain, grief, or hesitation turns the flame inward and burns your cursed-energy reserves first.',
    domain: {
      name: 'Coffin of the Iron Mountain',
      environment: 'A sealed volcanic crater of iron coffins, magma vents, and ash-black sky.',
      sureHit: 'The target is struck by unavoidable volcanic heat before they can form a countermeasure.',
    },
  },
  {
    name: 'Disaster Plants',
    category: 'Nature Curse Technique',
    grade: 'Special Grade',
    description: 'Grows cursed roots, blossoms, and draining spores from soil, stone, or exposed cursed energy.',
    drawback: 'The plants remember pain; heavy use makes nearby greenery hostile to you for a day.',
    domain: {
      name: 'Ceremonial Grove of Hollow Roots',
      environment: 'A sacred forest floor where flowers bloom from shadows and antlers hang in the canopy.',
      sureHit: 'Life-draining roots find the target through cursed energy and bind their movement instantly.',
    },
  },
  {
    name: 'Cursed Spirit Manipulation',
    category: 'Absorption and Command Technique',
    grade: 'Special Grade',
    description: 'Consumes defeated spirits and deploys them later as commanded allies, shields, or merged attacks.',
    drawback: 'Each absorbed spirit leaves a bitter residue that can surface as intrusive borrowed instincts.',
    domain: {
      name: 'Parade of Ten Thousand Grudges',
      environment: 'A lantern-lit avenue packed with kneeling spirits and paper funeral banners.',
      sureHit: 'Stored spirits manifest at once and converge on the target with assigned roles.',
    },
  },
  {
    name: 'Construction',
    category: 'Matter Creation Technique',
    grade: 'Grade 1',
    description: 'Turns cursed energy into real matter, creating tools or substances that remain after use.',
    drawback: 'Materializing anything complex burns stamina brutally and can leave organs aching.',
    domain: {
      name: 'Foundry of Exact Matter',
      environment: 'A white furnace room of suspended blueprints and molten geometric molds.',
      sureHit: 'Any object defined by the user appears already intersecting the target path.',
    },
  },
  {
    name: 'Copy',
    category: 'Adaptive Mimicry Technique',
    grade: 'Special Grade',
    description: 'Replicates a technique after meeting its condition, then channels it through a bound reserve.',
    drawback: 'Copied techniques carry an emotional aftertaste that can distort your judgment mid-fight.',
    domain: {
      name: 'Archive of Borrowed Miracles',
      environment: 'A circular library of locked rings, living bookmarks, and whispering catalog drawers.',
      sureHit: 'A selected copied technique activates on the target under ideal conditions.',
    },
  },
  {
    name: 'Comedian',
    category: 'Reality-Bending Humor Technique',
    grade: 'Special Grade',
    description: 'Turns anything the user genuinely finds funny into a temporary rule of reality.',
    drawback: 'Explaining the joke ruins the effect and makes the backlash twice as embarrassing.',
    domain: {
      name: 'Stage Where The Bit Always Lands',
      environment: 'A spotlighted theater with rubber scenery and an audience of faceless critics.',
      sureHit: 'The punchline becomes true for the target before they can reject the premise.',
    },
  },
  {
    name: 'Star Rage',
    category: 'Virtual Mass Technique',
    grade: 'Special Grade',
    description: 'Adds imaginary mass to the user or a shikigami, making strikes land like falling satellites.',
    drawback: 'If the mass is held too long, your balance and sense of scale become violently unreliable.',
    domain: {
      name: 'Orbit of the Heavy Star',
      environment: 'A midnight observatory where constellations hang at arm length.',
      sureHit: 'The target is assigned crushing virtual mass that drags them into the next impact.',
    },
  },
  {
    name: 'Ice Formation',
    category: 'Cryogenic Formation Technique',
    grade: 'Special Grade 1',
    description: 'Freezes moisture and cursed energy into spears, walls, blossoms, and binding frost.',
    drawback: 'Heat of anger cracks your own constructs and sends sharp feedback through your nerves.',
    domain: {
      name: 'White Glacier Funeral',
      environment: 'A frozen ravine under aurora light with bells buried beneath clear ice.',
      sureHit: 'Frost blooms from the target skeleton outward, locking them before the first breath finishes.',
    },
  },
  {
    name: 'Projection Sorcery',
    category: 'Inherited Frame Technique',
    grade: 'Special Grade 1',
    description: 'Divides motion into fixed frames, letting planned movements accelerate while mistakes freeze.',
    drawback: 'Breaking your declared path traps your joints in skipped frames for a painful beat.',
    domain: {
      name: 'Twenty-Four Frame Mausoleum',
      environment: 'A film-reel corridor where every step clicks through numbered glass panels.',
      sureHit: 'The target is forced into a prewritten frame sequence and punished for any deviation.',
    },
  },
  {
    name: 'Black Bird Manipulation',
    category: 'Avian Familiar Technique',
    grade: 'Grade 1',
    description: 'Commands crows as scouts, shields, and sacrificial missiles infused with cursed energy.',
    drawback: 'The flock demands payment in attention; neglecting them causes false reports and petty theft.',
    domain: {
      name: 'Rookery of Final Receipts',
      environment: 'A ruined bell tower packed with black feathers, ledgers, and perches in every direction.',
      sureHit: 'A chosen crow dives unavoidably into the target with condensed farewell force.',
    },
  },
  {
    name: 'Tool Manipulation',
    category: 'Cursed Tool Control Technique',
    grade: 'Grade 1',
    description: 'Animates and redirects prepared cursed tools with fine telekinetic control and delayed commands.',
    drawback: 'Every tool needs a named role; unnamed weapons become stubborn and drift off course.',
    domain: {
      name: 'Armory of Obedient Edges',
      environment: 'A suspended weapons vault where chains hum and blades point toward intruders.',
      sureHit: 'All registered tools strike the target from their safest blind angle at once.',
    },
  },
  {
    name: 'Auspicious Beasts Summon',
    category: 'Fortune Shikigami Technique',
    grade: 'Grade 2',
    description: 'Calls small omen beasts that grant shields, shocks, misdirection, or brief lucky openings.',
    drawback: 'Bad manners toward a summoned beast reverses its omen into an inconvenience.',
    domain: {
      name: 'Court of Four Lucky Pawprints',
      environment: 'A vermilion shrine courtyard where animal masks circle a fortune drum.',
      sureHit: 'The most favorable beast effect triggers on the target at the worst possible timing.',
    },
  },
  {
    name: 'Mythical Beast Amber',
    category: 'One-Use Transfiguration Technique',
    grade: 'Special Grade',
    description: 'Converts the body into a living storm-beast form with lightning senses and overwhelming output.',
    drawback: 'The full release consumes the body; partial releases leave amber scars that never quite cool.',
    domain: {
      name: 'Amber Reliquary of the Thunder Beast',
      environment: 'A storm-lit fossil chamber where ancient claws glow inside resin pillars.',
      sureHit: 'Lightning-shaped cursed energy rewrites the target nerves into a guaranteed strike path.',
    },
  },
  {
    name: 'Love Rendezvous',
    category: 'Spatial Marking Technique',
    grade: 'Grade 1',
    description: 'Marks people and objects with ordered signs that repel or permit approach based on sequence.',
    drawback: 'Forgetting the order tangles your own movement and makes your escape route reject you.',
    domain: {
      name: 'Constellation Date Circuit',
      environment: 'A neon planetarium of numbered hearts, ticket gates, and orbital paths.',
      sureHit: 'The target is forced through the marked sequence until they collide with the final sign.',
    },
  },
  {
    name: 'Puppet Manipulation',
    category: 'Remote Marionette Technique',
    grade: 'Semi-Grade 1',
    description: 'Pilots reinforced puppets through cursed threads, hidden mechanisms, and shared senses.',
    drawback: 'Thread strain returns as phantom pain, especially when a puppet is crushed or burned.',
    domain: {
      name: 'Marionette Theater of Split Fingers',
      environment: 'A dusty playhouse where every seat holds a jointed wooden double.',
      sureHit: 'Invisible strings attach to the target limbs and force them into the puppet script.',
    },
  },
  {
    name: 'Contractual Re-Creation',
    category: 'Receipt Manifestation Technique',
    grade: 'Grade 1',
    description: 'Recreates bought or bargained objects from contract memory, complete with cursed fine print.',
    drawback: 'Anything unpaid, stolen, or misremembered arrives defective and charges interest in stamina.',
    domain: {
      name: 'Marketplace of Binding Receipts',
      environment: 'An endless night bazaar where paper contracts hang like prayer flags.',
      sureHit: 'Every clause the user declares manifests as an object already enforcing its condition.',
    },
  },
  {
    name: 'Antigravity System',
    category: 'Vector Inversion Technique',
    grade: 'Special Grade 1',
    description: 'Inverts pull and pressure around the body, dropping enemies upward or pinning attacks away.',
    drawback: 'Repeated inversions scramble your inner ear and make allies look like falling hazards.',
    domain: {
      name: 'Zero-G Reliquary',
      environment: 'A black cube full of floating torii gates, broken stones, and weightless dust.',
      sureHit: 'The target gravity vector is rewritten continuously until impact is unavoidable.',
    },
  },
]

const prefixes = [
  'Ashen',
  'Bellworn',
  'Cicada',
  'Drowned',
  'Eclipse',
  'Fallow',
  'Gilded',
  'Hollow',
  'Iron',
  'Jade',
  'Kettle',
  'Lantern',
  'Moth',
  'Nettle',
  'Obsidian',
  'Paper',
  'Quartz',
  'Rain',
  'Salt',
  'Tallow',
  'Umbra',
  'Vermilion',
  'Wicker',
  'Yew',
]

const mediums = [
  'Abacus',
  'Bonsai',
  'Candle',
  'Doorbell',
  'Ember',
  'Folding Screen',
  'Grave Key',
  'Hourglass',
  'Inkstone',
  'Juniper Mask',
  'Koi Mirror',
  'Lacquer Fan',
  'Moon Needle',
  'Noh Drum',
  'Origami Gate',
  'Prayer Coin',
  'Quarry Chain',
  'River Comb',
  'Saffron Thread',
  'Tide Lantern',
]

const workings = [
  'Severance',
  'Echo',
  'Pilgrimage',
  'Verdict',
  'Graft',
  'Refraction',
  'Tithe',
  'Bloom',
  'Orbit',
  'Cage',
  'Mirage',
  'Burial',
  'Pulse',
  'Ransom',
  'Cascade',
  'Brand',
  'Lullaby',
  'Engine',
  'Vow',
  'Husk',
  'Compass',
  'Furnace',
  'Index',
  'Wake',
]

const categories = [
  'Innate Technique',
  'Barrier Technique',
  'Shikigami Technique',
  'Binding Vow Technique',
  'Cursed Tool Technique',
  'Reversal Technique',
  'Sensory Technique',
  'Effigy Technique',
]

const grades = ['Grade 4', 'Grade 3', 'Grade 2', 'Semi-Grade 1', 'Grade 1', 'Special Grade 1', 'Special Grade']

const actions = [
  'stitches enemy momentum into a visible thread that can be tugged, knotted, or cut',
  'turns nearby shadows into paper-thin seals that fold around hostile cursed energy',
  'marks a target with an omen that grows heavier each time they lie or hesitate',
  'distills ambient fear into glassy darts that curve toward remembered grudges',
  'converts footsteps into delayed impacts that detonate from the last place walked',
  'borrows heat from fresh wounds to forge temporary armor and ritual blades',
  'summons a small judge-spirit that taxes reckless attacks with sudden exhaustion',
  'refracts sound into hard angles, letting whispers strike like thrown tiles',
  'plants invisible knots in the air that catch limbs, weapons, and fleeing curses',
  'threads a chosen object through several false positions before revealing the real one',
]

const drawbacks = [
  'You must name the target aloud, and a wrong name binds the technique to you instead.',
  'Each activation takes one clear memory of a meal and replaces it with the taste of ash.',
  'The technique refuses to work if you step backward during the first three seconds.',
  'Your cursed energy leaks as visible smoke, making stealth nearly impossible afterward.',
  'A broken vow causes the next successful strike to echo through your own ribs.',
  'The medium cracks under sunlight and must be ritually repaired before the next battle.',
  'You lose fine control when praised, forcing blunt power until your focus returns.',
  'The effect demands a hand sign; bound or injured fingers reduce it to sparks.',
  'Every miss adds weight to your dominant arm until you land a clean defensive action.',
  'The curse collects interest, shortening your next safe rest by several uneasy hours.',
]

const domainPlaces = [
  'a flooded ticket station under a moon with no reflection',
  'a shrine warehouse stacked with breathing talismans and wet rope',
  'a basalt courtroom where verdict slips fall like snow',
  'a rust garden of bells, moss, and half-buried masks',
  'a lantern aquarium where black fish circle suspended stairs',
  'a paper city whose alleys fold into impossible shortcuts',
  'a salt desert crossed by red thread and abandoned umbrellas',
  'a cedar observatory with planets turning inside bronze bowls',
  'a tiled bathhouse filled with steam shaped like accusing faces',
  'a quiet train platform where every departure board shows your name',
]

const sureHits = [
  'the target is struck by the stored consequence of their next movement before it completes',
  'the technique medium appears inside the target guard and applies its full effect once',
  'every attempted dodge is rerouted to the coordinate the user marked at activation',
  'the target cursed energy is indexed, tagged, and pulled into the prepared attack line',
  'a binding clause locks the target into repeating their most punishable action',
  'the domain converts all nearby sound into unavoidable pressure against the target',
  'the target shadow becomes a gate for the user technique until the barrier collapses',
  'all false images vanish for the user while the target must answer each decoy as real',
  'the target body is measured by the domain and squeezed at every recorded weak point',
  'the next command carried by the technique reaches the target without travel time',
]

function makeOriginalTechnique(index: number): TechniqueSeed {
  const prefix = prefixes[index % prefixes.length]
  const medium = mediums[Math.floor(index / prefixes.length) % mediums.length]
  const working = workings[(index + Math.floor(index / prefixes.length)) % workings.length]
  const action = actions[(index * 7 + 2) % actions.length]
  const drawback = drawbacks[(index * 11 + 4) % drawbacks.length]
  const category = categories[(index * 5 + 3) % categories.length]
  const grade = grades[(index * 13 + 1) % grades.length]
  const place = domainPlaces[(index * 17 + 6) % domainPlaces.length]
  const sureHit = sureHits[(index * 19 + 8) % sureHits.length]

  return {
    name: `${prefix} ${medium} ${working}`,
    category,
    grade,
    description: `Channels ${medium.toLowerCase()} symbolism through ${prefix.toLowerCase()} cursed energy and ${action}.`,
    drawback,
    domain: {
      name: `${prefix} Domain: ${working} of the ${medium}`,
      environment: `The barrier opens into ${place}.`,
      sureHit: `${sureHit}.`,
    },
  }
}

export const cursePowers: CursePower[] = Array.from({ length: CURSE_POWER_COUNT }, (_, id) => {
  const technique = inspiredTechniques[id] ?? makeOriginalTechnique(id - inspiredTechniques.length)

  return {
    id,
    ...technique,
  }
})

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
