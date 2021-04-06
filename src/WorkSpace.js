import React, { useState } from 'react'
import Terminal from './Terminal';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css'; 
import './WorkSpace.css'
function WorkSpace(props) {
    const[isClose,setclose]=useState(false)

    const[saveFlag,setSave]=useState(false)

   const[isChecked,setCheck]=useState(true)
    const handlerCtrl = (e) => {
      if(isChecked && e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        // ctrlFlag=1;
        toast.warning('Auto Save mode enabled');
            e.preventDefault();
          }
      if(!isChecked && e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
        // setSave(true)
        toast.success('Data saved');
            e.preventDefault();
          }
 };
    return (
        <div className="workspace">
            <div className="header">
                <div className="tabs">
                    {
                     props.file && props.file.map(tab => {
                        return(
                            <div className="parent">
                               
                            <div className="tab" onClick={()=>props.openFile(tab)} style={{ backgroundColor: props.currentData.fileName === tab.fileName? '#575454' : 'black', color: props.currentData.fileName === tab.fileName?'white':'', fontStyle: props.currentData.fileName === tab.fileName?'italic':'' }} key={tab.fileName}>
                                {tab.fileName}

                            </div>
                            <i class="fa fa-times" onClick={() =>props.removeTab(tab.fileName)} style={{ display: props.currentData.fileName === tab.fileName? '' : 'none' }} aria-hidden="true"></i>
                            </div>
                        );
                        })
                       
                    }


                </div>
            </div>
            <div className="content" contentEditable="true"  style={{height:isClose?'100%':'',maxHeight:isClose?'88vh':''}}
            onKeyDown={(e) =>{
                setSave(!isChecked)
                props.update(e.currentTarget.textContent,props.currentData?.fileName,isChecked,saveFlag)
                handlerCtrl(e)
            } 
        }
            onInput={e => props.update(e.currentTarget.textContent,props.currentData?.fileName,isChecked,saveFlag)} >
                                {props.currentData?.content}
                                <ToastContainer />    
                                </div>
                               
            <Terminal setCheck={setChecked} setClose={closeTerminal}></Terminal>
        </div>
      
    );

function closeTerminal(isClosed){
    setclose(isClosed)
}

 function setChecked(checkbox){

     debugger
     setCheck(checkbox)
    
 }

 
}

export default WorkSpace;