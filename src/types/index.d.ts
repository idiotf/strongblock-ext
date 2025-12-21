declare global {
  var Entry: typeof import('./entry')
  var Lang: typeof import('./lang')
  var EntryStatic: typeof import('./entry-static')
}

export { EntryBlockModule, EntryBlock } from './entry'
