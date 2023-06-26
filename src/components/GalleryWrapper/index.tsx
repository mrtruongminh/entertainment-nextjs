import { styled } from "styled-components";

type GalleryWrapperProps = {
  children: React.ReactNode;
};

const GalleryWrapper = ({ children }: GalleryWrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  column-gap: 40px;
  row-gap: 32px;
`;

export default GalleryWrapper;
