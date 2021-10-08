import React from "react";
import Header from "../Header";
import { BodyWrapper, LayoutWrapper } from "./styled";

export default function Layout({ children }) {
    return (
        <LayoutWrapper>
            <Header />
            <BodyWrapper maxWidth="lg">{children}</BodyWrapper>
        </LayoutWrapper>
    );
}
