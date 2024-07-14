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
        default : "https://th.bing.com/th/id/OIP.UMe7YZIQF7CqrolTjiO9jwHaEo?rs=1&pid=ImgDetMain",
        set: (v) => v === "" ? "https://th.bing.com/th/id/OIP.UMe7YZIQF7CqrolTjiO9jwHaEo?rs=1&pid=ImgDetMain" : v,
    },
    price : Number,
    location : String,
    country : String, 
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

