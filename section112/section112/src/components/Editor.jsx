import "./Editor.scss";
import EmotionItem from "./EmotionItem";
import Button from "./button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];
const getStringDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = (targetDate.getMonth() + 1).toString().padStart(2, "0");
  let date = targetDate.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${date}`;
};
const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });
  const nav = useNavigate();
  const onClickSubmitButton = () => {
    onSubmit(input);
  };
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        {/* input안에 있는 createdDate인 new Date()가 getStringDate메소드에 의해 문자열로 변환됨 */}
        <input
          name="createDate"
          onChange={onChangeInput}
          value={getStringDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          value={input.content}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button text={"취소"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};
export default Editor;
