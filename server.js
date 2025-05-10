const express = require('express')
const logger = require('morgan')

const Task = require(`./models/task.js`)
const db = require('./db')

const app = express()



app.use(logger('dev'))

app.post('/tasks', async (req, res) => {
    const newTask = await Task.create({
      text: "Clean Our Room",
      isComplete: false
    })
    res.send(newTask)
  })

  app.get('/tasks/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.send(task)
  })

  app.get('/tasks', async (req,res) => {
    const tasks = await task.find({})
    res.send(tasks)
  })

  app.put('/tasks/:id', async (req,res) => {
    const updatedTask = await tasks.findByIdAndupdate(
        req.params.id, 
        req.body,
        {new:true})
        res.send(updatedTask)
    })
  
    app.delete('/tasks/:id', async (req,res) => {
        await Task.findByIdAndDelete(req.params.id)
        res.send('Task with ID of ${req.paramd.id} has been deleted!')
    })

  app.listen(3000, () => {
    console.log("Running Server on Port 3000 . . . ")
  })

  