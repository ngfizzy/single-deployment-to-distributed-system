import express from 'express'

const app = express()

app.get('/', (_, res) => res.json("Kyc Ok"))

app.get('/liveliness', (req, res) => {
    return res.json({ message: "i'm alive"})
})

app.post('/user-data', (req, res) => {
    return res.json({ message: 'success', token: Date.now().toString(16) })
})


app.listen(6000, () => console.log('server started on port 6000'))
