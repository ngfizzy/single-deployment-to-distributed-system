import express from 'express'

const app = express()

app.get('/', (_, res) => res.json("Notification Ok"))

app.get('/liveliness', (req, res) => {
    return res.json({ message: "i'm alive"})
})

app.post('/notifications/me', (req, res) => {
    return res.json({ message: 'success', token: Date.now().toString(16) })
})

app.listen(8000, () => console.log('server started on port 8000'))
