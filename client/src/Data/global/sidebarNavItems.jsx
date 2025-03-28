
import { FiHome, FiUsers, FiBell, FiSettings, FiMap } from "react-icons/fi";

const sidebarnavItems =  [
    { title: "Home", icon: <FiHome size={24} />, link: "" },
    { title: "Users", icon: <FiUsers size={24} />, link: "analytics" },
    { title: "Alerts", icon: <FiBell size={24} />, link: "alerts" },
    { title: "Map View", icon: <FiMap size={24} />, link: "map-view" },
    { title: "Settings", icon: <FiSettings size={24} />, link: "settings" },
];

export default sidebarnavItems;