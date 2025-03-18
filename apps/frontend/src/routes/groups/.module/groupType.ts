


const category = {
  notification: { id: 1, label: 'Push notifications' },
  calendar: { id: 2, label:'Calendar' },
  cronJob: { id: 3,  label:'Cron Job' },
  email: { id: 4, label:'Email' }
} as const


export type CategoryKeyWithLabelT<T, L> = {
  [K in keyof T]: T[K] extends { label: L } ? K : never
}[keyof T]

export function getCategoryKeyWithLabel(labelSearch: CategoryValuesT['label']) {
  return Object.keys(category)
    .find(
      k=> category[k as keyof CategoryT].label === labelSearch
    ) as CategoryKeyWithLabelT<CategoryT, typeof labelSearch>
}


export type CategoryT = typeof category // OR [key in keyof CategoryT]: CategoryT[key]
export type CategoryKeysT = keyof typeof category
export type CategoryKeyT<T extends CategoryKeysT> = (typeof category)[T]
export type CategoryValuesT = (typeof category)[CategoryKeysT]
export type CategoryValueT<T extends CategoryKeysT> = (typeof category)[T]


export type GroupT = {
  id: number
  enabled: boolean
  title: string
  category: CategoryValuesT
}
