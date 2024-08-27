import Link from "next/link";
import { FC } from "react";

const Nav: FC = () =>{
    return(
        <nav className="px-6 text-2xl lg:text-xl">
            <ul className="flex flex-row gap-x-11">
                <li>
                    <Link href={"/"} className="hover:text-blue-400">
                        Skill
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:text-blue-400">
                        About
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:text-blue-400">
                        Works                        
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;