import Header from "./todoapp/components/Header";
import ListTodo from "./todoapp/components/List";

export default function TodoPage({ items }) {
  return (
    <>
      <Header text="To Do App" />
      {items.map((item) =>
        <ListTodo item={item} />
      )}
    </>
  );
}
