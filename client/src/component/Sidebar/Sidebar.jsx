import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions, MdOutlinePlaylistAddCheck } from "react-icons/md";

import { LuVideo } from "react-icons/lu";
import { Link } from 'react-router-dom';
const SidebarItem = ({ icon: Icon, label, sidebarOpen, path }) => {
  return (
    <Link
      to={path}
      className={`flex ${sidebarOpen ? 'gap-4 pl-5' : 'justify-center'} my-4 items-center hover:font-bold hover:bg-gray-300 w-full  text-2xl `}
    >
      <Icon />
      {sidebarOpen && <span className="text-sm">{label}</span>}
    </Link>
  );
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const items = [
    { icon: IoHomeOutline, label: 'Home', path: '/' },
    { icon: LuVideo, label: 'Free Video', path: '/freevideo' },
    { icon: MdOutlineSubscriptions, label: 'Subscriptions', path: '/subscription' },
    { icon: MdOutlinePlaylistAddCheck, label: 'Playlist', path: '/playlist' },
  ];

  return (
    <nav
      className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-gray-200 h-full transition-all duration-300 relative`}
    >
      {sidebarOpen && (
        <span
          className="text-sm cursor-pointer absolute right-0 px-2 hover:bg-gray-300 hover:font-semibold transition-all duration-500"
          onClick={() => setSidebarOpen(false)}
        >
          Close
        </span>
      )}
      {items.map((item, index) => (
        <SidebarItem
          key={index}
          icon={item.icon}
          label={item.label}
          path={item.path} // Pass the path to SidebarItem
          sidebarOpen={sidebarOpen}
        />
      ))}
    </nav>
  );
};

export default Sidebar;

// const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
//   const items = [
//     { icon: IoHomeOutline, label: 'Home', path: '/' },
//     { icon: LuVideo, label: 'Free Video', path: '/freevideo' },
//     { icon: MdOutlineSubscriptions, label: 'Subscriptions', path: '/subscription' },
//     { icon: MdOutlinePlaylistAddCheck, label: 'Playlist', path: '/playlist' },
//   ];

//   return (
//     <nav
//       className={`${sidebarOpen ? 'w-64' : 'w-16'
//         } bg-gray-200 h-full  transition-all duration-300 relative `}
//     >
//       {sidebarOpen &&
//         <span className="text-sm cursor-pointer absolute right-0 px-2 hover:bg-gray-300 hover:font-semibold hover:transition-all hover:duration-500 "
//           onClick={() => setSidebarOpen(false)}>
//           close
//         </span>}
//       {items.map((item, index) => (
//         <SidebarItem
//           key={index}
//           icon={item.icon}
//           label={item.label}
//           sidebarOpen={sidebarOpen}
//         />
//       ))}
//     </nav>
//   );
// };

// export default Sidebar;
