import React, { useEffect, useState, useRef } from 'react'
import DisplayBox from './DisplayBox'

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }
const NumberBar = () => {
   // const [counter,setCounter]=useState(0);
    // let newString = counter.toString();
    
    const [numberList, setNumberList] = useState('')
    const [displayBox, setDisplayBox] = useState(['quiet', ''])


    const display = (number) => {
        setDisplayBox(['noise', number]);
        // play the voice with the number;
       // if (timer) clearTimeout(timer);
        let timer = setTimeout(() => {
            setDisplayBox(['quiet', '']);

            //setNumberList(numberList.concat(numberList,counter.toString()));
        }, 1000);
        //clearTimeout(timer);
    }

    // useEffect(() => {
    //     let timeInterval = setInterval(() => {
    //         //setNumberList(new Date().toLocaleTimeString())
    //         setCounter(counter=>counter +1);
    //         //setDisplayBox(['noise', counter]);
    //         // play the voice with the number;
    //         //if (timer) clearTimeout(timer);
            
    //         newString = newString.concat(' ', counter.toString());
    //         console.log(newString);
    //         setNumberList(newString);
    //     }, 3000);
    // }, [])
    // let newString='';
    // for ( var i =0; i<10; i++){
    //     newString = newString.concat(" ",i.toString())
    //     console.log(newString);
    // }

    // setInterval(()=>{
    //     counter ++
    //     let newList = numberList.concat(' ',counter);
    //     console.log(newList);
    //     setNumberList(newList);
    //     //setNumberList
    // },1000)

    
      
    //   function App() {
        const [counter, setCounter] = useState(0);
      
        useInterval(() => {
          setCounter(counter + 1);
          setNumberList(prev=>prev.concat(' '+counter.toString()))
            display(counter);
        }, 3000);
      
    //     return <h1>{counter}</h1>;
    //   };

    return (
        <div className='numberBar'>
            <span>{numberList}</span>
            {/* <DisplayBox displayBox = {displayBox} /> */}
            <div className={displayBox[0]}>{displayBox[1]}</div>
        </div>
    )
}

export default NumberBar;