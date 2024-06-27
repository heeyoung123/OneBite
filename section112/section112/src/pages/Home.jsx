import Header from "../components/Header";
import Button from "../components/button";
import DiaryList from "../components/DiaryList";
const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 6월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
