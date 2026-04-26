import React, { useState } from 'react'
import { TopNav } from './components/TopNav'
import { Sidebar } from './components/Sidebar'
import { Vault } from './pages/Vault'
import { DesignSystem } from './pages/DesignSystem'

export function App() {
  const [activePage, setActivePage] = useState('vault')

  const renderPage = () => {
    if (activePage === 'vault') {
      return <Vault />
    }

    if (activePage === 'design') {
      return <DesignSystem />
    }

    const placeholderPages = ['dashboard', 'activity', 'settings']

    if (placeholderPages.includes(activePage)) {
      return (
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md shadow-xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 shadow-lg shadow-violet-500/20">
              <span className="text-xl font-mono text-violet-400">{'</>'}</span>
            </div>

            <h2 className="mb-2 text-2xl font-semibold capitalize tracking-wide text-gray-100">
              {activePage} Module
            </h2>

            <p className="mb-8 text-sm font-mono text-gray-500">
              STATUS: ENCRYPTED / UNDER CONSTRUCTION
            </p>

            <button
              onClick={() => setActivePage('vault')}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-200 transition hover:border-violet-500/50 hover:bg-white/10 hover:text-violet-300"
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
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-black text-gray-300 selection:bg-violet-500/30 selection:text-violet-200">
      <TopNav />

      <div className="flex flex-1 gap-4 overflow-hidden p-4">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="relative flex flex-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}