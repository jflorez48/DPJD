// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "./Logo.png";
// import NavLinkk from "./NavLink";
// import Button from "./Button";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// export const Navbarr = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="bg-white ">
//       <div className="flex items-center font-medium justify-around">
//         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
//           <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
//           <div
//             className="text-3xl md:hidden cursor-pointer"
//             onClick={() => setOpen(!open)}
//           >
//             <MenuIcon name={`${open ? "CloseIcon" : "MenuIcon"}`} />
//           </div>
//         </div>
//         <ul className="md:flex hidden uppercase items-center gap-8 ">
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLinkk />
//         </ul>
//         <div className="md:block hidden">
//           <Button />
//         </div>

//         {/* Mobile nav */}
//         <ul
//           className={`
//              md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
//              duration-500 ${open ? "left-0" : "left-[-100%]"}
             
       
//         `}
//         >
//           <li>
//             <Link to="/" className="py-7 px-3 inline-block">
//               Home
//             </Link>
//           </li>
//           <NavLink />
//           <div className="py-5">
//             <Button />
//           </div>
//         </ul>
//       </div>
//     </nav>
//   );
// };
