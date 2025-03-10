/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Procesos from "views/Procesos.js";//


const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "CONTACTANOS",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Generalidades",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  /*
  {
    path: "/table",
    name: "Equipos",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin"
  },
  */
  {
    path: "/typography",
    name: "Seguridad",
    icon: "nc-icon nc-badge",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/procesos",
    name: "Procesos",
    icon: "nc-icon nc-settings-90",
    component: Procesos,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Mapas",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    icon: "nc-icon nc-satisfied",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil de usuario",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  }, 
];

export default dashboardRoutes;
