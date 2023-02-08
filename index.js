const expres = require('express')
const app = expres()

app.use(expres.json())
// app.use(expres.urlencoded())

app.get('/', (req, res) => {
    res.send("Hello there")
})

app.post('/test', (req,res) => {
    const logBody = req.body
    console.log("-----")
    console.log(logBody)
    console.log("-----")
    res.send("OK")
})

const PORT = process.env.PORT || 4242

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})