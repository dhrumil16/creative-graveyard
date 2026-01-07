import Container from "../../components/layout/Container";

function Home() {
  return (
    <Container>
      {/* HERO */}
      <section className="pt-28 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold leading-tight">
          Failed ideas are not useless.
          <br />
          <span className="text-teal-400">They are data.</span>
        </h1>

        <p className="mt-6 text-slate-400 text-lg">
          Creative Graveyard is a place to document failed projects,
          experiments, and attempts — so others can learn and avoid repeating
          the same mistakes.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-teal-500 text-slate-950 font-medium hover:bg-teal-400 transition">
            Explore Failures
          </button>

          <button className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-900 transition">
            Share Your Failure
          </button>
        </div>
      </section>

      {/* FEED PREVIEW */}
      <section className="pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition">
            <p className="text-sm text-slate-500 mb-2">Startup · 2 months</p>
            <h3 className="text-lg font-semibold mb-2">
              Built a product nobody needed
            </h3>
            <p className="text-slate-400 text-sm">
              I spent 6 months building a SaaS without validating demand.
              Learned the hard way why user interviews matter.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition">
            <p className="text-sm text-slate-500 mb-2">
              Student Project · 1 month
            </p>
            <h3 className="text-lg font-semibold mb-2">
              Chose the wrong tech stack
            </h3>
            <p className="text-slate-400 text-sm">
              Over-engineered a simple project and missed deadlines. Learned to
              choose boring tech first.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Home;
