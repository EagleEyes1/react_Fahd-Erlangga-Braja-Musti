import styles from "./List.module.css";

export default function ListTodo({ item }) {
  if (item.completed) {
    return (
      <div className={styles.judul}>
        <s>{item.title}</s>
      </div>
    );
  }
  return (
    <div className={styles.judul}>
      {item.title}
    </div>
  )

}
