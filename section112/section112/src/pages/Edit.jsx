import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";
const Edit = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기 수정`);

  /** 일기데이터 불러오기*/
  const curDiaryItem = useDiary(params.id);
  const onClickDelete = () => {
    //   if (confirm("삭제?")) {
    //     onDelete(parmas.id);
    //     nav("/", { replace: true });
    //   }
    // };
    let result = confirm("진짜 삭제?");
    if (result) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정?")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
