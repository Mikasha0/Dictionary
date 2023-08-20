import { LinksFunction } from '@remix-run/node';
import logo from '~/resources/logo.png';
import stylesheet from "~/style/font.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];
export default function Navbar() {
  return (
    <nav className="w-[100%] h-[4rem] bg-white flex">
        <img  className='w-[63px] h-[63px] mt-[11px] sm:ml-[191px]'src={logo} alt='site-logo'/>
        <h1 className='text-[#000000] text-[22px] mt-[29px] ml-[8px] font-medium leading-[34.38px]'>Suvaye Dictionary</h1>
    </nav>
  )
}
