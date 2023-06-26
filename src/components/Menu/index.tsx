import { styled, css } from "styled-components";
import Image from "next/image";
import IconLogo from "../Icons/IconLogo";
import IconNavHome from "../Icons/IconNavHome";
import IconNavMovies from "../Icons/IconNavMovies";
import IconNavTvSeries from "../Icons/IconNavTvSeries";
import IconNavBookmark from "../Icons/IconNavBookmark";

const Menu = () => {
  return (
    <Wrapper>
      <StyledIconLogo />
      <SubWrapper>
        <StyledIconNavHome />
        <StyledIconNavMovies />
        <StyledIconNavTvSeries />
        <StyledIconNavBookmark />
      </SubWrapper>
      <Avatar src="/image-avatar.png" width={40} height={40} alt="" />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  min-width: 96px;
  /* height: 100%;
  max-height: 960px; */
  height: 960px;
  background-color: ${(props) => props.theme.colors.semiDarkBlue};
  border-radius: 20px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledIconLogo = styled(IconLogo)`
  margin-bottom: 75px;
`;

const baseIconStyles = css`
  color: ${(props) => props.theme.colors.greyishBlue};
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const StyledIconNavHome = styled(IconNavHome)`
  ${baseIconStyles}
`;

const StyledIconNavMovies = styled(IconNavMovies)`
  ${baseIconStyles}
`;

const StyledIconNavTvSeries = styled(IconNavTvSeries)`
  ${baseIconStyles}
`;

const StyledIconNavBookmark = styled(IconNavBookmark)`
  ${baseIconStyles}
`;

const Avatar = styled(Image)`
  margin-top: auto;
  border: 1px solid ${(props) => props.theme.colors.white};
  border-radius: 40px;
`;

export default Menu;
