import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarDrawerproviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SiderBarDrawerProvider({ children }: SideBarDrawerproviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    },[router.asPath]);

    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);