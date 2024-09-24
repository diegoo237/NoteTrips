import styles from "./SideBar.module.css";
function SlideBarFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by NoteTrips Inc.
      </p>
    </footer>
  );
}

export default SlideBarFooter;
