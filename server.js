const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const PlayerRout = require("./Routes/PlayerRout")
const TrendingRouter = require("./Routes/TrendingRouter")
const NewRoute = require("./Routes/NewRoutes")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());

dotenv.config();



app.use('/api/player',PlayerRout)
app.use('/api/newPlayer',NewRoute)
app.use('/api/trending',TrendingRouter)

app.get("/", (req, res) => {
    res.send("API is running..");
  }); 
   
  
  
  const PORT = process.env.PORT || 5000
  
  connectDB().then(() => {
      app.listen(PORT, () => {
          console.log("listening for requests");
      }) 
  })