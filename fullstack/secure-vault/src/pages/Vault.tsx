import React, { useState, Fragment } from 'react'
import { FileTree } from '../components/FileTree'
import { PropertiesPanel } from '../components/PropertiesPanel'
import { mockFileSystem } from '../lib/mockData'
import type { FileNode } from '../lib/mockData'
import {
  ChevronRight,
  Filter,
  Upload,
  FolderPlus,
  FileText,
} from 'lucide-react'

export function Vault() {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null)

  // build breadcrumbs from selected file path
  const breadcrumbs = selectedFile
    ? selectedFile.path.split('/').filter(Boolean)
    : ['ROOT']

  const currentItems =
    selectedFile?.type === 'folder'
      ? selectedFile.children
      : mockFileSystem.children

  return (
    <div className="flex-1 flex overflow-hidden bg-transparent">
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Toolbar */}
        <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 shrink-0 bg-black-900/30 backdrop-blur-md">
          {/* Breadcrumbs */}
          <div className="flex items-center text-xs font-mono text-gray-500">
            <span className="hover:text-violet-400 cursor-pointer transition-colors">
              ~
            </span>

            {breadcrumbs.map((crumb, idx) => (
              <Fragment key={idx}>
                <ChevronRight className="w-3 h-3 mx-2 text-gray-600" />

                <span
                  className={`cursor-pointer uppercase tracking-wider transition-colors ${
                    idx === breadcrumbs.length - 1
                      ? 'text-gray-200 font-medium'
                      : 'hover:text-violet-400'
                  }`}
                >
                  {crumb}
                </span>
              </Fragment>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-violet-300 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300">
              <Filter className="w-4 h-4" />
            </button>

            <div className="h-5 w-px bg-white/10 mx-1" />

            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-display font-medium text-gray-200">
              <FolderPlus className="w-4 h-4 text-violet-400" />
              New Node
            </button>

            <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-sm font-display font-medium shadow-glow border border-violet-400/50">
              <Upload className="w-4 h-4" />
              Encrypt & Upload
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Tree */}
          <div className="w-72 border-r border-white/10 bg-black-900/20 flex flex-col shrink-0">
            <div className="px-5 py-4 border-b border-white/5">
              <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                System Directory
              </h3>
            </div>

            <div className="flex-1 overflow-hidden p-2">
              <FileTree
                data={mockFileSystem}
                selectedId={selectedFile?.id || null}
                onSelect={setSelectedFile}
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex-1 p-8 overflow-y-auto scrollbar-glass relative">
            {/* background glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-900/10 blur-[100px] rounded-full pointer-events-none" />

            {/* Folder view */}
            {selectedFile?.type === 'folder' || !selectedFile ? (
              <div className="relative z-10">
                <h2 className="text-2xl font-display font-semibold text-gray-100 mb-8">
                  {selectedFile ? selectedFile.name : 'Vault Overview'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {currentItems?.map((child) => (
                    <div
                      key={child.id}
                      onClick={() => setSelectedFile(child)}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-glass-5 hover:bg-glass-10 hover:border-violet-500/50 cursor-pointer transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-black-900/50 flex items-center justify-center border border-white/5">
                        {child.type === 'folder' ? (
                          <FolderPlus className="w-6 h-6 text-violet-400" />
                        ) : (
                          <FileText className="w-6 h-6 text-gray-500" />
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm font-display font-medium text-gray-200 truncate group-hover:text-violet-100">
                          {child.name}
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 mt-1 uppercase tracking-wider">
                          {child.type === 'folder'
                            ? `${child.children?.length || 0} NODES`
                            : child.size}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* empty folder */}
                {selectedFile?.type === 'folder' &&
                  selectedFile.children?.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                      <div className="w-20 h-20 rounded-full bg-glass-5 flex items-center justify-center mb-6 border border-white/10 border-dashed">
                        <FolderPlus className="w-8 h-8 text-gray-600" />
                      </div>

                      <h3 className="text-gray-300 font-display mb-2">
                        EMPTY SECTOR
                      </h3>

                      <p className="text-xs font-mono text-gray-500">
                        Drag files here or start an upload.
                      </p>
                    </div>
                  )}
              </div>
            ) : (
              /* file view */
              <div className="flex flex-col items-center justify-center h-full text-center max-w-md mx-auto relative z-10">
                <div className="w-28 h-28 rounded-3xl bg-glass-10 flex items-center justify-center mb-8 border border-white/20 shadow-glow">
                  <FileText className="w-12 h-12 text-violet-400" />
                </div>

                <h2 className="text-2xl font-display font-semibold text-gray-100 mb-3">
                  {selectedFile.name}
                </h2>

                <p className="text-sm font-mono text-gray-500 mb-10">
                  [ENCRYPTED PAYLOAD] preview locked. decrypt to view contents.
                </p>

                <button className="flex items-center gap-3 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-display shadow-glow border border-violet-400/50">
                  <Upload className="w-4 h-4 rotate-180" />
                  Decrypt & Pull
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <PropertiesPanel file={selectedFile} />
    </div>
  )
}