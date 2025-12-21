import * as strongblock from './blocks/block_strongblock'
import type { EntryBlockModule } from './types'

const categories = [
  strongblock,
]

function addCategory(moduleObject: EntryBlockModule) {
  const blocks = EntryStatic.getAllBlocks()
  if (blocks.some(({ category }) => moduleObject.name == category)) return

  const upperName = moduleObject.name.toUpperCase()
  Lang.Blocks[upperName] = moduleObject.title[Lang.type] || moduleObject.title[Lang.fallbackType]

  const { colorSet } = moduleObject
  if (colorSet) {
    EntryStatic.colorSet.block.default[upperName] = colorSet.default
    EntryStatic.colorSet.block.darken[upperName] = colorSet.darken
    EntryStatic.colorSet.block.lighten[upperName] = colorSet.lighten
    EntryStatic.colorSet.block.emphasize[colorSet.default] = colorSet.emphasize
  }

  EntryStatic.getAllBlocks = (getAllBlocks => () => [
    ...getAllBlocks(),
    {
      category: moduleObject.name,
      blocks: moduleObject.blockMenuBlocks,
    },
  ])(EntryStatic.getAllBlocks)

  Entry.playground?.blockMenu?._categoryData.push({
    category: moduleObject.name,
    blocks: [],
  })

  Entry.moduleManager?.setLanguageTemplates(moduleObject)
  Entry.playground?.blockMenu?._generateCategoryView(Entry.playground.blockMenu._categoryData)
  Entry.playground?.blockMenu?._generateCategoryCode(moduleObject.name)

  Entry.moduleManager?.loadBlocks({
    categoryName: moduleObject.name,
    blockSchemas: Object.entries(moduleObject.getBlocks()).map(([blockName, block]) => ({
      blockName,
      block,
      isBlockShowBlockMenu: true,
    })),
  })

  Entry.playground?.blockMenu?.setMenu()
  moduleObject.updateEntry?.()
}

function addCategories() {
  categories.forEach(addCategory)
}

if ('Entry' in self) addCategories()
else {
  const observer = new MutationObserver(() => {
    if ('Entry' in self) {
      addCategories()
      observer.disconnect()
    }
  })

  observer.observe(document, { subtree: true, childList: true })
}
