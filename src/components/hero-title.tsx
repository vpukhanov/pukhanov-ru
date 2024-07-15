import styles from "./hero-title.module.css";

export default function HeroTitle({ className = "" }: { className?: string }) {
  return (
    <h1 className={`${styles.rainbow} font-bold ${className}`}>
      Hi! My name
      <br />
      is Vyacheslav <span className={styles.wave}>👋🏻</span>
    </h1>
  );
}
