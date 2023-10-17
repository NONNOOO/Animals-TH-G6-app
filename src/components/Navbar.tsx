import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/Logo21.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className="sticky top-0  min-h-full backdrop-blur-xl">
            <nav className="z-1 bg-green-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrimk-0">
                            <div className="logo-container">
                                <img src={Logo} alt="Logo" className="h-14 w-auto mr-10" />
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <ul className="flex items-centerlist-none ">
                                <li className=" px-4 py-2 text-[#fff] text-lg hover:bg-slate-400 rounded-lg">
                                    <a href="#">หน้าแรก</a>
                                </li>
                                <li className=" px-4 py-2 text-[#fff] text-md hover:bg-slate-400 rounded-lg">
                                    <a href="#">สัตว์ป่า</a>
                                </li>
                                <li className=" px-4 py-2 text-[#fff] text-md hover:bg-slate-400 rounded-lg">
                                    <a href="#">พื้นที่ธรรมชาติ</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex mr-10 md:hidden">
                            <p className="text-white font-bold">WILD ANIMALS APP</p>
                        </div>

                        <div className="mr-2 flex md:hidden">
                            <button
                                onClick={() => setShowMenu(!showMenu)}
                                className="text-2xl items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">open main menu</span>
                                <FiMenu />
                            </button>
                        </div>
                    </div>
                </div>
                {showMenu && (
                    <div
                        className={`flex flex-col px-2 pt-3 pb-3 space-y-1 sm:px-3 md:hidden`}
                    >
                        <a
                            href="/"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            หน้าแรก
                        </a>
                        <a
                            href="/"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            สัตว์ป่า
                        </a>
                        <a
                            href="/"
                            className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            พื้นที่ธรรมชาติ
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
