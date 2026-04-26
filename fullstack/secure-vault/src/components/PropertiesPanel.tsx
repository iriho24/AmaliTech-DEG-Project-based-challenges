import React from 'react'
import type { FileNode } from '../lib/mockData'
import {
  Folder,
  FileText,
  Image as ImageIcon,
  FileCode,
  Archive,
  File,
  Download,
  Share2,
  Trash2,
  ShieldAlert,
  Clock,
  User,
  HardDrive,
  Tag,
} from 'lucide-react'

interface PropertiesPanelProps {
  file: FileNode | null
}

/**
 * Returns the large icon shown in the panel header
 */
const getLargeIcon = (type: string) => {
  const iconSize = 'w-10 h-10'

  switch (type) {
    case 'folder':
      return <Folder className={`${iconSize} text-violet-400`} />

    case 'document':
    case 'pdf':
      return <FileText className={`${iconSize} text-blue-400`} />

    case 'image':
      return <ImageIcon className={`${iconSize} text-pink-400`} />

    case 'code':
      return <FileCode className={`${iconSize} text-emerald-400`} />

    case 'archive':
      return <Archive className={`${iconSize} text-amber-400`} />

    default:
      return <File className={`${iconSize} text-gray-500`} />
  }
}

/**
 * Formats date for display
 */
const formatDate = (date: string) => {
  return new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}

export function PropertiesPanel({
  file,
}: PropertiesPanelProps) {
  if (!file) {
    return (
      <div className="w-80 shrink-0 border-l border-white/10 bg-black-900/20 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 shadow-glass flex items-center justify-center mb-4">
          <File className="w-8 h-8 text-gray-600" />
        </div>

        <h3 className="text-gray-300 font-display font-medium tracking-wide mb-2">
          NO NODE SELECTED
        </h3>

        <p className="text-xs text-gray-500 font-mono leading-relaxed">
          Select an encrypted node from the vault to view its security
          properties.
        </p>
      </div>
    )
  }

  return (
    <div className="w-80 shrink-0 overflow-y-auto scrollbar-glass border-l border-white/10 bg-black-900/20 backdrop-blur-md flex flex-col">
      {/* Header */}
      <div className="relative overflow-hidden p-8 border-b border-white/10 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-violet-500/20 blur-[50px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-20 h-20 rounded-2xl bg-glass-10 backdrop-blur-xl border border-white/20 shadow-glow-sm flex items-center justify-center mb-5">
          {getLargeIcon(file.type)}
        </div>

        <h2 className="relative z-10 text-lg font-display font-semibold text-gray-100 tracking-wide leading-tight break-all mb-2">
          {file.name}
        </h2>

        <p className="relative z-10 text-[10px] font-mono uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded px-2 py-1">
          {file.type}
        </p>
      </div>

      {/* Actions */}
      <div className="p-4 border-b border-white/10 bg-black-900/30 flex justify-center gap-2">
        <button className="flex-1 p-3 rounded-xl border border-transparent flex flex-col items-center gap-2 text-gray-400 hover:text-violet-300 hover:bg-white/5 hover:border-white/10 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-violet-500/50">
          <Download className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-wider">
            Pull
          </span>
        </button>

        <button className="flex-1 p-3 rounded-xl border border-transparent flex flex-col items-center gap-2 text-gray-400 hover:text-violet-300 hover:bg-white/5 hover:border-white/10 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-violet-500/50">
          <Share2 className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-wider">
            Share
          </span>
        </button>

        <button className="flex-1 p-3 rounded-xl border border-transparent flex flex-col items-center gap-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/20 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-red-500/50">
          <Trash2 className="w-4 h-4" />
          <span className="text-[10px] font-mono uppercase tracking-wider">
            Purge
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-8">
        {/* Metadata */}
        <div>
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-4 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-violet-500"></div>
            Metadata
          </h3>

          <div className="space-y-4">
            {file.size && (
              <div className="flex items-start gap-3">
                <HardDrive className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
                <div>
                  <div className="text-[10px] font-mono uppercase text-gray-500 mb-0.5">
                    Size
                  </div>
                  <div className="text-sm text-gray-200 font-display">
                    {file.size}
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
              <div>
                <div className="text-[10px] font-mono uppercase text-gray-500 mb-0.5">
                  Modified
                </div>
                <div className="text-sm text-gray-200 font-display">
                  {formatDate(file.updatedAt)}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />
              <div>
                <div className="text-[10px] font-mono uppercase text-gray-500 mb-0.5">
                  Owner
                </div>
                <div className="text-sm text-gray-200 font-display">
                  {file.owner}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div>
          <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-4 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-red-500"></div>
            Security Context
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 mt-0.5 shrink-0 text-violet-400" />
              <div>
                <div className="text-[10px] font-mono uppercase text-gray-500 mb-1">
                  Permissions
                </div>

                <div className="inline-block px-2 py-1 rounded border border-violet-500/30 bg-violet-500/10 text-xs font-mono text-violet-300 shadow-[inset_0_0_10px_rgba(139,92,246,0.1)]">
                  {file.permissions}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Folder className="w-4 h-4 mt-0.5 shrink-0 text-gray-500" />

              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase text-gray-500 mb-1">
                  Path
                </div>

                <div
                  title={file.path}
                  className="truncate px-2 py-1 rounded border border-white/5 bg-black-900/50 text-xs text-gray-400 font-mono"
                >
                  {file.path}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        {file.tags && file.tags.length > 0 && (
          <div>
            <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-3 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-500"></div>
              Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {file.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300"
                >
                  <Tag className="w-3 h-3 text-gray-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}