import type { GetStaticProps } from "next";
import Image from "next/image";
import { styled } from "styled-components";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Grid from "@/components/Grid";
import GalleryWrapper from "@/components/GalleryWrapper";
import data from "@/data.json";
import type { Post } from "@/types";

type HomeProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const result = await res.json();
  return { props: { posts: result.docs } };
};

export default function Home({ posts }: HomeProps) {
  console.log("TEST", posts);

  return (
    <>
      <SEO />
      <Layout>
        <GalleryWrapper>
          {data.map((n, idx) => (
            <ImageWrapper key={idx}>
              <Image src={n.thumbnail.regular.large} fill alt={n.title} />
            </ImageWrapper>
          ))}
          {/* {posts.map((n) => (
            <Image
              key={n.id}
              src={n.thumbnailRegular.url}
              width={560}
              height={348}
              alt=""
            />
          ))} */}
        </GalleryWrapper>
      </Layout>
    </>
  );
}

const ImageWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 174px;

  @media (max-width: 1200px) {
    width: 220px;
    height: 140px;
  }

  @media (max-width: 768px) {
    width: 164px;
    height: 110px;
  }
`;
