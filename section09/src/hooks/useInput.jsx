import { useState } from "react";

// 커스텀 훅을 만들 때 앞에 use를 붙여주면 됨
function useInput() {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;