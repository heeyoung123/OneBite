import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./button";
import "./DiaryItem.scss";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div
        onClick={() => `/diary/${id}`}
        className={`img_section img_section_${emotionId} `}
      >
        <img src={getEmotionImage(emotionId)} alt="" />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div onClick={() => nav(`/diary/${id}`)} className="created_date">
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
