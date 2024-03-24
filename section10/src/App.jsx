import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
    {
        id: 1,
        createdDate: new Date("2024-03-19").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date("2024-03-18").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
    {
        id: 3,
        createdDate: new Date("2024-02-18").getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.id) ? action.data : item
            );
        case "DELETE":
            return state.filter(
                (item) => String(item.id) !== String(action.id)
            );
        default:
            return state;
    }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    //새로운 일기 추가
    const onCreate = (createdDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    //기존 일기 수정
    const onUpdate = ({ id, createdDate, emotionId, content }) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    //기존 일기 삭제
    const onDelete = ({ id }) => {
        dispatch({
            type: "DELETE",
            id,
        });
    };

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider
                    value={{ onCreate, onUpdate, onDelete }}
                >
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>

            {/* public 폴더 아래에 있는 img는 최적화가 되어있지 않음 */}
            {/* <div>
                <img src={"/emotion1.png"} />
            </div> */}

            {/* assets 폴더 아래에 있는 img는 vite에서 최적화룰 해줌(이미지를 캐시화해서 새로고침 시에 다시 로드를 하지 않음) */}
            {/* 굉장히 많은 이미지를 사용할 경우에는 너무 많은 캐시가 저장될 수 있으므로 public폴더 아래에 저장하는게 좋을 수 있음 */}
            {/* <div>
                <img src={getEmotionImage(1)} />
            </div> */}
        </>
    );
}

export default App;
