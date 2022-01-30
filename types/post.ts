export interface ISlug {
  slug: string;
}
export interface IPostMeta {
  thumbnailUrl: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
}
export interface IPost extends ISlug {
  metaData: IPostMeta;
}
