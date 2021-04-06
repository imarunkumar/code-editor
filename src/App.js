import './App.css';
import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar';
import WorkSpace from './WorkSpace';

function App() {


  const [constantFile,setFile] = useState([
    {
        fileName: 'Application.js',
        content: 'We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes.'
    },
    {
        fileName: 'index.html',
        content: 'this is index file '
    },
    {
        fileName: 'FilewithExtension.js',
        content: 'this is FilewithExtension file'
    },{
        fileName: 'package.json',
        content: "{\"browsers\":{\"firefox\":{\"name\":\"Firefox\",\"pref_url\":\"about:config\",\"releases\":{\"1\":{\"release_date\":\"2004-11-09\",\"status\":\"retired\",\"engine\":\"Gecko\",\"engine_version\":\"1.7\"}}}}}"
    }
]);
var files= constantFile;

const [data,setData]=useState([]);

const [currentData,setCurrentData]=useState({});

  return (
    <div className="App">
      <div className="area">
            <Sidebar  files={constantFile} openFile={openData} currentFileName={currentData.fileName} ></Sidebar>
      </div>
      <WorkSpace file={data}  update={update} openFile={openData} removeTab={removeTab}  currentData={currentData}></WorkSpace>
    </div>
  );
  function openData(file){
    
    console.log(data);
    let arr=data.slice();
    for(let i=0;i<arr.length;i++){
      
      if(arr[i].fileName === file.fileName){
        
            setCurrentData(file);
            return
          }
    }
    arr.push(file)
    setData(arr);
    setCurrentData(file);
  }
  function update(value,fileName,isChecked,saveFlag){
    console.log(value,fileName);
    debugger
    if((!isChecked && saveFlag)||(isChecked && !saveFlag)){
      debugger
      constantFile.map(file => {
        if(file.fileName===fileName){
          file.content=value;
        
        }
      })
    }
  
    
}

function removeTab(removefile){
debugger
  let arr =data.slice();
  for(let i=0;i<arr.length;i++){
      
    if(arr[i].fileName === removefile){
        arr.splice(i,1);
        setData(arr)
        setCurrentData(arr[i]?arr[i]:arr[i-1]?arr[i-1]:{});

        break;
        
      }
    }
}
}


export default App;
