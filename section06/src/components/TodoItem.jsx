import "./TodoItem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

    const upChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDelteButton = () => {
        onDelete(id);
    }

    return <div className="todoitem">
        <input onChange={upChangeCheckbox} checked={isDone} type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDelteButton}>삭제</button>
    </div>
};

export default TodoItem;