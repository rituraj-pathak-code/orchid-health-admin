import { LuLayoutDashboard } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";
import { PiUsersLight } from "react-icons/pi";
import { GoOrganization } from "react-icons/go";

export const SIDEBAR_ITEMS  = [
    {
        icon: LuLayoutDashboard,
        navigation: "/",
        title: "Dashboard"
    },
    {
        icon: PiUsersLight,
        navigation: "/users",
        title: "Users",
        subMenu: [
            {
                title: "Users",
                navigation: "/users"
            },
            {
                title: "Invited Users",
                navigation: "/invited-users"
            }
        ]
    },
    {
        icon: GoOrganization,
        navigation: "/organisatons",
        title: "Organisations"
    },
    {
        icon: IoCreateOutline,
        navigation: "/countries",
        title: "Countries"
    }
]