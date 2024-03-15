import { createContext, useContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = SidebarContext.Provider

export default function useSidebar(){
    return useContext(SidebarContext)
}