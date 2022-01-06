import {Header} from "./Header"

export const Layout = ({children}) => {
    return (
        <div data-theme="dark">
            <Header/>
                {children}
        </div>
    )
}
