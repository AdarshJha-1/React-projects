function Header() {

    return (
        <header>
            <nav className="h-[70px] w-full flex flex-wrap items-center justify-between px-[85px]">
                <img className="w-[76px] h-[42.75px]" src='../../img/brand_logo.png' alt="" />
                <ul className="list-none w-[333px] flex gap-x-[24px] text-[#2E2E2E] text-[16px] font-semibold font-poppins">
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">LOCATION</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">CONTACT</a>
                    </li>
                </ul>
                <button className="bg-[#D01C28] py-[6px] px-[16px] font-semibold text-white">Login</button>
            </nav>
        </header>
    )
}

export default Header
