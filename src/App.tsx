import { useState } from 'react'
import type { FormEvent } from 'react'
import './App.css'
import { CURSE_POWER_COUNT, pickPowerForNickname } from './powers'

function getInitialNickname() {
  return new URLSearchParams(window.location.search).get('name') ?? ''
}

function makeShareUrl(nickname: string, powerName: string) {
  const url = new URL(window.location.href)
  url.searchParams.set('name', nickname.trim())

  const text = `My cursed power is "${powerName}". Find yours:`
  const intent = new URL('https://twitter.com/intent/tweet')
  intent.searchParams.set('text', text)
  intent.searchParams.set('url', url.toString())
  return intent.toString()
}

function App() {
  const [nickname, setNickname] = useState(getInitialNickname)
  const [submittedName, setSubmittedName] = useState(getInitialNickname)
  const result = submittedName.trim() ? pickPowerForNickname(submittedName) : null

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextName = nickname.trim()

    if (!nextName) {
      setSubmittedName('')
      window.history.replaceState({}, '', window.location.pathname)
      return
    }

    const url = new URL(window.location.href)
    url.searchParams.set('name', nextName)
    window.history.replaceState({}, '', url)
    setSubmittedName(nextName)
  }

  return (
    <main className="app-shell">
      <section className="hero-panel" aria-labelledby="page-title">
        <p className="eyebrow">fan-made occult nonsense generator</p>
        <h1 id="page-title">Random Curse Power Pick</h1>
        <p className="lede">
          Enter a name and receive one deterministic anime-occult ability from a local
          vault of {CURSE_POWER_COUNT.toLocaleString()} distinct cursed techniques, each with
          a binding drawback and Domain Expansion.
        </p>

        <form className="picker-form" onSubmit={handleSubmit}>
          <label htmlFor="nickname">Nickname or sorcerer alias</label>
          <div className="input-row">
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              placeholder="Example: Nanami's Accountant"
              autoComplete="nickname"
            />
            <button type="submit">Pick my curse</button>
          </div>
        </form>
      </section>

      <section className="result-card" aria-live="polite" aria-labelledby="result-title">
        {result ? (
          <>
            <div className="result-meta">
              <span>{result.grade}</span>
              <span>{result.category}</span>
              <span>#{String(result.id + 1).padStart(4, '0')}</span>
            </div>
            <h2 id="result-title">{result.name}</h2>
            <p className="description">{result.description}</p>
            <p className="drawback">
              <strong>Binding drawback:</strong> {result.drawback}
            </p>
            <section className="domain-panel" aria-labelledby="domain-title">
              <p className="domain-kicker">Domain Expansion</p>
              <h3 id="domain-title">{result.domain.name}</h3>
              <dl>
                <div>
                  <dt>Environment</dt>
                  <dd>{result.domain.environment}</dd>
                </div>
                <div>
                  <dt>Sure-hit effect</dt>
                  <dd>{result.domain.sureHit}</dd>
                </div>
              </dl>
            </section>
            <a
              className="share-link"
              href={makeShareUrl(submittedName, result.name)}
              target="_blank"
              rel="noreferrer"
            >
              Share this cursed result on X
            </a>
          </>
        ) : (
          <div className="empty-state">
            <p className="sigil" aria-hidden="true">
              ※
            </p>
            <h2 id="result-title">The result window is sealed</h2>
            <p>Submit a nickname to crack the curtain and reveal a stable cursed power.</p>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
