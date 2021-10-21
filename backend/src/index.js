

require('dotenv').config()
import app from './app'

console.log(process.env.PORT)
const port = process.env.PORT || 3001;

app.listen(port)
console.log(`listening on port ${port}`)
