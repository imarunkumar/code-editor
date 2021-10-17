import React, { useState } from 'react'
import './Sidebar.css';


function Sidebar(props) {
  
    var timer;

    const clickHandler = file => event =>  {
  clearTimeout(timer);
  debugger
  
  if (event.detail === 1) {
    timer = setTimeout(() => {
      console.log("SINGLE CLICK");
    //   props.openFile(file,false)

    }, 100)

  } else if (event.detail === 2) {
    console.log("DOUBLE CLICK");
    props.openFile(file,true)
  }
}

    const [isOpen, setChange] = useState(true);
    return (
        
        <div className="sidebar">
            <i className={isOpen ? "fa fa-folder-o fa-2x" : "fa fa-folder-open-o fa-2x"} aria-hidden="true" onClick={() => setChange(!isOpen)}>
            </i>
            <div className="files">
             { 
                !isOpen?
                props.files.map(file =>
                  <li className="file" key={file.fileName}  style={{ backgroundColor: props.currentFileName === file.fileName? '#575454' : 'rgb(51, 58, 55)',color: props.currentFileName === file.fileName? 'springgreen' : ''}} onClick={()=>props.openFile(file)} >{file.fileName}</li> 
                ):''
              }
            </div>
            {/* onClick={()=>props.openFile(file,false)} onDoubleClick={()=>props.openFile(file,true)} */}
        </div>
    );

}


export default Sidebar;