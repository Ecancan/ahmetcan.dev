export interface PageProps<T = Record<string, undefined>> {
  params: T;
  searchParams: Record<string, string | undefined | unknown>;
}
