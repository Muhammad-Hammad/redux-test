import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { FetchData } from './redux/action';
 


function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state.test);

  useEffect(() => {
    dispatch(FetchData());
  }, [])
  const {fetchData,Data} = state;
  const [newData] = Data;  
  return (
    <div>
      {newData ? newData.map((val,index)=>{
        let {userId, id, title, body } = val;
       return (<div key={index}>
         <h1>Id : {id}</h1>
         <ul>
           <li>{userId}</li>
           <li>{id}</li>
           <li>{title}</li>
           <li>{body}</li>
         </ul>
       </div>)
      }): null}
    </div>
  );
}

export default App;
