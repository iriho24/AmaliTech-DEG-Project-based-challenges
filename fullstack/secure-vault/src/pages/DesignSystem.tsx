import {
  Shield,
  Folder,
  FileText,
  ChevronRight,
  AlertCircle,
} from 'lucide-react'

export function DesignSystem() {
  const blackScale = [
    { name: '950', hex: '#000000', class: 'bg-black-950' },
    { name: '900', hex: '#050505', class: 'bg-black-900' },
    { name: '800', hex: '#0A0A0A', class: 'bg-black-800' },
    { name: '700', hex: '#111111', class: 'bg-black-700' },
    { name: '600', hex: '#1A1A1A', class: 'bg-black-600' },
  ]

  const accentScale = [
    { name: '900', hex: '#4C1D95', class: 'bg-violet-900' },
    { name: '600', hex: '#7C3AED', class: 'bg-violet-600' },
    { name: '500', hex: '#8B5CF6', class: 'bg-violet-500' },
    { name: '400', hex: '#A78BFA', class: 'bg-violet-400' },
  ]

  const glassScale = [
    { name: 'Glass 5', hex: 'rgba(255,255,255,0.03)', class: 'bg-glass-5' },
    { name: 'Glass 10', hex: 'rgba(255,255,255,0.08)', class: 'bg-glass-10' },
    { name: 'Glass 20', hex: 'rgba(255,255,255,0.15)', class: 'bg-glass-20' },
  ]

  return (
    <div className="relative flex-1 overflow-y-auto scrollbar-glass bg-transparent p-10">
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-900/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl space-y-20 pb-20">
        <header>
          <h1 className="mb-3 text-4xl font-display font-bold tracking-wide text-gray-100">
            SecureVault Design System
          </h1>
          <p className="text-sm font-mono text-gray-400">
            Shared UI tokens for the SecureVault interface.
          </p>
        </header>

        <section>
          <h2 className="mb-8 border-b border-white/10 pb-4 text-xl font-display font-semibold text-gray-200">
            Core Colors
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
                Background Scale
              </h3>

              <div className="flex flex-wrap gap-5">
                {blackScale.map((color) => (
                  <div key={color.name} className="w-24">
                    <div
                      className={`mb-3 h-16 rounded-xl border border-white/10 ${color.class} shadow-glass`}
                    />
                    <p className="text-xs font-mono text-gray-300">
                      {color.name}
                    </p>
                    <p className="text-[10px] font-mono text-gray-600">
                      {color.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
                Accent Scale
              </h3>

              <div className="flex flex-wrap gap-5">
                {accentScale.map((color) => (
                  <div key={color.name} className="w-24">
                    <div
                      className={`mb-3 h-16 rounded-xl border border-white/10 ${color.class} shadow-glow-sm`}
                    />
                    <p className="text-xs font-mono text-gray-300">
                      {color.name}
                    </p>
                    <p className="text-[10px] font-mono text-gray-600">
                      {color.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-gray-500">
                Glass Layers
              </h3>

              <div className="flex flex-wrap gap-5">
                {glassScale.map((color) => (
                  <div key={color.name} className="w-32">
                    <div
                      className={`mb-3 h-16 rounded-xl border border-white/20 backdrop-blur-md ${color.class}`}
                    />
                    <p className="text-xs font-mono text-gray-300">
                      {color.name}
                    </p>
                    <p className="text-[10px] font-mono text-gray-600">
                      {color.hex}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 border-b border-white/10 pb-4 text-xl font-display font-semibold text-gray-200">
            Type Scale
          </h2>

          <div className="space-y-8 rounded-2xl border border-white/10 bg-glass-5 p-8 backdrop-blur-md shadow-glass">
            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Display / 3xl
              </p>
              <h3 className="text-3xl font-display font-bold tracking-wide text-gray-100">
                SYSTEM DISPLAY HEADING
              </h3>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Section / xl
              </p>
              <p className="text-xl font-display font-semibold tracking-wide text-gray-100">
                Module Section Title
              </p>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Body / base
              </p>
              <p className="text-base text-gray-300">
                Standard text used for descriptions, helper content, and general
                UI messaging.
              </p>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                Mono / xs
              </p>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400">
                Metadata Labels
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 border-b border-white/10 pb-4 text-xl font-display font-semibold text-gray-200">
            Controls
          </h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">
                Buttons
              </h3>

              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-xl border border-violet-400/50 bg-violet-600 px-5 py-2.5 text-sm font-display font-medium text-white shadow-glow">
                  Primary Action
                </button>

                <button className="rounded-xl border border-violet-400/50 bg-violet-500 px-5 py-2.5 text-sm font-display font-medium text-white shadow-glow ring-2 ring-violet-400/50 ring-offset-2 ring-offset-black-900">
                  Focused
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-xl border border-white/10 bg-glass-5 px-5 py-2.5 text-sm font-display font-medium text-gray-200 transition-colors hover:bg-glass-10">
                  Secondary Glass
                </button>

                <button className="rounded-xl border border-violet-500/50 bg-glass-10 px-5 py-2.5 text-sm font-display font-medium text-violet-300 shadow-glow-sm">
                  Active Glass
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">
                Inputs
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    Standard Input
                  </label>

                  <input
                    type="text"
                    placeholder="Enter value..."
                    className="w-full rounded-xl border border-white/10 bg-glass-5 px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 backdrop-blur-md transition-all focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-mono uppercase tracking-widest text-gray-400">
                    Error State
                  </label>

                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="Invalid payload"
                      className="w-full rounded-xl border border-red-500/50 bg-red-500/5 px-4 py-2.5 text-sm text-red-200 shadow-[inset_0_0_10px_rgba(239,68,68,0.1)] backdrop-blur-md transition-all focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500/50"
                    />

                    <AlertCircle className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-8 border-b border-white/10 pb-4 text-xl font-display font-semibold text-gray-200">
            Component Samples
          </h2>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">
                Floating Panel
              </h3>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-glass-5 p-6 backdrop-blur-xl shadow-glass">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-violet-500/10 blur-[40px]" />

                <div className="relative z-10 mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 shadow-glow-sm">
                    <Shield className="h-6 w-6 text-violet-400" />
                  </div>

                  <div>
                    <h4 className="text-base font-display font-medium tracking-wide text-gray-100">
                      Security Scan
                    </h4>
                    <p className="mt-1 text-[10px] font-mono text-gray-500">
                      LAST RUN: 2 HOURS AGO
                    </p>
                  </div>
                </div>

                <p className="relative z-10 mb-5 text-sm text-gray-400">
                  No active issues found in the latest scheduled scan.
                </p>

                <button className="relative z-10 flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-violet-400 hover:text-violet-300">
                  View Report <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gray-500">
                Explorer Rows
              </h3>

              <div className="space-y-3 rounded-2xl border border-white/5 bg-black-900/40 p-5">
                <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-transparent p-3 transition-all hover:bg-white/5">
                  <Folder className="h-5 w-5 text-violet-500" />
                  <span className="text-sm font-display text-gray-300">
                    Default State
                  </span>
                </div>

                <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-glass-5 p-3 shadow-sm transition-all">
                  <Folder className="h-5 w-5 text-violet-400" />
                  <span className="text-sm font-display text-gray-200">
                    Hover State
                  </span>
                </div>

                <div className="flex cursor-pointer items-center gap-3 rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 shadow-[inset_0_0_15px_rgba(139,92,246,0.05)] transition-all">
                  <FileText className="h-5 w-5 text-blue-400" />
                  <span className="text-sm font-display font-medium text-violet-200">
                    Selected State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="text-xs text-gray-500">
          Tokens shown here reflect the current build and may evolve during
          implementation.
        </p>
      </div>
    </div>
  )
}