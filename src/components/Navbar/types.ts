import { ReactElement } from "react";

export type NavButtons = 'home' | 'tracks' | 'albums';

export type NavbarButtonsConfig = Record<NavButtons, { name: string, icon: ReactElement, href: string, }>