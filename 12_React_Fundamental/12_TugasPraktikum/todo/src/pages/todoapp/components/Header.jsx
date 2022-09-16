import styles from "./List.module.css";

export default function Header({ text }) {
  return (
    <div className={styles.header}>
      <h3>{text}</h3>
    </div>
  );
}
