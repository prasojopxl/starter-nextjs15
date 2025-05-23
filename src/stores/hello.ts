import { create } from "zustand";

interface iHelloStore {
    name: string;
    setName: (name: string) => void;
}

export const useStore = create<iHelloStore>((set) => ({
    name: "Welcome",
    setName: (name) => set(() => ({ name })),
}));
