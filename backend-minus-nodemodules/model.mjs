//schema - model.mjs 
import mongoose from "mongoose";
import 'dotenv/config'; 

//2. Connect to a mongoose using the .connect() function
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING, //think I need to replace this later.
    {useNewUrlParser: true},
); 

//3. define a variable so that it uses .connect() function 
const db = mongoose.connection; 

//4. Use the variable to connect to the database using .once()
db.once('open', (err) => {
    if (err) {
        resizeBy.status(500).json({error: '500: Server is not connecting :-( '});
    } else {
        console.log('Connected to MongoDB Inventory collection :-)!' );
    }
});

//5. Define a variable for the schema object using mongoose.SChema(). Must include at least 
//one string type, one number type, and one date type. 
const restaurantSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    rating: {type: Number, required: true, default: 0, min:[0, 'Empty values not allowed'], max: 5},
    date: {type: Date, required: true, default: Date.now}
});

//6. Below the schema, define a variable for a document. It must pass in a string
//for the 'name' and the schema name you defined above. 
const Restaurant = mongoose.model('Restaurant', restaurantSchema); 

//7. Define a model to create a document in that new collection, using async, 
//new() with {params}, and return using save(). 
const createRestaurant = async(name, rating, date) => {
    const restaurant = new Restaurant({
        name: name,
        rating: rating,
        date: date
    });
    return restaurant.save();
}

//8. Define a model to retrieve documents from the collection using async, .find()
// and return .exec()
const findRestaurant = async () => {
    const query = Restaurant.find();
    return query.exec(); 
}

//9. Define a model to retrieve a document by id using async, .findById(id), and
// return .exec()
const findRestaurantById = async (id) => {
    const query = Restaurant.findById({_id: id}); 
    return query.exec(); 
}

//10. Define a model to update a document using async, await, .replaceOne({params}),
// and return {params}
const replaceRestaurant = async (id, name, rating, date) => {
    const result = await Restaurant.replaceOne({_id: id}, {
        name: name,
        rating: rating, 
        date: date, 
    });
    return {
        _id: id, 
        name: name, 
        rating: rating, 
        date: date }
}

//11. Define a model teo delete a document using async, await, .deleteOne({id:id}).
//The return will result in deletedCount
const deleteById = async (id) => {
    const result = await Restaurant.deleteOne({_id: id});
    return result.deletedCount;
}

//1:29 up to 3:15
export {createRestaurant, findRestaurant, findRestaurantById, replaceRestaurant, deleteById}; 
