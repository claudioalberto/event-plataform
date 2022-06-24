import { List, X } from "phosphor-react";
import { useState } from "react";
import { Logo } from "./Logo";


interface HeaderProps{
    callbackMenu: Function,
    sidebarStatus: boolean
}

export function Header(props: HeaderProps) {

    return (
        <header className="w-full py-5 px-6 md:px-0 flex items-center justify-between md:justify-center bg-gray-700 border-b border-gray-600">
            <a href="/">
                <Logo />
            </a>
            <div 
                className="flex items-center gap-2 md:hidden"
                onClick={event => props.callbackMenu() }
                >
                {!props.sidebarStatus
                    ? (<>
                        <span>Aulas</span>
                        <List size={32} color="#81D8F7" />
                    </>)
                    : (
                        <>
                         <span>Fechar</span>
                        <X size={32} color="#81D8F7" />
                        </>
                    )}
            </div>
        </header>
    );
}