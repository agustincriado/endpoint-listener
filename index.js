const expres = require('express')
const app = expres()
app.use(expres.json())
app.get('/', (req, res) => {
    res.send("Hello there")
})

app.get('test', (req,res) => {
    const logBody = req.body.map(el => console.log(el))
    const {billAddress} = req.body
    console.log("-----")
    console.log(typeof(billAddress))
    console.log("-----")
    res.send("OK")
})
const PORT = 3001 || process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})