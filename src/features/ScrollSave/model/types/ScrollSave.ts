// Record<Адрес страницы, позиция скролла>

interface IItemScroll {
  path: string;
  position: number;
}

export interface IScrollSaveSchema {
  scroll: Record<string, number>;
}
