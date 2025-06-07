import { useEffect, useState } from "react";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todo Dashboard</h2>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Description</th>
            <th>Completed</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
              <td>{todo.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
