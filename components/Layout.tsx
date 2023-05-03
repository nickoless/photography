import Navbar from "./Navbar";
import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
