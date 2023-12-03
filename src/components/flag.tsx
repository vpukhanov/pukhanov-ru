import styles from "./flag.module.css";

export default function Flag() {
  return (
    <div
      className={`${styles.flag} ml-4`}
      role="img"
      title="Символ любви, свободы, равноправия и уважения"
    />
  );
}
