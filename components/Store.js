import create from 'zustand'
import {persist} from 'zustand/middleware'

let themeStore = set => ({
    theme: "fantasy",
    setTheme: (newTheme) => set(() => {
        console.log(newTheme)
        const dataTheme = document.createAttribute("data-theme");
        dataTheme.value = newTheme;
        document.querySelector("html").attributes.setNamedItem(dataTheme);
        return {theme: newTheme}
    })
})

themeStore = persist(themeStore)
export const useThemeStore = create(themeStore,{name: "theme"})