export type FileType =
  | 'folder'
  | 'document'
  | 'image'
  | 'code'
  | 'archive'
  | 'pdf'

/**
 * Basic file node structure for the SecureVault file system.
 * Each node can be either a file or a folder (with children).
 */
export interface FileNode {
  id: string
  name: string
  type: FileType
  size?: string
  updatedAt: string
  children?: FileNode[]
  path: string
  owner: string
  permissions: string
  tags?: string[]
}

/**
 * Mock file system data used to simulate SecureVault backend response.
 * This represents a nested folder structure (tree format).
 */
export const mockFileSystem: FileNode = {
  id: 'root',
  name: 'Vault',
  type: 'folder',
  updatedAt: '2023-10-25T10:00:00Z',
  path: '/',
  owner: 'System',
  permissions: 'rwxr-xr-x',

  children: [
    {
      id: 'f1',
      name: 'Engineering',
      type: 'folder',
      updatedAt: '2023-10-24T14:30:00Z',
      path: '/Engineering',
      owner: 'Alex Chen',
      permissions: 'rwxrwx---',

      children: [
        {
          id: 'f1-1',
          name: 'Architecture',
          type: 'folder',
          updatedAt: '2023-10-20T09:15:00Z',
          path: '/Engineering/Architecture',
          owner: 'Alex Chen',
          permissions: 'rwxrwx---',

          children: [
            {
              id: 'd1',
              name: 'system-design-v2.pdf',
              type: 'pdf',
              size: '4.2 MB',
              updatedAt: '2023-10-20T09:20:00Z',
              path: '/Engineering/Architecture/system-design-v2.pdf',
              owner: 'Alex Chen',
              permissions: 'rw-r-----',
              tags: ['Confidential', 'Draft'],
            },
            {
              id: 'd2',
              name: 'api-specs.md',
              type: 'document',
              size: '156 KB',
              updatedAt: '2023-10-19T16:45:00Z',
              path: '/Engineering/Architecture/api-specs.md',
              owner: 'Sarah Jenkins',
              permissions: 'rw-rw-r--',
            },
          ],
        },
        {
          id: 'c1',
          name: 'auth-service.ts',
          type: 'code',
          size: '12 KB',
          updatedAt: '2023-10-24T11:10:00Z',
          path: '/Engineering/auth-service.ts',
          owner: 'David Kim',
          permissions: 'rw-rw-r--',
          tags: ['Core'],
        },
      ],
    },

    {
      id: 'f2',
      name: 'Security',
      type: 'folder',
      updatedAt: '2023-10-25T08:00:00Z',
      path: '/Security',
      owner: 'Elena Rostova',
      permissions: 'rwx------',

      children: [
        {
          id: 'f2-1',
          name: 'Audits',
          type: 'folder',
          updatedAt: '2023-10-22T13:00:00Z',
          path: '/Security/Audits',
          owner: 'Elena Rostova',
          permissions: 'rwx------',

          children: [
            {
              id: 'd3',
              name: 'Q3-Pen-Test-Report.pdf',
              type: 'pdf',
              size: '12.5 MB',
              updatedAt: '2023-10-22T13:05:00Z',
              path: '/Security/Audits/Q3-Pen-Test-Report.pdf',
              owner: 'Elena Rostova',
              permissions: 'r--------',
              tags: ['Highly Confidential', 'Audit'],
            },
            {
              id: 'a1',
              name: 'logs-backup-2023.zip',
              type: 'archive',
              size: '1.2 GB',
              updatedAt: '2023-10-01T00:00:00Z',
              path: '/Security/Audits/logs-backup-2023.zip',
              owner: 'System',
              permissions: 'r--------',
            },
          ],
        },
        {
          id: 'd4',
          name: 'incident-response-plan.docx',
          type: 'document',
          size: '2.1 MB',
          updatedAt: '2023-09-15T10:00:00Z',
          path: '/Security/incident-response-plan.docx',
          owner: 'Elena Rostova',
          permissions: 'rw-r-----',
        },
      ],
    },

    {
      id: 'f3',
      name: 'Marketing',
      type: 'folder',
      updatedAt: '2023-10-21T15:20:00Z',
      path: '/Marketing',
      owner: 'Marcus Johnson',
      permissions: 'rwxrwxr-x',

      children: [
        {
          id: 'i1',
          name: 'securevault-logo-final.svg',
          type: 'image',
          size: '45 KB',
          updatedAt: '2023-10-10T09:00:00Z',
          path: '/Marketing/securevault-logo-final.svg',
          owner: 'Marcus Johnson',
          permissions: 'rw-r--r--',
          tags: ['Brand'],
        },
        {
          id: 'i2',
          name: 'hero-bg-dark.png',
          type: 'image',
          size: '3.4 MB',
          updatedAt: '2023-10-12T14:15:00Z',
          path: '/Marketing/hero-bg-dark.png',
          owner: 'Marcus Johnson',
          permissions: 'rw-r--r--',
        },
      ],
    },
  ],
}

/**
 * Flattens the tree into a single list of nodes.
 * Useful for search or filtering features.
 */
export const flattenTree = (node: FileNode): FileNode[] => {
  let result: FileNode[] = [node]

  if (node.children) {
    node.children.forEach((child) => {
      result = result.concat(flattenTree(child))
    })
  }

  return result
}

// Flat list of all files (useful for search)
export const allFiles = flattenTree(mockFileSystem)