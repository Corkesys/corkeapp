export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-white">SolidWorks Companion</h1>
            <p className="text-sm text-zinc-400">Error fixes · Macros · API reference · AI assistant</p>
          </div>
          <a href="/dashboard" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg">Open app</a>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Fix SolidWorks issues faster</h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">A searchable library of common errors, VBA and C# macro snippets, SolidWorks API reference, and an AI assistant for assembly and mating problems.</p>
        <a href="/dashboard" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-lg text-lg">Get started free</a>
      </main>
      <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-1">Error library</h3>
          <p className="text-zinc-400 text-sm">Common SolidWorks errors with step-by-step fixes</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-1">Macro snippets</h3>
          <p className="text-zinc-400 text-sm">Ready-to-use VBA and C# code for automation</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-1">API reference</h3>
          <p className="text-zinc-400 text-sm">SolidWorks API docs with syntax highlighting</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
          <h3 className="text-white font-medium mb-1">AI assistant</h3>
          <p className="text-zinc-400 text-sm">Ask anything about assemblies, mates, and rebuilds</p>
        </div>
      </section>
    </div>
  );
}