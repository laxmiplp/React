import express from 'express'
import fs from 'fs'
import cors from 'cors'
const app = express()
const port = 5000
app.use(cors())
app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    res.json(data)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))