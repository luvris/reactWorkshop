export default function TodoForm({ onAddTodo, onInputChange, todosInput }) {
    return (
        <div>
            <input
                type="text"
                placeholder="input new task..."
                onChange={onInputChange}
                value={todosInput} />
            <button onClick={onAddTodo}>
                Add
            </button>
        </div>
    );
}