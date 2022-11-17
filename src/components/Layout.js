import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Popover, Button } from "antd";
import BackgroundAnimate from "../BackgroundAnimate";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open) => {
    setHovered(false);
    setClicked(open);
  };

  const clickContent = (
    <div>
      <p>Name : {user?.name}</p>
      <p>E-Mail : {user?.email}</p>
      <p>
        Phone : {user?.phoneNumber ? user?.phoneNumber : "yet to be updated"}
      </p>
    </div>
  );

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Apply Mechanic",
      path: "/apply-mechanic",
      icon: "ri-motorbike-fill",
    },
  ];

  const mechanicMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Appointments",
      path: "/mechanic/appointments",
      icon: "ri-file-list-line",
    },
    {
      name: "Profile",
      path: `/mechanic/profile/${user?._id}`,
      icon: "ri-user-line",
    },
  ];

  const adminMenu = [
    {
      name: "Home",
      path: "/",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Mechanics",
      path: "/admin/mechaniclist",
      icon: "ri-riding-fill",
    },
  ];

  const menuToBeRendered = user?.isAdmin
    ? adminMenu
    : user?.isMechanic
    ? mechanicMenu
    : userMenu;
  const role = user?.isAdmin ? "Admin" : user?.isMechanic ? "Mechanic" : "User";
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            {!collapsed ? (
              <p>
                <h5 className="logo">Motorcycle Servicing Company</h5>
                <h1 className="role mt-1">Role : {role}</h1>
              </p>
            ) : (
              <p>
                <h1 className="logo">MSC</h1>
                <h1 className="role mt-1">{role}</h1>
              </p>
            )}
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && "active-menu-item"
                  }`}
                >
                  {/* <i className={menu.icon}></i> */}
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                  {collapsed && (
                    <Link to={menu.path}>
                      <i className={menu.icon}></i>
                    </Link>
                  )}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              {!collapsed && <Link to="/login">Logout</Link>}
              {collapsed && (
                <Link to="/login">
                  <i className="ri-logout-circle-line"></i>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}

            <div className="d-flex align-items-center px-4">
              <Badge
                count={user?.unseenNotifications.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-line header-action-icon px-3"></i>
              </Badge>

              <a className="anchor mx-2">
                <Popover
                  placement="bottomLeft"
                  content={<div>{clickContent}</div>}
                  title={`${role}'s Deatils`}
                  trigger="click"
                  open={clicked}
                  onOpenChange={handleClickChange}
                >
                  <Button type="link">Profile</Button>
                </Popover>
              </a>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

//     <div className="main">
//       <div className="d-flex layout">
//         <div className="sidebar">
//           <div className="sidebar-header">
//             {!collapsed && (
//               <div>
//                 <h1 className="logo2">
//                   <span className="first-letter"></span>Motorcycle Servicing
//                   Company
//                 </h1>
//                 <h1 className="role">
//                   <span className="first-letter">Role</span> : {role}
//                 </h1>
//               </div>
//             )}

//             {collapsed && (
//               <div>
//                 <h1 className="logo">MSC</h1>
//                 <h1 className="role2">
//                   {user?.isAdmin ? (
//                     <i class="ri-admin-fill"></i>
//                   ) : user?.isMechanic ? (
//                     <i class="ri-motorbike-fill"></i>
//                   ) : (
//                     <i class="ri-file-user-line"></i>
//                   )}
//                 </h1>
//               </div>
//             )}
//           </div>

//           <div className="menu">
//             {menuToBeRendered.map((menu) => {
//               const isActive = location.pathname === menu.path;
//               return (
//                 <div
//                   className={`d-flex menu-item ${
//                     isActive && "active-menu-item"
//                   }`}
//                 >
//                   <Link to={menu.path}>
//                     <i className={menu.icon}></i>
//                   </Link>
//                   {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
//                 </div>
//               );
//             })}
//             <div
//               className={`d-flex menu-item `}
//               onClick={() => {
//                 localStorage.clear();
//                 navigate("/login");
//               }}
//             >
//               <i className="ri-logout-circle-line"></i>
//               {!collapsed && <Link to="/login">Logout</Link>}
//             </div>
//           </div>
//         </div>

//         <div className="content">
//           <div className="header">
//             {collapsed ? (
//               <i
//                 className="ri-menu-2-fill header-action-icon"
//                 onClick={() => setCollapsed(false)}
//               ></i>
//             ) : (
//               <i
//                 className="ri-close-fill header-action-icon"
//                 onClick={() => setCollapsed(true)}
//               ></i>
//             )}

//             <div className="d-flex align-items-center px-4">
//               <Badge
//                 count={user?.unseenNotifications.length}
//                 onClick={() => navigate("/notifications")}
//               >
//                 <i className="ri-notification-line header-action-icon px-3"></i>
//               </Badge>

//               <Link className="anchor mx-2" to="/profile">
//                 {user?.name}
//               </Link>
//             </div>
//           </div>

//           <div className="body">{children}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Layout;
