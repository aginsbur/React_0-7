const express = require("express");
const app = express();
app.use(express.json())

const logger = require('morgan')
logger.token('body',(req)=>JSON.stringify(req.body))
app.use(logger('tiny'))
app.use(logger(':body'))


const cors = require('cors')
app.use(cors())

app.use(express.static('dist'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const count = persons.length;
  const currentdate = new Date(); 
  const datetime = "Last assesmant: " + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
  response.send(
    `<h2>Phone book has info for ${count} people</h2>
    <br/>
    <h2>${datetime}</h2>`);
});

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.status(204).end()
  })

  const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(p => p.id))
      : 0
    return maxId + 1
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name|| !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }

    if(persons.filter(p=>p.name===body.name).length>0){
        return response.status(400).json({ 
            error: 'name must be unique' 
          }) 
    }
  
    const person = {
      number: body.number,
      name: body.name,
      id: generateId(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
