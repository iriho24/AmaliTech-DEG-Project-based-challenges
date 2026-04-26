import React, { useState } from 'react'
import { TopNav } from './components/TopNav'
import { Sidebar } from './components/Sidebar'
import { Vault } from './pages/Vault'
import { DesignSystem } from './pages/DesignSystem'

export function App() {
  const [activePage, setActivePage] = useState('vault')

  const renderPage = () => {
    if (activePage === 'vault') return <Vault />
    if (activePage === 'design') return <DesignSystem />

    const isPlaceholder = ['dashboard', 'activity', 'settings'].includes(activePage)

    if (isPlaceholder) {
      return (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md p-8 rounded-2xl border border-white/10 bg-glass-5 backdrop-blur-md">
            <div className="w-16 h-16 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center mx-auto mb-6 shadow-glow">
              <span className="text-violet-400 font-mono text-xl">{'</>'}</span>
            </div>

            <h2 className="text-2xl font-display font-semibold text-gray-100 mb-2 capitalize tracking-wide">
              {activePage} Module
            </h2>

            <p className="text-gray-500 font-mono text-sm mb-8">
              STATUS: ENCRYPTED / UNDER CONSTRUCTION
            </p>

            <button
              onClick={() => setActivePage('vault')}
              className="px-6 py-2.5 bg-white/5 border border-white/10 text-gray-200 rounded-xl text-sm font-medium hover:bg-white/10 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 hover:shadow-glow-sm"
            >
              Return to SecureVault
            </button>
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-black-950 bg-grid text-gray-300 overflow-hidden font-sans selection:bg-violet-500/30 selection:text-violet-200">
      <TopNav />

      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <main className="flex-1 flex overflow-hidden relative rounded-2xl border border-white/10 bg-glass-5 backdrop-blur-xl shadow-glass">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}