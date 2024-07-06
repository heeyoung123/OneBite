import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const { onDelete } = useContext(DiaryDispatchContext);
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  /** 일기데이터 불러오기*/
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentDiaryItem) {
      window.alert("잘못된 접근임.");
      nav("/", { replace: true });
    }
    return currentDiaryItem;
  }, [params.id, data]);

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

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"} />
        }
      />
      <Editor />
    </div>
  );
};
export default Edit;
