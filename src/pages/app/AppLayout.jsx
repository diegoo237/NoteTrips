import SideBar from "../../components/sidebar/SideBar";
import Map from "../../components/map/Map";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
