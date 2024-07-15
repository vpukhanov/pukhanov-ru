import styles from "./splash.module.css";

export default function Splash() {
  return (
    <div className={styles.root}>
      <div className={`${styles.stripe} ${styles.red}`}></div>
      <div className={`${styles.stripe} ${styles.orange}`}></div>
      <div className={`${styles.stripe} ${styles.yellow}`}></div>
      <div className={`${styles.stripe} ${styles.green}`}></div>
      <div className={`${styles.stripe} ${styles.blue}`}></div>
      <div className={`${styles.stripe} ${styles.purple}`}></div>
    </div>
  );
}
