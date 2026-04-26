//import React from 'react'
import { Shield, Search, Bell, ChevronDown } from 'lucide-react'

export function TopNav() {
  const inputClass =
    'block w-full pl-11 pr-4 py-2 border border-white/10 rounded-xl bg-glass-5 backdrop-blur-md text-gray-200 placeholder-gray-600 focus:outline-none focus:bg-glass-10 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 sm:text-sm transition-all duration-300'

  const iconButtonClass =
    'relative p-2 text-gray-400 hover:text-violet-300 transition-colors rounded-xl hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-violet-500/50'

  return (
    <header className="h-16 border-b border-white/10 bg-black-900/40 backdrop-blur-xl flex items-center justify-between px-6 z-20 shrink-0 sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-4 w-64 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center border border-violet-500/30 shadow-glow-sm">
          <Shield className="w-5 h-5 text-violet-400" />
        </div>

        <div className="flex flex-col">
          <span className="font-display font-bold text-gray-100 tracking-widest text-sm">
            SECUREVAULT
          </span>
          <span className="text-[10px] text-violet-500 font-mono uppercase tracking-[0.2em]">
            Enterprise
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="flex-1 max-w-2xl px-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500 group-focus-within:text-violet-400 transition-colors" />
          </div>

          <input
            type="text"
            className={inputClass}
            placeholder="Search encrypted nodes... (Press '/')"
          />

          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-[10px] text-gray-500 font-mono border border-white/10 rounded px-1.5 py-0.5 bg-black-900/50">
              CMD+K
            </span>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5 shrink-0">
        <button className={iconButtonClass}>
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-violet-500 shadow-glow-sm"></span>
        </button>

        <div className="h-6 w-px bg-white/10 mx-1" />

        <button className="flex items-center gap-3 hover:bg-white/5 p-1.5 pr-3 rounded-xl transition-all duration-300 border border-transparent hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500/50">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-900 border border-violet-400/30 flex items-center justify-center shadow-glow-sm">
            <span className="text-xs font-display font-bold text-white">
              IG
            </span>
          </div>

          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-display font-medium text-gray-200 leading-none">
              Iriho Germain
            </span>
            <span className="text-[10px] font-mono text-gray-500 mt-1">
              SYS_ADMIN
            </span>
          </div>

          <ChevronDown className="h-4 w-4 text-gray-500 ml-1" />
        </button>
      </div>
    </header>
  )
}