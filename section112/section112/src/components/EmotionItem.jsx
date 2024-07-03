import "./EmotionItem.scss";
import { getEmotionImage } from "../util/get-emotion-image";

const EmotionItem = ({ emotionId, emotionName, isSelected }) => {
  return (
    <div className={`EmotionItem ${isSelected ? "EmotionItem_selected" : ""}`}>
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};
export default EmotionItem;
