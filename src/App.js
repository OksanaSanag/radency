import React, {useState} from 'react';
import FileParser from './component/FileParser';
import Table from './component/Table';
import './App.css';

function App(props) {
  const [arrData, setArrData]= useState([]);
  const _setArrData = (arrData) => setArrData(arrData); 
  console.log(arrData);
  return (
    <div>
      <FileParser setArr = { _setArrData } />
      <Table dataForTable = { arrData } />
    </div>
  );
}

export default App;
