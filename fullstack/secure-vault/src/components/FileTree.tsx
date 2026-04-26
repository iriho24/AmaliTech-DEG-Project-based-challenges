import React, { useState } from 'react'
import {
  ChevronRight,
  ChevronDown,
  Folder,
  FileText,
  Image,
  FileCode,
  Archive,
  File,
} from 'lucide-react'
import type { FileNode } from '../lib/mockData'
interface FileTreeProps {
  data: FileNode
  selectedId: string | null
  onSelect: (node: FileNode) => void
}

/**
 * Returns the correct icon based on file type
 */
const getFileIcon = (type: string, isOpen?: boolean) => {
  switch (type) {
    case 'folder':
      return (
        <Folder
          className={`w-4 h-4 ${
            isOpen
              ? 'text-violet-400 fill-violet-500/20'
              : 'text-violet-500'
          }`}
        />
      )

    case 'document':
    case 'pdf':
      return <FileText className="w-4 h-4 text-blue-400" />

    case 'image':
      return <Image className="w-4 h-4 text-pink-400" />

    case 'code':
      return <FileCode className="w-4 h-4 text-emerald-400" />

    case 'archive':
      return <Archive className="w-4 h-4 text-amber-400" />

    default:
      return <File className="w-4 h-4 text-gray-500" />
  }
}

interface TreeNodeProps {
  node: FileNode
  level: number
  selectedId: string | null
  onSelect: (node: FileNode) => void
}

const TreeNode = ({
  node,
  level,
  selectedId,
  onSelect,
}: TreeNodeProps) => {
  const [isOpen, setIsOpen] = useState(level < 2)

  const isSelected = node.id === selectedId
  const hasChildren = node.children && node.children.length > 0

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation()

    if (hasChildren) {
      setIsOpen(!isOpen)
    }

    onSelect(node)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()

      onSelect(node)

      if (hasChildren) {
        setIsOpen(!isOpen)
      }
    }
  }

  return (
    <div>
      {/* Item row */}
      <div
        className={`flex items-center py-1.5 px-2 cursor-pointer rounded-lg transition-all duration-200 group focus-within:ring-1 focus-within:ring-violet-500/50 focus-within:outline-none ${
          isSelected
            ? 'bg-violet-500/10 text-violet-200 border border-violet-500/20 shadow-[inset_0_0_15px_rgba(139,92,246,0.05)]'
            : 'hover:bg-white/5 text-gray-400 hover:text-gray-200 border border-transparent'
        }`}
        style={{
          paddingLeft: `${level * 16 + 8}px`,
        }}
        onClick={() => onSelect(node)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Expand / collapse button */}
        <div
          className={`w-5 h-5 flex items-center justify-center shrink-0 mr-1.5 ${
            hasChildren ? 'hover:bg-white/10 rounded' : ''
          }`}
          onClick={hasChildren ? handleToggle : undefined}
        >
          {hasChildren ? (
            isOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-gray-300" />
            )
          ) : (
            <div className="w-3.5 h-3.5" />
          )}
        </div>

        {/* File name + icon */}
        <div className="flex items-center gap-2.5 min-w-0">
          {getFileIcon(node.type, isOpen)}

          <span
            className={`text-sm tracking-wide font-display truncate ${
              isSelected ? 'font-medium' : ''
            }`}
          >
            {node.name}
          </span>
        </div>
      </div>

      {/* Children */}
      {isOpen && hasChildren && (
        <div className="relative mt-0.5 mb-1">
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-white/5"
            style={{
              left: `${(level + 1) * 16 + 2}px`,
            }}
          />

          {node.children!.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function FileTree({
  data,
  selectedId,
  onSelect,
}: FileTreeProps) {
  return (
    <div className="py-2 pr-2 h-full overflow-y-auto scrollbar-glass">
      <TreeNode
        node={data}
        level={0}
        selectedId={selectedId}
        onSelect={onSelect}
      />
    </div>
  )
}