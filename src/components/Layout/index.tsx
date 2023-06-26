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
  min-width: 100%;
  width: fit-content;
  min-height: 100%;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.darkBlue};
  display: flex;
  gap: 36px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    padding: 0 16px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
  }
`;

export default Layout;
