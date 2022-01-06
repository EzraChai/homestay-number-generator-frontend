import {HiLockOpen} from "react-icons/hi"
import { useThemeStore } from "./Store"

export const Header = () => {

    const handleChangeTheme = useThemeStore(state => state.setTheme)


    const handleTheme = (e) => {
        if(e.target.innerHTML === "Light"){
            handleChangeTheme("fantasy")
        }else if(e.target.innerHTML === "Dark"){
            handleChangeTheme("darkula")
        }else if(e.target.innerHTML === "Lofi"){
            handleChangeTheme("lofi")
        }else if(e.target.innerHTML === "Luxury"){
            handleChangeTheme("luxury")
        }
    }

    return (
        <header className="md:h-[50px]">
            <div className=" bg-base-300">
                <div className="wrapper px-4 py-2 md:py-3 md:px-8">
                    <div className="inner-header relative z-[60] h-[50px] flex justify-between items-center">
                        <div className="logo font-[700] md:text-2xl flex items-center">
                            <div className="px-2"><HiLockOpen /></div>
                            <div>Cozy & Sweet.</div>
                        </div>
                        <div className="dropdown md:dropdown-hover">
                             <button tabIndex="0" className="md:m-1 md:py-2 btn btn-outline">
                                 <div className="md:hidden flex items-center">
                                    Theme
                                    <div className="rotate-90 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-2 stroke-current">  
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>                        
                                        </svg>
                                    </div>
                                 </div>
                                 <div className="hidden md:flex items-center">
                                    Change Theme
                                    <div className="rotate-90 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 ml-2 stroke-current">  
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>                        
                                        </svg>
                                    </div>
                                 </div>
                                </button> 
                            <ul tabIndex="0" className="p-2 shadow-xl menu dropdown-content bg-base-300 rounded-box w-[7rem] md:w-[12rem]">
                                <li>
                                <a onClick={(e) => handleTheme(e)}>Light</a>
                                </li> 
                                <li>
                                <a onClick={(e) => handleTheme(e)}>Dark</a>
                                </li> 
                                <li>
                                <a onClick={(e) => handleTheme(e)}>Lofi</a>
                                </li> 
                                <li>
                                <a onClick={(e) => handleTheme(e)}>Luxury</a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
