import { create } from "zustand";
import { persist } from "zustand/middleware";

interface iSidebarState {
    sideBarShow: boolean;
    setSideBarShow: (value: boolean) => void;
}

interface iMainMenuState {
    mainMenu: boolean;
    setMainMenu: (value: boolean) => void;
}

export const useSidebar = create<iSidebarState>(set => ({
    sideBarShow: true,
    setSideBarShow: (value: boolean) => set({ sideBarShow: value }),
}));

export const useMainMenu = create<iMainMenuState>()(
    persist(
        set => ({
            mainMenu: true,
            setMainMenu: (value: boolean) => set({ mainMenu: value }),
        }),
        {
            name: "mainmenu",
        },
    ),
);
