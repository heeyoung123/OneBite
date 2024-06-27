import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./button";
import "./DiaryItem.scss";
const DiaryItem = () => {
  const emotionId = 5;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId} `}>
        <img src={getEmotionImage(5)} alt="" />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">jhgjh</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
