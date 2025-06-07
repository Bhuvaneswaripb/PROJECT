import { useState } from "react";

export default function AddTodoForm() {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Todo: ${todo}\nCompleted: ${completed}\nUser ID: ${userId}`);
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Completed: </label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <div>
          <label>User ID: </label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
