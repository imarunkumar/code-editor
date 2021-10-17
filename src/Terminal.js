import React,{useState} from 'react'
import './Terminal.css';
function Terminal(props) {
    const [isOpen, setChange] = useState(true);
    const [isChecked, setCheck] = useState(true);

    const selected = true;
    return (
        <div className="terminal"  style={{height:isOpen?'':'22px'}}>
        <div className="checkbox" >
        <input type="checkbox" checked={isChecked} onClick={() =>{

            setCheck(!isChecked)
            props.setCheck(!isChecked);
        }
        }/> Enable Autosave
            
        <i className={isOpen ? "fa fa-chevron-down":"fa fa-chevron-up"} onClick={() => {
            
            setChange(!isOpen)
            props.setClose(isOpen)
            
        }
        } aria-hidden="true"></i>

        </div>
        </div>
    );
}
export default Terminal;