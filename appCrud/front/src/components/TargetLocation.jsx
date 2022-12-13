import React,{useState} from "react";
import ReactDOM from 'react-dom'
const TargetLocation = ({dat}) => {
  /* const { name, id, type} = dat; */
  return (
    <ul className=' border border-1'>
            <li >
            {dat.name}
            </li>
        
        </ul>
  );
};

export default TargetLocation;
