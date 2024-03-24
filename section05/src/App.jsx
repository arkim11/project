import './App.css'
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트 : 탄생 (빈배열을 넣으면 최초 렌더링 시에 한 번만 실행)
    useEffect(() => {
        console.log("mount");
    }, []);
    
    // 2. 업데이트 : 변화, 리렌더링 (해당 컴포넌트가 리렌더링 될 때마다 모두 실행)
    useEffect(() => {
        // 최초 렌더링에는 실행시키고 싶지 않을 때 조건문 추가
        if(!isMount.current){
            isMount.current = true;
            return;
        }
        console.log("update");
    });

    // 3. 언마운트 : 죽음

    const onClickButton = (value) => {
        setCount(count + value);
    }

  return (
    <div className="app">
        <h1>Simple Counter</h1>
        <section>
            <input value={input} onChange={() => setInput(input)}/>
        </section>
        <section>
            <Viewer count={count} />
            {count % 2 === 0 ? <Even /> : null}
        </section>
        <section>
            <Controller onClickButton={onClickButton} />
        </section>
    </div>
  )
}

export default App;
