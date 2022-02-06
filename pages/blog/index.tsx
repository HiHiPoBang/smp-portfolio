import type { NextPage, GetServerSideProps } from 'next';
import { getPosts } from '../../lib/api';
import * as R from 'ramda';
import { IPost } from '../../types/post';
import { Layout, SiteLink, PostThumbnail, H1 } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tw from 'tailwind-styled-components';

type Props = {
  posts: IPost[];
  total: number;
  page: number;
  size: number;
};
const Blog: NextPage<Props> = ({ posts, total, page, size }: Props) => {
  const renderPagination = (isNextPage: boolean) => {
    const pageNumber = isNextPage ? page + 1 : page - 1;
    const iconType = isNextPage ? 'angle-right' : 'angle-left';
    const text = isNextPage ? 'Next Page' : 'Previous Page';
    const isVisible = isNextPage
      ? () => {
          const maxPage = Math.floor(total / size) + (total % size === 0 ? 0 : 1);
          return pageNumber < maxPage;
        }
      : () => pageNumber > 0;
    return isVisible() ? (
      <SiteLink herf={`/blog/?page=${pageNumber}`}>
        {isNextPage ? (
          <>
            {text}
            <div className="mt-0.5 w-6">
              <FontAwesomeIcon icon={iconType} />
            </div>
          </>
        ) : (
          <>
            <div className="mt-0.5 w-6">
              <FontAwesomeIcon icon={iconType} />
            </div>
            {text}
          </>
        )}
      </SiteLink>
    ) : null;
  };
  return (
    <Layout>
      <div className="pt-14 flex flex-col items-center">
        <H1 className="mb-4">My Blog</H1>
        {posts.map((post) => (
          <PostThumbnail
            key={post.slug}
            slug={post.slug}
            thumbnailUrl={post.metadata.thumbnailUrl}
            title={post.metadata.title}
            date={post.metadata.date}
            description={post.metadata.description}
          />
        ))}
        <PaginationWrapper>
          {renderPagination(false)}
          {renderPagination(true)}
        </PaginationWrapper>
      </div>
    </Layout>
  );
};

const isPageValidate = (page: string | string[] | undefined) => {
  return R.type(page) !== 'Array' && !isNaN(Number(page)) && Number(page) > 0;
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const hasPage = R.has('page');
  const page = R.isEmpty(query) ? 1 : !isPageValidate(query.page) || !hasPage(query) ? 0 : Number(query.page);
  const size = 10;
  const { total, posts } = getPosts({ page, size });
  return {
    props: {
      posts,
      total,
      page,
      size,
    },
  };
};
const PaginationWrapper = tw.div`
  grid
  justify-between
  grid-cols-1
  md:grid-cols-2
  gap-x-8
  md:w-full
  max-w-screen-lg
`;
export default Blog;
