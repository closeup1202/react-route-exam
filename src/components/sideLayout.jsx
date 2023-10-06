import { url } from "../constants/url";
import { Wrapper, List, Item, StyledLink, SideNav } from "./layout-component";

export default function SideLayout({baseUrl}){

  const { name, datas } = url.find((url) => url.name === baseUrl);

  return(
    <Wrapper>
      <SideNav>
        <List>
          {
            datas.map((data)=> (
              <Item key={data.key}>
                <StyledLink to={name + data.key}>{data.value}</StyledLink>
              </Item>
            ))
          }
        </List>
      </SideNav>
    </Wrapper>
  )
}