import axios from 'axios';

const baseurl = "http://localhost:5000"

const getAllToDo = (setToDo)=> {
    axios
    .get(baseurl)
    .then(({data})=>{
        console.log('data--->',data);
        setToDo(data)
    })
}

const addToDo = (text,setText,setToDo)=>{
    axios
    .post(`${baseurl}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })

}

export {getAllToDo,addToDo}