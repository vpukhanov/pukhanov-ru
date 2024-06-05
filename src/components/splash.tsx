import styles from "./splash.module.css";

export default function Splash() {
  return (
    <div className={styles.root}>
      <div className={`${styles.color} ${styles.pink}`}></div>
      <div className={`${styles.color} ${styles.red}`}></div>
      <div className={`${styles.color} ${styles.yellow}`}></div>
      <div className={`${styles.color} ${styles.green}`}></div>
      <div className={`${styles.color} ${styles.blue}`}></div>
    </div>
  );
}
