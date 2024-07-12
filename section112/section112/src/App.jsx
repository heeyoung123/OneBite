import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";

import { useReducer, useRef, createContext, useState, useEffect } from "react";
// import { getEmotionImage } from "./util/get-emotion-image";

//1."/":
//2."/new"
//3."/diary"

//임시 데이터

//실행
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }

    default:
      return state;
  }
  //저장
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}
//일기 데이터를 공급할 컨텍스트 생성
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  //로딩 상태
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    const parseData = JSON.parse(storedData);
    if (!Array.isArray(parseData)) {
      setIsLoading(false);
      return;
    }
    idRef.current = maxId + 1;
    parseData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });
    dispatch({
      type: "INIT",
      data: parseData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기를 추가하는 기능
  // dispatch 함수를 호출하면서 이러한 액션 객체를 새롭게 추가  하라는 의미로 전달을 해주게 되면
  // useReducer가 우리가 만든 이 reduce함수를 호출해서 매개 변수로는 설정한 액션 객체를 전달을 해주게 됨

  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
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
  if (isLoading) {
    return <div>데이터 로딩중입니다.</div>;
  }

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
