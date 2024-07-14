const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { issLoggedin , issOwner ,velidateListing } = require("../middleware.js");

//Listings
//All listings
router.get("/",wrapAsync( async(req,res)=>{
    // await Listing.deleteMany({title:"test"});
    let allListings = await Listing.find({});

    let trendApi = "https://www.googleapis.com/books/v1/volumes?q=trending+subject"
    let trendRes = await fetch(trendApi);
    let trendData = await trendRes.json();
    if (trendData.items && Array.isArray(trendData.items)) {
        trendData.items = trendData.items.map(item => {
            // Check if 'imageLinks' and 'smallThumbnail' exist
            if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) {
                item.volumeInfo.smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
            }
            if (item.volumeInfo.description) {
                item.volumeInfo.description = item.volumeInfo.description.slice(0, 100) + '...';
            }
            return item;
        });
    }
    console.log(trendData);

    let newApi = "https://www.googleapis.com/books/v1/volumes?q=new+subject";
    let newRes = await fetch(newApi);
    let newData = await newRes.json();
    if (newData.items && Array.isArray(newData.items)) {
        newData.items = newData.items.map(item => {
            // Check if 'imageLinks' and 'smallThumbnail' exist
            if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) {
                item.volumeInfo.smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
            }
            if (item.volumeInfo.description) {
                item.volumeInfo.description = item.volumeInfo.description.slice(0, 100) + '...';
            }
            return item;
        });
    }
    console.log(newData);

    let data = {
        allListings : allListings,
        trendData : trendData.items,
        newData : newData.items
    };

    res.render("listings/index.ejs",{data});
}))

router.get("/searchpage",wrapAsync( async(req,res)=>{
    res.render("listings/searchpage.ejs");
}))

router.post("/search",wrapAsync( async(req,res)=>{
    let q = req.body.q;
    
    let searchApi = `https://www.googleapis.com/books/v1/volumes?q=${q}+subject`;
    let searchRes = await fetch(searchApi);
    let searchData = await searchRes.json();
    if (searchData.items && Array.isArray(searchData.items)) {
        searchData.items = searchData.items.map(item => {
            // Check if 'imageLinks' and 'smallThumbnail' exist
            if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) {
                item.volumeInfo.smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
            }
            // Slice the description if it exists
            if (item.volumeInfo.description) {
                item.volumeInfo.description = item.volumeInfo.description.slice(0, 100) + '...';
            }
            return item;
        });
    }
    let searchDatas = searchData.items;
    res.render("listings/search.ejs", {searchDatas});
}))

//Show listings
router.get("/:id", wrapAsync( async(req,res)=>{
    let { id } = req.params;

    let searchApi = `https://www.googleapis.com/books/v1/volumes?q=${id}+intitle`;
    let searchRes = await fetch(searchApi);
    let searchData = await searchRes.json();
    if (searchData.items && Array.isArray(searchData.items)) {
        searchData.items = searchData.items.map(item => {
            // Check if 'imageLinks' and 'smallThumbnail' exist
            if (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) {
                item.volumeInfo.smallThumbnail = item.volumeInfo.imageLinks.smallThumbnail;
            }
            return item;
        });
    }
    let searchDatas = searchData.items;
    res.render("listings/show.ejs",{ searchDatas });
}))

//New book listings
router.get("/new/add", issLoggedin, (req, res) => {
    res.render("listings/new.ejs");
});

router.post("/", issLoggedin, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New book listing created!");
    res.redirect("/listings");
}));


// Edit book listings
router.get("/:id/edit", issLoggedin, issOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}));

router.put("/:id", issLoggedin, issOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
}));


//delete listings
router.delete("/:id", issLoggedin, issOwner ,wrapAsync( async(req,res)=>{
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","listing Deleted!");
    res.redirect("/listings");
}))

module.exports = router;