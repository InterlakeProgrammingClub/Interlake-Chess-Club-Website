export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-4">
        <h1 className="section-title">About Interlake Chess Club</h1>
        <p className="section-subtitle">
          Interlake Chess Club is a welcoming community where students learn,
          practice, and compete—building strategic thinking and confidence one
          move at a time.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="feature-card">
          <h2 className="text-lg font-semibold">What we do</h2>
          <p className="mt-2 text-muted-foreground">
            We host club meetings for casual games, puzzles, and friendly matches,
            plus preparation for tournaments and school events.
          </p>
        </div>

        <div className="feature-card">
          <h2 className="text-lg font-semibold">Who can join</h2>
          <p className="mt-2 text-muted-foreground">
            Any Interlake student—beginners are encouraged and experienced players
            will find strong competition and opportunities to grow.
          </p>
        </div>

        <div className="feature-card">
          <h2 className="text-lg font-semibold">Our values</h2>
          <p className="mt-2 text-muted-foreground">
            Sportsmanship, curiosity, and steady improvement. We want everyone to
            feel comfortable learning and challenging themselves.
          </p>
        </div>
      </section>

      <section className="mt-12 feature-card">
        <h2 className="text-xl font-semibold">Get involved</h2>
		<p className="mt-2 text-muted-foreground">
 			New members are always welcome. Club meetings are held on <strong>Mondays</strong>,
  			with opportunities to play, practice, and prepare for competitions.
        </p>

        <ul className="mt-4 list-disc pl-5 text-muted-foreground">
          <li>Drop in to a meeting and play a few games</li>
          <li>Join a tournament squad if you’re interested in competing</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href="/connect">
            Connect with us
          </a>
        </div>
      </section>
    </main>
  );
}
