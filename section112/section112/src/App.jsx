import "./App.scss";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/button";
import { getEmotionImage } from "./util/get-emotion-image";

//1."/":
//2."/new"
//3."/diary"

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Button
        text={"버튼임"}
        type={"POSITIVE"}
        onClick={() => {
          nav("/diary/4");
        }}
      />

      <Button
        text={"버튼임2"}
        type={"NEGATIVE"}
        onClick={() => {
          nav("/diary/4");
        }}
      />

      <Button
        text={"버튼임3"}
        type={"DEFAULT"}
        onClick={() => {
          nav("/diary/4");
        }}
      />

      <div>
        <img src={getEmotionImage(1)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>

      <button onClick={onClickButton}>New페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
