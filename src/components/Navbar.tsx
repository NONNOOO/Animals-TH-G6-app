import { useState } from 'react'
import Logo from '../assets/Logo21.png'
import { FiMenu, FiX } from "react-icons/fi"
import { Link } from 'react-router-dom';


function Navbar() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);


    return (
        <nav className="sticky top-0  bg-[#3C6255] border-gray-200 ">
            <div className=" max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <a href="/" className="flex items-center">
                    <img src={Logo} className="h-16 w-auto" alt="Logo" />
                </a>

                <div className="flex md:hidden">
                    <p className='text-white font-bold'>WILD ANIMALS APP</p>
                </div>

                <button
                    onClick={() => setShowMenu(!showMenu)}

                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-1 w-9 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#79AC78] focus:outline-none focus:ring-2 focus:ring-gray-200 "
                    aria-controls="navbar-default"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <div className=" text-2xl" onClick={handleClick}>
                        {click ? (
                            <FiMenu />
                        ) : (
                            <FiX />
                        )}
                    </div>
                </button>



                <div className="hidden md:block w-auto" >
                    <ul className="font-medium  text-lg flex flex-row p-0 mt-0 border-0   space-x-4   ">
                        <li>
                            <a href="/" className="block py-2 px-2 text-white  rounded-lg   hover:bg-[#79AC78]" >
                                หน้าแรก</a>
                        </li>
                        <li>
                            <a href="/Natural" className="block py-2 px-2 text-white  rounded-lg hover:bg-[#79AC78] ">
                                สัตว์ป่า</a>
                        </li>
                        <li>
                            <Link to="/Natural" className="block py-2 px-2 text-white  rounded-lg  hover:bg-[#79AC78]">
                                พื้นที่ธรรมชาติ</Link>
                        </li>
                    </ul>
                </div>

                {showMenu && (
                    <div className="block w-full md:hidden ">
                        <ul className="font-medium p-4 md:p-0 mt-4 border-[#D0E7D2] rounded-lg bg-[#618264] flex-row md:space-x-8    ">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded-lg  hover:bg-[#79AC78] ">
                                    หน้าแรก</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded-lg  hover:bg-[#79AC78]">
                                    สัตว์ป่า</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white  rounded-lg  hover:bg-[#79AC78]">
                                    พื้นที่ธรรมชาติ</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>


    )
}

export default Navbar
