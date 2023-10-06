import { Outlet } from "react-router-dom";
import { Wrapper, UppperNav, List, Item, StyledLink, MainNav } from "./layout-component";

export default function Layout(){
  return(
    <Wrapper>
      <UppperNav>
        <List>
          <Item>
            <StyledLink to="/subscribe">서비스 신청</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/signin">로그인</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/signup">회원등록</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/sitemap">사이트맵</StyledLink>
          </Item>
        </List>
      </UppperNav>
      <MainNav>
        <List>
          <Item>
            <StyledLink to="/">Home</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/about">소개</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/apis">서비스</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/support">고객지원</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/nothing-here">(Not Found)</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/throw-error">(Throw Error)</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/console">(콘솔 - 로그인 시 보임+접속 가능)</StyledLink>
          </Item>
        </List>
      </MainNav>
      <Outlet/>
    </Wrapper>
  )
}
