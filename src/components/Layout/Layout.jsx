import { Suspense } from "react";
import { Container, Linka, Hat } from "./Layout.styled";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <Container>
            <Hat>
                <Linka to="/"> Home </Linka>
                <Linka to="/movies"> Movies </Linka>
            </Hat>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>

        </Container>

    )
}
