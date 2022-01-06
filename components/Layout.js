import { useEffect } from "react"
import {Header} from "./Header"
import { useThemeStore } from "./Store"

export const Layout = ({children}) => {

    const theme = useThemeStore(state => state.theme)

    useEffect(() => {
        const dataTheme = document.createAttribute("data-theme");
        dataTheme.value = theme;
        document.querySelector("html").attributes.setNamedItem(dataTheme);
    })
    return (
        <div className="bg-base-200 w-[full] h-screen">
            <Header/>
                {children}
        </div>
    )
}
