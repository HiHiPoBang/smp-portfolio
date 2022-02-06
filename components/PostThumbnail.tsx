import tw from 'tailwind-styled-components';
import { ISlug, IPostMeta } from '../types/post';
import { H3, SiteLink } from '.';
import NextImage from 'next/image';

type Props = ISlug & IPostMeta;
const PostThumbnail = ({ slug, thumbnailUrl, title, date, description }: Props) => {
  const postLink = `/blog/${encodeURIComponent(slug)}`;
  return (
    <PostWrapper key={slug}>
      <Thumbnail>
        <SiteLink herf={postLink}>
          <NextImage
            src={thumbnailUrl}
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="70px"
            priority={true}
          />
        </SiteLink>
      </Thumbnail>
      <Briefly>
        <SiteLink herf={postLink}>
          <Title>{title}</Title>
        </SiteLink>
        <DateLabel>{date}</DateLabel>
        <Description>{description}</Description>
        <SiteLink herf={postLink}>
          <ReadMoreBtn>more...</ReadMoreBtn>
        </SiteLink>
      </Briefly>
    </PostWrapper>
  );
};
const PostWrapper = tw.div`
  grid
  sm:grid-cols-12
  grid-cols-1
  content-start
  mx-2
  mb-4
  md:w-full
  max-w-screen-md
  p-4
  min-h-[200px]
  bg-gray-50
`;
const Thumbnail = tw.figure`
  sm:col-span-4
  mb-8
  md:mb-0
  md:mt-3
  w-full
  h-[172px]
`;
const Briefly = tw.section`
  sm:col-span-8
  flex
  flex-col
  h-full
  sm:pl-5
  px-1
`;
const Title = tw(H3)`
  mt-2
`;
const Description = tw.p`
  grow
  mt-2
  mb-4
  margin: 0.5rem 0 1rem 0;
  line-clamp-3
  text-gray-800
  text-base
`;
const DateLabel = tw.label`
  inline-block
  text-gray-400
  text-base
`;
const ReadMoreBtn = tw(DateLabel)`
  w-full
  text-right 
`;
export default PostThumbnail;
