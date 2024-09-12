import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="h-[80px] lg:h-[150px] p-4 bg-[#0742B8] text-white">
      <div className="sm:w-[90%] w-[95%] h-[100%] mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="relative w-[155px] h-[49px] lg:w-[288px] lg:h-[96px]">
          <Image src="/images/logo.png" alt="Tribuna Santa" className="" fill />
        </div>

        {/* nav links */}
        <ul className="hidden lg:flex items-center space-x-10">
          <li className="text-[30px] font-semibold dinamic_border">
            <Link href="/">Blog</Link>
          </li>
          <li className="text-[30px] font-semibold dinamic_border">
            <Link href="/">Quem Somos</Link>
          </li>
          <li className="text-[30px] font-semibold dinamic_border">
            <Link href="/">Colunistas</Link>
          </li>
          <li className="text-[30px] font-semibold dinamic_border">
            <Link href="/">Parceiros</Link>
          </li>
          <li className="text-[30px] font-semibold dinamic_border">
            <Link href="/">Contatos</Link>
          </li>
        </ul>

        {/* buttons */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* redes sociais */}
          <div className="flex items-center justify-center gap-2">
            <Link href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="w-[24px] h-[24px] md:w-[38px] md:h-[38px]" />
            </Link>
            <Link href="https://www.youtube.com/" target="_blank">
              <FaYoutube className="w-[24px] h-[24px] md:w-[38px] md:h-[38px]" />
            </Link>
          </div>
          <HiMenuAlt2
            onClick={openNav}
            className="w-[24px] h-[24px] md:w-[38px] md:h-[38px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
