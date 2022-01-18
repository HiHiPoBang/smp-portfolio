export interface IPostMeta {
  title: string;
  date: string;
  thumbnailUrl: string;
  description?: string;
  tags?: string[];
}
export interface IPost {
  slug: string;
  metaData: IPostMeta;
}
