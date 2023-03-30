import 'dotenv/config'; 
import express from 'express'; 

//2. Define a collection name and import everything as that collection name from the model file
import * as restaurantlog from './model.mjs'; 

//3. Define the PORT using .env, 4. Define the app to call express()
const PORT = process.env.PORT ; 
const app = express()

//4. Define the app to call express()
app.use(express.json()); 

//5. Define a Create route using app.post().. 
app.post('/log', (req, res) => {
    restaurantlog.createRestaurant(
        //pass in all the schema's properties
        req.body.name, 
        req.body.rating, 
        req.body.date
    )
        .then(restaurant => {
            //use .then to send status 201 if creation was successful..
            res.status(201).json(restaurant); 
        })
        .catch(error => {
            //use .catch to send status 400 if there was a user-input error.
            console.log(error); 
            res.status(400).json({error: 'restaurant did not create :-( '})
        }); 
});

//6. Define a Retrieve route using app.get() with the same path as create..
app.get('/log', (req,res) => {
    restaurantlog.findRestaurant() //use the collection name to call your model function for retrieve
    .then(restaurant => {
        //use .then and if statement to determine if the document exists..
        if (restaurant !== null) {
            //..if so, then respond with JSON and the document name. 
            res.json(restaurant); 
        } else {
            //otherwise, respond with 404  
            res.status(404).json({error: 'restaurant document not found :-('});
        }
    })
    .catch(error => {
        //use .catch to send status 400 if there was a user-input error.
        console.log(error);
        res.status(400).json({error: 'Request to retrieve the restaurant document failed'});
    });
});

//6b? Defined a Retrieve by ID controller 
app.get('/log/:id', (req, res) => {
    restaurantlog.findRestaurantById(req.params.id)
    .then(restaurant => {
        if (restaurant !== null) {
            res.json(restaurant); 
        } else {
            res.status(404).json({error: 'restaurant document not found :-('})
        }
    })
    .catch(error => {
        console.log(error); 
        res.status(400).json({error: 'Request to retrieve the restaurant document failed'})
    })
})

//7. Update route using app.put() with the same path, *but with :id appended: /log/:id *
app.put('/log/:id', (req,res) => {
    restaurantlog.replaceRestaurant(
        req.params.id, 
        req.body.name, 
        req.body.rating, 
        req.body.date
    )
    .then(restaurant => {
        res.json(restaurant);
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({error: 'Request to replace a document failed'})
    });
});

//8. Define a Delete route using app.delete() w/ the same path but with :id appended: /log/:id
app.delete('/log/:id', (req,res)=> {
    restaurantlog.deleteById(req.params.id)
    .then(deletedCount => {
        if (deletedCount === 1) {
            res.status(204).send();
        } else {
            res.status(404).json({error: 'Document does not exist' });
        }
    })
    .catch(error => {
        console.error(error);
        res.send({error: 'Request to delete by ID failed' });
    });
});

//9. Define an app.listen() route to provide a console.log message telling which port 
//the backend is listening to 
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} ...`); 
})
//-4:23 

