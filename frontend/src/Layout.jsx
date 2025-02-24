import React from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
export default function Layout({ children }) {
    return (
        <>
            <Header />
                {children}
            <Navigation />
        </>
    );
}
