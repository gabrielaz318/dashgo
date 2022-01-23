import { NavLink } from "./NavLink";
import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function SideBarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink href="/dashboard" icon={RiDashboardLine} children="Dashboard" />
                <NavLink href="/users" icon={RiContactsLine} children="Usuários" />
            </NavSection>

            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" icon={RiInputMethodLine} children="Formulários" />
                <NavLink href="/automation" icon={RiGitMergeLine} children="Automação" />
            </NavSection>
        </Stack>
        )
}