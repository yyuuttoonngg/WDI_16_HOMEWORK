const express = require('express')
const app = express()
const PORT = 7777
const _ = require('lodash')

compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
]
  
colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('view engine', 'ejs');



app.get('/:name',(req,res)=>{
    const  name = res.req.url.slice(1)
    const compliment = _.sample(compliments)
    const color = _.sample(colors)
    res.render('index',{compliment:compliment,color:color,name:name})
})

app.listen(PORT,()=>{
    console.log(`listening at ${PORT}`)
})