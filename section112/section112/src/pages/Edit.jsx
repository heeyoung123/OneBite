import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const { onDelete } = useContext(DiaryDispatchContext);

  const { id } = useParams();
  const onClickDelete = () => {
    let result = confirm("진짜 삭제?");
    if (result) {
      onDelete(parseInt(id));
      nav("/");
    }
  };
  const nav = useNavigate();
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
