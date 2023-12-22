import express, { json } from 'express'
import routes from './routes/routes'

const app = express()
const PORT = process.env.PORT || 5000

app.use(json())
app.disable('x-powered-by')

app.use('/api', routes)


app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})
