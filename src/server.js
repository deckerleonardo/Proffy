const express = require('express')
const server = express()

/* setando o css/public */
server.use(express.static("public")) 

/* require do index */
.get("/", (req, res) => { 
    return res.sendFile(__dirname + "/views/index.html")
})

/* require do study */
.get("/study", (req, res) => { 
    return res.sendFile(__dirname + "/views/study.html")
})

/* require do give-classes */
.get("/give-classes", (req, res) => { 
    return res.sendFile(__dirname + "/views/give-classes.html")
})

/* chamando o servidor pela porta setada */
.listen(5500)