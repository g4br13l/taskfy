


export type PaginatedResT<T> = {
  first: number
  prev: number
  next: number
  last: number
  pages: number
  items: number
  data: T[]
}
