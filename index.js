const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = process.env.PORT || 3000;
// const mongoose = require("mongoose");

const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/", function(req, res){
    res.render("index");  
  })

  app.get("/shop", function(req, res){
    res.render("shop");
  })

  app.get("/blog", function(req, res){
    res.render("blog");
  })

  app.get("/about", function(req, res){
    res.render("about");
  })

  app.get("/contact", function(req, res){
    res.render("contact");
  })

  app.get("/cart", function(req, res){
    res.render("cart")
  })

  app.get("/product1", function(req, res){
    res.render("sproduct" , {
      productId: 1,
      imageOne: '/images/zara/p1/a.jpg', 
    imageTwo:'/images/zara/p1/b.jpg',
    imageThree:'/images/zara/p1/c.jpg',
    imageFour:'/images/zara/p1/d.jpg',
    productName: "STRIPED TEXTURED SHIRT",
    price: "Rs 2990"

  });
  });

  
  app.get("/product2", function(req, res){
    res.render("sproduct" , {
      productId: 2,
      imageOne: '/images/zara/p2/a.jpg', 
    imageTwo:'/images/zara/p2/b.jpg',
    imageThree:'/images/zara/p2/c.jpg',
    imageFour:'/images/zara/p2/d.jpg',
    productName: "STRIPED TEXTURED SHIRT",
    price: "Rs 2990"

  });
  });


  app.get("/product3", function(req, res){
    res.render("sproduct" , {
      productId: 3,
      imageOne: '/images/zara/p3/a.jpg', 
    imageTwo:'/images/zara/p3/b.jpg',
    imageThree:'/images/zara/p3/c.jpg',
    imageFour:'/images/zara/p3/d.jpg',
    productName: "ABSTRACT PRINT SHIRT",
    price: "Rs 2990"

  });
  });

  app.get("/product4", function(req, res){
    res.render("sproduct" , {
      productId: 4,
      imageOne: '/images/zara/p4/a.jpg', 
    imageTwo:'/images/zara/p4/b.jpg',
    imageThree:'/images/zara/p4/c.jpg',
    imageFour:'/images/zara/p4/d.jpg',
    productName: "ABSTRACT PRINT SHIRT",
    price: "Rs 2990"

  });
  });

  app.get("/product5", function(req, res){
    res.render("sproduct" , {
      productId: 5,
      imageOne: '/images/zara/p5/a.jpg', 
    imageTwo:'/images/zara/p5/b.jpg',
    imageThree:'/images/zara/p5/c.jpg',
    imageFour:'/images/zara/p5/d.jpg',
    productName: "OXFORD SHIRT",
    price: "Rs 2490"

  });
  });

  app.get("/product6", function(req, res){
    res.render("sproduct" , {
      productId: 6,
      imageOne: '/images/zara/p6/a.jpg', 
    imageTwo:'/images/zara/p6/b.jpg',
    imageThree:'/images/zara/p6/c.jpg',
    imageFour:'/images/zara/p6/d.jpg',
    productName: "T-SHIRT WITH CONTRAST PRINT",
    price: "Rs 2290"

  });
  });

  app.get("/product7", function(req, res){
    res.render("sproduct" , {
      productId: 7,
      imageOne: '/images/zara/p7/a.jpg', 
    imageTwo:'/images/zara/p7/b.jpg',
    imageThree:'/images/zara/p7/c.jpg',
    imageFour:'/images/zara/p7/d.jpg',
    productName: "GEOMETRIC PRINT SHIRT",
    price: "Rs 2490"

  });
  });


  app.get("/product8", function(req, res){
    res.render("sproduct" , {
      productId: 8,
      imageOne: '/images/zara/p8/a.jpg', 
    imageTwo:'/images/zara/p8/b.jpg',
    imageThree:'/images/zara/p8/c.jpg',
    imageFour:'/images/zara/p8/d.jpg',
    productName: "COTTON-LINEN SHIRT",
    price: "Rs 2990"

  });
  });

  app.get("/product9", function(req, res){
    res.render("sproduct" , {
      productId: 9,
      imageOne: '/images/zara/p9/a.jpg', 
    imageTwo:'/images/zara/p9/b.jpg',
    imageThree:'/images/zara/p9/c.jpg',
    imageFour:'/images/zara/p9/d.jpg',
    productName: "BLENDED STRIPED SHIRT",
    price: "Rs 2990"

  });
  });

  app.get("/product10", function(req, res){
    res.render("sproduct" , {
      productId: 10,
      imageOne: '/images/zara/p10/a.jpg', 
    imageTwo:'/images/zara/p10/b.jpg',
    imageThree:'/images/zara/p10/c.jpg',
    imageFour:'/images/zara/p10/d.jpg',
    productName: "T-SHIRT WITH CONTRAST PRINT",
    price: "Rs 2390"

  });
  });

  app.get("/product11", function(req, res){
    res.render("sproduct" , {
      productId: 11,
      imageOne: '/images/zara/p11/a.jpg', 
    imageTwo:'/images/zara/p11/b.jpg',
    imageThree:'/images/zara/p11/c.jpg',
    imageFour:'/images/zara/p11/d.jpg',
    productName: "COTTON-LINEN SHIRT",
    price: "Rs 2990"

  });
  });


  app.get("/product12", function(req, res){
    res.render("sproduct" , {
      productId: 12,
      imageOne: '/images/zara/p12/a.jpg', 
    imageTwo:'/images/zara/p12/b.jpg',
    imageThree:'/images/zara/p12/c.jpg',
    imageFour:'/images/zara/p12/d.jpg',
    productName: "PRINTED STRETCHED SHIRT",
    price: "Rs 2690"

  });
  });


  app.get("/product13", function(req, res){
    res.render("sproduct" , {
      productId: 13,
      imageOne: '/images/zara/p13/a.jpg', 
    imageTwo:'/images/zara/p13/b.jpg',
    imageThree:'/images/zara/p13/c.jpg',
    imageFour:'/images/zara/p13/d.jpg',
    productName: "TEXTURED CROCHET SHIRT",
    price: "Rs 3990"

  });
  });

  app.get("/product14", function(req, res){
    res.render("sproduct" , {
      productId: 14,
      imageOne: '/images/zara/p14/a.jpg', 
    imageTwo:'/images/zara/p14/b.jpg',
    imageThree:'/images/zara/p14/c.jpg',
    imageFour:'/images/zara/p14/d.jpg',
    productName: "STRIPED ELASTIC SHIRT",
    price: "Rs 2990"

  });
  });

  app.get("/product15", function(req, res){
    res.render("sproduct" , {
      productId: 15,
      imageOne: '/images/zara/p15/a.jpg', 
    imageTwo:'/images/zara/p15/b.jpg',
    imageThree:'/images/zara/p15/c.jpg',
    imageFour:'/images/zara/p15/d.jpg',
    productName: "ABSTRACT PRINT SHIRT",
    price: "Rs 3490"

  });
  });

  app.get("/product16", function(req, res){
    res.render("sproduct" , {
      productId: 16,
      imageOne: '/images/zara/p16/a.jpg', 
    imageTwo:'/images/zara/p16/b.jpg',
    imageThree:'/images/zara/p16/c.jpg',
    imageFour:'/images/zara/p16/d.jpg',
    productName: "GRAPHIC PRINT T-SHIRT",
    price: "Rs 2290"

  });
  });







  
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  