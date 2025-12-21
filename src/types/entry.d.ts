import type { EntityObject } from './class/entity'
import type { EntryModuleLoader } from './class/entryModuleLoader'
import type { Playground } from './class/playground'
import type { ColorSet } from './entry-static'
import type { Scope } from './playground/scope'

export * from './playground/scope'
export * from './util/static'

export var moduleManager: EntryModuleLoader | undefined
export var playground: Playground | undefined

export var block: {
  hidden: EntryBlock
  stop_run: EntryBlock
  [k: string]: EntryBlock
}

/**
 * @see https://github.com/entrylabs/entryjs/blob/5a191f4bb9ed9389f6de77311f5caae3d76dbc63/types/index.d.ts#L141
 */
export interface EntryBlock {
  color: string
  outerLine?: string
  skeleton: string
  statements?: unknown[]
  template?: string
  params?: unknown[]
  defs?: unknown // legacy
  def: {
    type: string
    [k: string]: unknown
  }
  paramsKeyMap?: Record<string, number>
  class: string
  isFor?: string[]
  isNotFor?: string[]
  events: Record<string, unknown>
  type?: string
  category?: string
  pyHelpDef?: {
    params: string[]
    type: string
  }
  func?(sprite: EntityObject, script: Scope): unknown
  syntax?: {
    js?: unknown[]
    py: unknown[]
  }
  event?: string
  wikiClass?: string
}

/**
 * @see https://github.com/entrylabs/entryjs/blob/5a191f4bb9ed9389f6de77311f5caae3d76dbc63/types/index.d.ts#L169
 */
export interface EntryBlockModule {
  name: string
  title: Record<string, string>
  setLanguage(): Record<string, Record<string, Record<string, string>>>
  colorSet?: ColorSet
  blockMenuBlocks: string[]
  getBlocks(): Record<string, EntryBlock>
  updateEntry?(): void
}
