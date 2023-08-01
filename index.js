const expres = require('express')
const app = expres()
const notFound = require('./middlewares/notFound')
const fetch = require('node-fetch')
app.use(expres.json())
// app.use(expres.urlencoded())

app.get('/', (req, res, next) => {
    res.send("Hello there")
})

app.post('/test', (req,res, next) => {
    const logBody = req.body
    console.log("-----")
    console.log(logBody)
    console.log("-----")
    res.send("OK")
})

app.post('/proxy', (req, res, next) => {
    const { url, method, headers, body } = req.body
    const parsedHeaders = headers.replace(/'/g, `"`)
    const GET_OBJECT = {
        method: method,
        headers: JSON.parse(parsedHeaders),
    }
    const POST_OBJECT = {
        method: method,
        headers: JSON.parse(parsedHeaders),
        body: body
    }
    const sendFetch = fetch(url, method === 'GET' ? GET_OBJECT : POST_OBJECT)
    sendFetch.then(response => {
        if(response.ok) return response.text()
        return 'No response'
    })
    .then(data => res.send(data)).catch(err => {
        res.send(err)})
})

app.use(notFound)

const PORT = process.env.PORT || 4242

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})