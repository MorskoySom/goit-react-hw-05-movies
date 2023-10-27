import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

export const Container = styled.div`
    display: flex;    
`


const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`

export const Layout = () => {
    return (
        <Container>
            <header>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/movies"> Movies </Link>
                </nav>
            </header>
            <Outlet />

        </Container>

    )
}
