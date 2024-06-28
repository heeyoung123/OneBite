import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

import { useReducer, useRef, createContext } from "react";
// import { getEmotionImage } from "./util/get-emotion-image";

//1."/":
//2."/new"
//3."/diary"

//임시 데이터
const mockData = [
  {
    id: 1,
    createDate: new Date("2024-06-22").getTime(),
    emotionId: 2,
    content: "일기당",
  },
  {
    id: 2,
    createDate: new Date("2024-06-20").getTime(),
    emotionId: 3,
    content: "2번일기임 ",
  },
  {
    id: 3,
    createDate: new Date("2024-05-20").getTime(),
    emotionId: 1,
    content: "3 번일기임 ",
  },
];

//실행
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}
//일기 데이터를 공급할 컨텍스트 생성
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  //mockData라는 임시데이터를 만들고 초기값으로 설정
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 일기 추가
  // 새로운 일기를 추가하는 기능
  // dispatch 함수를 호출하면서 이러한 액션 객체를 새롭게 추가하라는 의미로 전달을 해주게 되면
  // useReducer가 우리가 만든 이 reduce함수를 호출해서 매개 변수로는 설정한 액션 객체를 전달을 해주게 됨

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

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: idRef.current,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  // id만 알고 있으면 삭제가 가능하기때문에 id만 받아옴
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
