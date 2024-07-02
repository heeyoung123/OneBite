import "./EmotionItem.scss";
import { getEmotionImage } from "../util/get-emotion-image";
const EmotionItem = ({ emotionId, emotionName }) => {
  return (
    <div>
      <img src={getEmotionImage(emotionId)} />
      <div>{emotionName}</div>
    </div>
  );
};
export default EmotionItem;
//emotionid와 emotionName은언제쓰지?여기서 쓰는거일텐데..
