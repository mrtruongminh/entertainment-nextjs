import { styled } from "styled-components";
import Menu from "../Menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Menu />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* height: 100dvh; */
  height: 100%;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  gap: 36px;
`;

export default Layout;
