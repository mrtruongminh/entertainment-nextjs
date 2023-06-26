import { styled } from "styled-components";

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 32px;
`;

export default Grid;
