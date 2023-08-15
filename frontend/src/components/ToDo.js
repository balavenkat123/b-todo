import React from 'react'
import { RiDeleteBin3Fill} from "react-icons/ri";
import { MdEditDocument  } from "react-icons/md";

function ToDo ({text,updateToDo,deleteToDo}) {
  return (
    <div className='ToDoo' >
        <div className='text'>{text}</div>
        <div className='icons' >
            <MdEditDocument className="icon" onclick={updateToDo} />
            <RiDeleteBin3Fill className="icon" onclick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo