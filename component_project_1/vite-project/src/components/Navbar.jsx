import{ 
 FaHome,
 FaInfoCircle,
 FaServicestack,
 FaEnvelope,

 } from "react-icons/fa"
const navlink=[
    {
        name:"Home",
        icon:<FaHome/>,
        href:"#"
    },
       {
        name:"About",
        icon:<FaInfoCircle/>,
        href:"#"
    },
       {
        name:"Services",
        icon:<FaServicestack/>,
        href:"#"
    },
       {
        name:"Contact",
        icon:<FaEnvelope/>,
        href:"#"
    },
]



function Navbar() {
return (
      <>
  
      <nav className="bg-gray-900 text-white p-5">
        <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">🚀 My Website</h1>
      <ul className="flex space-x-6">
        {/* <li className="hover:underline  hover:text-gray-600"> <a className="flex items-center gap-1" href=""><FaHome/>Home</a>      </li>
        <li className="hover:underline  hover:text-gray-600"> <a className="flex items-center gap-1" href=""><FaInfoCircle/>About</a>     </li>
        <li className="hover:underline  hover:text-gray-600"> <a className="flex items-center gap-1" href=""><FaServicestack/>Services</a>  </li>
        <li className="hover:underline  hover:text-gray-600"> <a className="flex items-center gap-1" href=""><FaEnvelope/>Contact</a>   </li> */}

        {navlink.map((link,index) =>(
             <li key={index}>
                <a
                href={link.href}
                className="flex items-center gap-1 hover:text-gray-600"
                >
                    {link.icon}
                    {link.name}

                </a>
 
             </li>

        ))}
      </ul>
      </div>
      </nav>
      </>
)
}
export default Navbar;