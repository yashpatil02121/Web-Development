//inserting data in mongo db

use harryKart
db.items.insertOne({
    name:"Samsung 30s",
    price: 22000,
    rating: 4.5,
    qty: 233,
    sole:98
})

db.items.insertMany({
    name:"Samsung 30s",
    price: 22000,
    rating: 4.5,
    qty: 233,
    sole:98
},
{
    name:"Moto 30s",
    price: 20000,
    rating: 3.5,
    qty: 133,
    sole:598
}
)