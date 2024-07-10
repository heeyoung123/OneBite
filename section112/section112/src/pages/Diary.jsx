import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringDate } from "../util/get-string-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>로딩중</div>;
  }
  const { createDate, emotionId, content } = curDiaryItem;
  const title = getStringDate(new Date(createDate));
  return (
    <div>
      <Header
        title={`${title}기록`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />
        }
      />
      <Viewer emotionId={emotionId} createDate={createDate} content={content} />
    </div>
  );
};

export default Diary;
