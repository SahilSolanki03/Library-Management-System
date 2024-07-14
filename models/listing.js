const mongoose = require('mongoose');
const Review = require('./review');
const User = require("./user");
const Schema = mongoose.Schema;

const listningSchema = new Schema({
    title : {
        type : String,
        require : true,
    },
    description : String,
    image : {
        type : String,
        default : "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1718785229~exp=1718788829~hmac=72ee277a6ec9bdf4d2013effddd0cbc54f7b0efafec240cbd7bfdc7f953bc3f6&w=740",
        set: (v) => v === "" ? "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1718785229~exp=1718788829~hmac=72ee277a6ec9bdf4d2013effddd0cbc54f7b0efafec240cbd7bfdc7f953bc3f6&w=740" : v,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
    },
    year: {
        type: Number,
    },
    genre: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
    ISBN: {
        type: String,
        required: true,
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
});

listningSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id : {$in: listing.reviews} });
    }
})

const Listing = mongoose.model("Listing",listningSchema);
module.exports = Listing;

