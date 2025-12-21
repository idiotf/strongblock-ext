import { getStrongBlocks, blockMenuBlocks } from './block_strongblock_core'
import type { EntryBlock } from '../types'

export const name = 'API'
export const title = {
  ko: '강력크',
}

export function setLanguage() {
  return {}
}

export { blockMenuBlocks }

export function getBlocks() {
  const blocks: Record<string, EntryBlock> = {}
  const strongBlocks = getStrongBlocks()

  for (const {
    name,
    template,
    color,
    params,
    def,
    map,
    class: cls = 'default',
    func,
    skeleton = 'basic',
  } of strongBlocks) blocks[name] = {
    color: color.default,
    outerLine: color.darken,
    skeleton,
    statements: [],
    params,
    events: {},
    def: {
      params: def,
      type: name,
    },
    paramsKeyMap: map,
    class: cls,
    func,
    template,
  }

  return blocks
}
