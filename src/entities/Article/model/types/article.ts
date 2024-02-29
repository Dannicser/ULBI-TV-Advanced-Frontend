export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: IArticleBlock[];
  userId?: string;
}

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ALL = "ALL",
}

export type IArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface IArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

//list

export enum ArticleView {
  SMALL = "SMALL",
  BIG = "BIG",
}

// sort

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "createdAt",
}
