import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
    //구조분해할당으로 onUpdate, onDelete 객체를 불러옴
    const { onUpdate, onDelete } = useContext(TodoDispatchContext);
    const upChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDelteButton = () => {
        onDelete(id);
    };

    return (
        <div className="todoitem">
            <input
                onChange={upChangeCheckbox}
                checked={isDone}
                type="checkbox"
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelteButton}>삭제</button>
        </div>
    );
};

//고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     //반환값에 따라, 프롭스가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링 X
//     // F -> Props 바뀜 -> 리렌더링 O

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);
