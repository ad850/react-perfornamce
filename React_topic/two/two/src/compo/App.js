// import React from 'react'
// import './app.css';

// import { useState } from 'react';
// import Line from './Line';

// function App() {


//   const [state, setstate] = useState("");
//   const [item, setitem] = useState([]);




//   const change = (event) => {

//     setstate(event.target.value);

//   }

//   const submit = () => {

//     setitem((preval) => {

//       return [...preval, state];
//     })

//     setstate("")
//   }



//   return (
//     <div className="wrapper">


//       <div className="outer">

//         <div className="inp">

//           <input type="text" placeholder="add items" className="inp" onChange={change} value={state} />
//           <button onClick={submit}>Add</button>

//         </div>

//         <div className="inner">

//           <ol>
//             {
//               item.map((val, ind) => {

//                 return <Line text={val} id={ind} key={ind}/>
//               })

//             }

//           </ol>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;


