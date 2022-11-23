import type { NavMenuItem } from "lib/functions/nav-menu-item.model";

export type NavigationHandler = (route: Partial<NavMenuItem>) => void
