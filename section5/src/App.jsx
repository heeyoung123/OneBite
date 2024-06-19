import { useState } from 'react'
import './App.css'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Main from './components/Main'
// import Button from './components/Button'

const Bulb =() => {
  const [light,setLight] =useState(false);
  const lightOff = () =>{
    setLight(prevLight=>!prevLight);
  }
  return (
    <div style={{backgroundColor: light ? 'black':'white'}}>
      {light===false ?(
        <h1 style={{backgroundColor:"gray"}}>OFF</h1>):(
        <h1 style={{backgroundColor:'Orange'}}>ON</h1>
      )}
      <button onClick={lightOff}>
        {light === false ? "turnOn": "turnOff" }</button>

    </div>
  );
};

const Counter=() =>{
const [count,setCount] = useState(0);
return (
  <div>
  <div>{count}</div>
  <button onClick={() => {
     setCount(count+1)}}>+</button></div>
)
}
function App(){
  return (
    <>
    <Bulb/>
    <Counter/>
    </> 
  )
}
  // const buttonProps = {
  //   text:"카페",
  //   color:"red",
  //   a:1,
  //   b:2,
  //   c:3,
  // };
  // const secondButtonProps ={
  //   text:"메세지",
  //   color:"blue",
  //   a:1,
  //   b:2,
  //   c:3,
  // }
  // return (
  //   <>
  //   <Header />
  //   <Main/>
  //   <Button text={"메일"} color ={"red"}/>
  //   {/* props가 많을 때 */}
  //   <Button {...buttonProps}/>
  //   <Button {...secondButtonProps}>
  //   <div>자식요소</div>
  //   </Button>
  //   <Footer/>
  //     </>
  //   )
  // }
  

 

export default App;
