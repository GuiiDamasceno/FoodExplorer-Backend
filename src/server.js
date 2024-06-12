require('dotenv/config')
require('express-async-errors')

const database = require("./database/sqlite")
const AppError = require('./utils/AppError')
const uploadConfig = require("./configs/upload")

const express = require('express')
const routes = require("./routes")
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)
database()

// Verifying errors
app.use(( error, request, response, next ) => {

  // Client side error
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.log(error)

  // Server side error
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))