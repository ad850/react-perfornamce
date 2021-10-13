import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import NumberFormat from 'react-number-format';

function App() {
  const [preState, setPreState] = useState(""); //calculation
  const [curState, setCurState] = useState("");// btn
  const [input, setInput] = useState("0");// screen 
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {   ////1
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState ? setCurState((pre) => pre + e.target.innerText) :
     setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {    ///2

    setTotal(false)

    setOperator(e.target.innerText)

    if (curState === "") return;
    if (preState !== "") {

      equals()
    }
    else {
      setPreState(curState)
      setCurState("")

    }
  }
  const equals = (e) => { ///3

    if (e?.target.innerText === "=") {

      setTotal(true)

    };
    let cal;

    switch (operator) {
      case "/":

        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;

      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;

      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;

    }
    setInput("")
    setPreState(cal)
    setCurState("")


  }
  const Minusplus = () => {  //4

    if (curState.charAt(0) === "-") {

      setCurState(curState.substring(1))
    } else {

      setCurState("-" + curState);

    }


  }
  const percent = () => { //5

    preState ? setCurState(String((parseFloat(curState) / 100) * preState)) : setCurState(String(parseFloat(curState) / 100))


  };


  const reset = () => {  //6
 
    setPreState("")
    setCurState("")
    setInput("0")


  }


  return (
    <div className="wrapper">


      <div className="center">


        <div className="container">


          <div className="screen">
            {input !== "" || input === "0" ? <NumberFormat value={input} displayType={'text'} thousandSeparator={true} /> :

              <NumberFormat value={preState} displayType={"text"} thousandSeparator={true} />}</div>
          <div className="btn light-gray " onClick={reset}>AC</div>
          <div className="btn light-gray " >()</div>
          <div className="btn light-gray" onClick={percent}>%</div>
          <div className="btn light-gray" onClick={operatorType}>/</div>
          <div className="btn" onClick={inputNum}>7</div>
          <div className="btn" onClick={inputNum}>8</div>
          <div className="btn" onClick={inputNum}>9</div>
          <div className="btn orange" onClick={operatorType}>X</div>
          <div className="btn" onClick={inputNum}>4</div>
          <div className="btn" onClick={inputNum}>5</div>
          <div className="btn" onClick={inputNum}>6</div>
          <div className="btn  orange" onClick={operatorType}> - </div>
          <div className="btn" onClick={inputNum}>1</div>
          <div className="btn" onClick={inputNum}>2</div>
          <div className="btn" onClick={inputNum}>3</div>
          <div className="btn  orange" onClick={operatorType}>+</div>
          <div className="btn  " onClick={Minusplus}>+/-</div>
          <div className="btn" onClick={inputNum}>0</div>
          <div className="btn  " onClick={inputNum}>.</div>
          <div className="btn orange" onClick={equals}> = </div>


        </div>


      </div>



    </div>
  );
}

export default App;
