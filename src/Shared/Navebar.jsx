import usa from '../assets/dashboard.png'

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({ lang: "Eng (US)", flag: usa });
    const [prof, setProf] = useState(false);

    const handleLanguageChange = (lang, flag) => {
        setSelectedLanguage({ lang, flag });
        setIsOpen(false);
    };


    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-md w-full rounderd-[15px]">
            <div className="text-xl font-bold">Dashboard</div>

            <div className="flex justify-center items-center">
                <div className="relative ">
                    <input type="text" placeholder="Search here..." className="w-[500px] pl-10 pr-4 py-2 rounded-md  bg-[#F9FAFB] focus:outline-none focus:border-blue-500" />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFCB00]" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-8 p-2">
                <div className="relative flex items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <img src={selectedLanguage.flag} alt={`${selectedLanguage.lang} Flag`} className="w-6 h-6 rounded-full mr-2" />
                    <span className="flex items-center">{selectedLanguage.lang}
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                    {isOpen && (
                        <div className="absolute right-0 mt-36 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" onClick={() => handleLanguageChange("Eng (US)", usa)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Eng (US)</a>
                                <a href="#" onClick={() => handleLanguageChange("Español", usa)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Español</a>
                                <a href="#" onClick={() => handleLanguageChange("Français", usa)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Français</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className='rounded-lg bg-[#FEEEE0] p-1'>
                    <NotificationsNoneIcon className="text-[#FFCB00] cursor-pointer" />
                </div>
                <div className="flex items-center mr-6 cursor-pointer" onClick={()=>setProf(!prof)}>
                    <img src={usa} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
                    <span className='flex item-center'>Musifq
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </span>
                    {prof && (
                        <div className="absolute right-0 mt-36 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                              <Link to='/profile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Profile</Link>
                              <Link to='/login'  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

