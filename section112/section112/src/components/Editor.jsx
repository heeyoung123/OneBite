import "./Editor.scss";
import EmotionItem from "./EmotionItem";

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
        <div>
          <EmotionItem emotionId={1} emotionName={"완전좋음"} />
          <EmotionItem />
          <EmotionItem />
          <EmotionItem />
          <EmotionItem />
        </div>
      </section>
      <h4>오늘의 감정</h4>
      <section className="emotion_section"></section>
      <section className="content_section"></section>
      <section className="button_section"></section>
    </div>
  );
};
export default Editor;
