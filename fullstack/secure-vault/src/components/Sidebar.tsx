import React from 'react'
import {
  LayoutDashboard,
  FolderLock,
  Activity,
  Settings,
  Palette,
  HardDrive,
} from 'lucide-react'

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const mainLinks = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'vault',
      label: 'Secure Vault',
      icon: FolderLock,
    },
    {
      id: 'activity',
      label: 'Activity Logs',
      icon: Activity,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
    },
  ]

  const devLinks = [
    {
      id: 'design',
      label: 'Design System',
      icon: Palette,
    },
  ]

  const renderNavItems = (items: typeof mainLinks) => {
    return items.map((item) => {
      const Icon = item.icon
      const isActive = activePage === item.id

      return (
        <button
          key={item.id}
          onClick={() => setActivePage(item.id)}
          className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-violet-500/50 ${
            isActive
              ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20 shadow-[inset_0_0_20px_rgba(139,92,246,0.05)]'
              : 'text-gray-400 hover:bg-white/5 hover:text-gray-200 border border-transparent'
          }`}
        >
          <Icon
            className={`w-4 h-4 ${
              isActive ? 'text-violet-400' : 'text-gray-500'
            }`}
          />

          <span className="font-display tracking-wide">{item.label}</span>

          {isActive && (
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400 shadow-glow-sm" />
          )}
        </button>
      )
    })
  }

  return (
    <aside className="w-64 rounded-2xl border border-white/10 bg-glass-5 backdrop-blur-xl flex flex-col shrink-0 shadow-glass overflow-hidden relative">
      {/* top line glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="flex-1 overflow-y-auto py-6 scrollbar-glass">
        <div className="px-4 mb-8">
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4 px-2">
            Core Modules
          </h3>

          <nav className="space-y-1.5">{renderNavItems(mainLinks)}</nav>
        </div>

        <div className="px-4">
          <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4 px-2">
            Development
          </h3>

          <nav className="space-y-1.5">{renderNavItems(devLinks)}</nav>
        </div>
      </div>

      {/* storage section */}
      <div className="p-5 border-t border-white/10 bg-black-900/50 backdrop-blur-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-xs text-gray-300 font-display tracking-wide">
            <HardDrive className="w-4 h-4 text-violet-500" />
            NODE STORAGE
          </div>

          <span className="text-[10px] text-violet-400 font-mono bg-violet-500/10 px-1.5 py-0.5 rounded border border-violet-500/20">
            72%
          </span>
        </div>

        <div className="h-1.5 w-full bg-black-800 rounded-full overflow-hidden border border-white/5">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-violet-600 to-violet-400 shadow-glow-sm relative">
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>

        <div className="mt-3 text-[10px] font-mono text-gray-500 flex justify-between">
          <span>7.2 TB USED</span>
          <span>10 TB MAX</span>
        </div>
      </div>
    </aside>
  )
}