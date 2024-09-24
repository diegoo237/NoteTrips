import AppNav from "../components/navs/AppNav";
import styles from "./SideBar.module.css";
import SideBarFooter from "./SideBarFooter";
import Logo from "./Logo";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
