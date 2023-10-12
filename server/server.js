import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'


// set up an express instance 

const app = express()

// Set up middleware

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

//set up a golober varible to simolate a DB

const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
    ];

    // import handlerfuctinos form cotorller 
    import handlerFunctions from './controller.js'



    //Routes go here
    app.get('/invoices',handlerFunctions.getInvoices)
    app.post('/addInvoice', handlerFunctions.addInvoice)
    app.delete('/deleteInvoice/:id', handlerFunctions.deleteInvoice)
    app.put('/editInvoice/:id',handlerFunctions.editIncoice)

    // open up a door to teh server
    ViteExpress.listen(app, 1088, ()=> console.log(`Click Me Here = http://localhost:1088`))