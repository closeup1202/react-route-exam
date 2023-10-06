import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Wrapper = styled.div`
    box-sizing: border-box;
  `

export const UppperNav = styled.nav`
    background-color: lightgrey;
    font-size: 13px;
    display: flex;
    justify-content: flex-end;
  `

export const List = styled.ul`
    list-style: none;
    display: flex;
    margin:0;
    padding:0;
  `

export const Item = styled.li`
    margin:10px;
    padding:0;
  `

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: inherit;
    &:hover{
      font-weight: bold;
    }
  `

export const MainNav = styled.nav`
    font-size:20px;
    display: flex;
    justify-content: space-around;
    padding : 10px;
    border-bottom: 1px solid green;
  `

export const SideNav = styled.nav`
    background-color: #cdeade;
    font-size: 13px;
    padding:5px;
    width: 100%;
    margin-bottom: 20px;
    padding-left: 300px;
  `
  
  export const SideList = styled.ul`
    list-style: none;
    margin:0;
    padding:0;
  `

export const ConsoleWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 765px;
  `

export const ConsoleNav = styled.nav`
    background-color: #333030;
    color:white;
    font-size: 15px;
    padding:5px;
    width: 20%;
    margin-bottom: 20px;
    height: 100%;
    margin-right: 10px;
  `

export const ConsoleList = styled.ul`
    list-style: none;
    margin:0;
    padding:0;
  `

export const ConsoleButton = styled.button`
    background-color: #333030;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin:10px;
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
    &:hover{
      background-color: white;
      color:black;
    }
  `