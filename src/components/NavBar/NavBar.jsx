import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';


const NavBar = () => {
    const [icons, setIcons] = useState(false);
    const routes = [
        { id: 1, name: 'Home', pathName: '/' },
        { id: 2, name: 'About', pathName: '/about' },
        { id: 3, name: 'Services', pathName: '/services' },
        { id: 4, name: 'Contact', pathName: '/contact' },
        { id: 5, name: 'NotFound', pathName: '*' }
    ];

    return (
        <div>
            <div className="md:hidden bg-yellow-200 text-black" onClick={() => setIcons(!icons)}>
                {
                    icons ? <RxCross1 className="text-xl"></RxCross1> : <AiOutlineMenu className="text-xl"></AiOutlineMenu>
                }
            </div>

            <ul className={`md:flex  absolute ${icons? 'top-16' : '-top-60'} duration-1000  bg-yellow-400 text-black p-4 w-full md:static`}>

                {
                    routes.map((route, idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;