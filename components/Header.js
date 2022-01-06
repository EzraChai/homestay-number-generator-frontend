import {HiLockOpen} from "react-icons/hi"

export const Header = () => {

    return (
        <header className="h-[50px] md:h-[50px]">
            <div className="container mx-auto bg-blue-700">
                <div className="wrapper px-4 py-2 md:py-3 md:px-8">
                    <div className="inner-header relative z-[60] h-[50px] flex justify-between items-center">
                        <div className="logo font-[700] text-white md:text-2xl flex items-center">
                            <div className="px-2"><HiLockOpen /></div>
                            <div>Cozy & Sweet.</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
