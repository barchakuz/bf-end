import express from 'express'

const app = express()

// app.get('/', (req, res) => {
//     res.send('Server is live')
//   })

const joke = [
    {
        id: 1,
        title : 'Joke 1',
        description : "This is a Joke One"
    },
    {
        id: 2,
        title : 'Joke 2',
        description : "This is a Joke 2"
    },
    {
        id: 3,
        title : 'Joke 3',
        description : " This is a Joke 3"
    },{
        id: 4,
        title : 'Joke 4',
        description : "This is a  Joke 4"
    }
]

app.get('/api/joke', (req,res)=>{
    res.send(joke)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })