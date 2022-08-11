import React  from "react";
import './style/style.css'


function App() {
   let [count, setCount] = React.useState(0)
   const [messages, setMessages] = React.useState(0)
   const [text, setText] = React.useState(false)
   
  React.useEffect(() => {
    
    setMessages(messages + 1)
    console.log('useEffect run correctly');
  },[count, text])
  const [isLoading, setIsLoading] = React.useState(true)
  
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1000);
  }, [])
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return(
    <React.Fragment>
      <h1>Latihan useEffect</h1>
      <h1>Messages : {messages}</h1>
      <h3>{messages === 10 ? "ini  sepuluh" : "bukan sepuluh"}</h3>
      <h1>Count : {count}</h1>
      <button 
        onClick={() => {
          setCount(count + 1)
        }}
        className={'button'}
      >
        Tambah
      </button>
      <button 
        onClick={() => {
          setText(!text)
        }}
        className={'button 2'}
      >
        Ubah
      </button>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;