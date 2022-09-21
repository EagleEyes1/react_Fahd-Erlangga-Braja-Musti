import TodoPage from "./pages/TodoPage";
import { mockData } from "./listTodo";

function App() {
  return <TodoPage items={mockData} />
}

export default App;
