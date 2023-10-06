import { useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConsoleWrapper, ConsoleList, Item, StyledLink, ConsoleNav, ConsoleButton } from "./layout-component";

export function Component(){

  const navigate = useNavigate();

  const onClick = useCallback(() => {
    sessionStorage.removeItem("loginUser")
    navigate("/")
  })

  return(
    <ConsoleWrapper>
      <ConsoleNav>
        <ConsoleList>
          <Item>
            <StyledLink to="/console">Dashboard</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/console/api">API 관리</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/console/monitoring">모니터링</StyledLink>
          </Item>
          <Item>
            <StyledLink to="/console/statistics">통계</StyledLink>
          </Item>
          <ConsoleButton onClick={onClick}>Log out</ConsoleButton>
        </ConsoleList>
      </ConsoleNav>
      <Outlet/>
    </ConsoleWrapper>
  )
}