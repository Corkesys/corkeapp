export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-white">SolidWorks Companion</h1>
            <p className="text-sm text-zinc-400">Assembly · Mating · Macros · API</p>
          </div>
          <span className="text-xs text-zinc-500 border border-zinc-700 rounded-full px-3 py-1">Free plan</span>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-4">
          <h2 className="text-base font-medium text-zinc-300">Common error fixes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <span className="text-xs text-blue-400 font-medium">Assembly</span>
              <h3 className="text-white font-medium mt-1">Mate cannot be satisfied</h3>
              <p className="text-zinc-400 text-sm mt-1">Conflicting constraints preventing mate resolution.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <span className="text-xs text-blue-400 font-medium">Sketch</span>
              <h3 className="text-white font-medium mt-1">Over defined sketch</h3>
              <p className="text-zinc-400 text-sm mt-1">Too many constraints applied to sketch entities.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <span className="text-xs text-blue-400 font-medium">Drawing</span>
              <h3 className="text-white font-medium mt-1">Dangling dimension</h3>
              <p className="text-zinc-400 text-sm mt-1">Referenced geometry no longer exists in the model.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
              <span className="text-xs text-blue-400 font-medium">Performance</span>
              <h3 className="text-white font-medium mt-1">Large assembly slow</h3>
              <p className="text-zinc-400 text-sm mt-1">Assembly exceeding memory or rebuild performance limits.</p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-base font-medium text-zinc-300">AI assistant</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
            <p className="text-zinc-400 text-sm">Ask anything about SolidWorks assemblies, mates, macros, or errors.</p>
            <textarea
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white resize-none focus:outline-none focus:border-blue-500"
              rows={4}
              placeholder="e.g. Why does my concentric mate keep failing?"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-2 rounded-lg">
              Ask AI
            </button>
            <p className="text-zinc-600 text-xs text-center">3 free queries per day</p>
          </div>
        </section>
      </main>
    </div>
  );
}