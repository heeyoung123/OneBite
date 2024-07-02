import Header from "../components/Header";
//import { getEmotionImage } from "../util/get-emotion-image";
import Button from "../components/button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} />}
      />
      <Editor />
      {/* <div>오늘의 날짜</div>
      <div>오늘의 감정</div>
      <div onClick={}>
        <img src={getEmotionImage(1)} />
      </div>
      <div>오늘의일기</div>
      <div>컨텐츠박스</div> */}
    </div>
  );
};

export default New;
