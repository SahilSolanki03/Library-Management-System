const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverrive = require('method-override');
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const usersRouter = require("./routes/user.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverrive("_method"));
app.engine('ejs',ejsMate);

const sessionOptions = {
    secret: "superSeceretCode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expire: Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
.then(()=>{
    console.log("connection sucssesfull");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Library');
}

app.listen(8080,()=>{
    console.log("listning.....");
})

// app.get("/demo", async(req,res)=>{
//     let fakeUser = new User({
//         email:"abc@gmail.com",
//         username: "abc",
//     })

//     let newuser = await User.register(fakeUser,"abc@123");
//     res.send(newuser);
// });

//locals middleware
app.use((req, res, next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.crrUser = req.user;
    next();
})

//routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/users", usersRouter);

//Error routes
app.all("*" , (req, res, next)=>{
    next(new ExpressError(404, "Page Not Found!"));
})

app.use( (err, req, res, next)=>{
    let { statusCode = 500 , message = "Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{message});
})
