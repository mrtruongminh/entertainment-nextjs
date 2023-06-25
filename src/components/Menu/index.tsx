import { styled } from "styled-components";

const Menu = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.nav`
  width: 96px;
  height: 960px;
  background-color: ${(props) => props.theme.colors.semiDarkBlue};
  border-radius: 20px;
`;

export default Menu;
