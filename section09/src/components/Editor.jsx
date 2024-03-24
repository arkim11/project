import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
    //구조분해할당으로 onCreate 객체를 불러옴
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChagneContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = () => {
        //빈 값일 경우 추가기능이 동작하지 못하게 return;
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };

    //엔터로 추가
    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="editor">
            <input
                ref={contentRef}
                onChange={onChagneContent}
                value={content}
                onKeyDown={onKeydown}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
