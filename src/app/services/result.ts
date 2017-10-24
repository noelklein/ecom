export interface SearchResult<T> {
  results: T[];
  pageNumber: number;
  totalPages: number;
  totalRecords: number;
}
