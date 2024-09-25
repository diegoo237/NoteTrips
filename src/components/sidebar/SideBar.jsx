import AppNav from "../../components/navs/AppNav";
import styles from "./SideBar.module.css";
import SideBarFooter from "./SideBarFooter";
import Logo from "../logo/Logo";
import { Outlet } from "react-router";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
