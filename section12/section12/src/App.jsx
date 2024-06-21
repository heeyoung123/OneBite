import './App.css'
import { Routes,Route,Link,useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

// import emotion1 from './assets/emotion1.png';
// import emotion2 from './assets/emotion2.png';
// import emotion3 from './assets/emotion3.png';
// import emotion4 from './assets/emotion4.png';
// import emotion5 from './assets/emotion5.png';



//1."/": 
//2."/new"
//3."/diary"

function App() {
  const nav=useNavigate();
  const onClickButton =()=> {
    nav("/new");
  } 
  return (
    <>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>New페이지로 이동</button>
     <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/new' element={<New/>}/>
    <Route path='/diary/:id' element={<Diary/>}/>
    <Route path='*' element={<Notfound/>}/>
  </Routes>
    </>
 
  )
  
}

export default App
