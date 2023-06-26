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
  /* justify-content: center; */
  column-gap: 40px;
  row-gap: 32px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    column-gap: 30px;
    row-gap: 24px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    column-gap: 15px;
    row-gap: 16px;
  }
`;

export default GalleryWrapper;
