import { FC } from "react";
import Nav from "./nav";
import Mark from "./mark";



const Header: FC = () => {
    return ( 
        <header className="flex justify-center items-center h-32">
            <div className="container flex flex-row justify-between">
                <Mark />
                <Nav />
            </div>
        </header>
    
    );
}
export default Header;