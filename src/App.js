/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [title, setTitle] = useState(0);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');
 

  return (
    <div className="App">
      <div className="black-nav">
       <h4>ReactBlog</h4>
      </div>

      <button onClick= { ()=> {
        let test = [...글제목];
        test.sort();
        글제목변경(test);
        
      }}>가나다순정렬</button>

      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      
        {/* <div className="list">
       <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1)} }>👍</span> { 따봉 } </h4>
       <p>2월 17일 발행</p>
      </div>


        <div className="list">
       <h4>{ 글제목[1] }</h4>
       <p>2월 17일 발행</p>
      </div>
        <div className="list">
       <h4 onClick={() => { modal == false ? setModal(true) : setModal(false) }}>{ 글제목[2] }</h4>
       <p>2월 17일 발행</p>
      </div> */}

      {
        modal == true ? <Modal color="beige" 글제목변경={글제목변경} title={title} 글제목={글제목}/> : null
      }
      {
        글제목.map(function(a, i) {
          return (   <div className="list" key= {i}>
          <h4 onClick={() => {
            setModal(true); setTitle(i);
          }}>{ 글제목[i] } <span onClick={ (e) => {e.stopPropagation();
            let copy = [...따봉];
            copy[i] = copy[i] + 1;
            따봉변경(copy)
          } }>👍</span> { 따봉[i] }</h4>
          <p>2월 17일 발행</p>
          <button onClick={() => {
            let deleteBtn = [...글제목];
            deleteBtn.splice(i, 1);
            글제목변경(deleteBtn)
          }}>x</button>
         </div>
          )
        })
      }
      <input onChange={(e)=> { 
        입력값변경(e.target.value);
      }} />
      <button onClick={() =>{
       let change = [...글제목];
       change.unshift(입력값);
       글제목변경(change)
      }}>버튼</button>
    </div>
  );
}




function Modal(props) {
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )

// class Profile extends React.Component {
//   constructor() {
//     super();
//     this.state = { name : "Kim", age : 30 }
//   }

//   changeName() {
//     this.setState( { name : "Park" } )
//   }

//   render() {
//     return (
//       <div>
//         <h3>프로필입니다</h3>
//         <p> 저는 { this.state.name } 입니다.</p>
//         <button onClick = { this.changeName.bind(this) }> 버튼</button>
//       </div>
//     )
//   }
//}

}
export default App;
