import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import Productos from "views/Productos";
import Perfil from "views/Perfil";
import NuevoProducto from "views/NuevoProducto";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
    component: <Dashboard />,
    layout: "/admin",
    visibleEnSidebar: true
  },
  {
    path: "/productos",
    name: "Productos",
    icon: "nc-icon nc-bag-16",
    component: <Productos />,
    layout: "/admin",
    visibleEnSidebar: true
  },
  {
    path: "/icons",
    name: "Iconos",
    icon: "nc-icon nc-bag-16",
    component: <Icons />,
    layout: "/admin",
    visibleEnSidebar: true
  },
  {
    path: "/maps",
    name: "Mapas",
    icon: "nc-icon nc-pin-3",
    component: <Maps />,
    layout: "/admin",
    visibleEnSidebar: true
  },
  {
    path: "/notifications",
    name: "Notificaciones",
    icon: "nc-icon nc-bell-55",
    component: <Notifications />,
    layout: "/admin",
    visibleEnSidebar: true
  },
  {
    path: "/tables",
    name: "Tablas",
    icon: "nc-icon nc-tile-56",
    component: <TableList />,
    layout: "/admin",
    visibleEnSidebar: false
  },
  {
    path: "/user-page",
    name: "Perfil",
    icon: "nc-icon nc-single-02",
    component: <Perfil />,
    layout: "/admin",
    visibleEnSidebar: true
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: <Typography />,
    layout: "/admin",
    visibleEnSidebar: false
  },
  {
    path: "/agregar-producto",
    name: "Productos",
    icon: "nc-icon nc-bag-16",
    component: <NuevoProducto />,
    layout: "/admin",
    visibleEnSidebar: false
  },
];
export default routes;
