const express =require('express');
const mongoose=require('mongoose')
require('dotenv').config()

const app= express()

const PORT =process.env.port || 5000

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`connecting to mongodb....`))
.catch((err)=> console.log(err))

app.listen(PORT, () => console.log(`listen onnnn :${PORT}`))