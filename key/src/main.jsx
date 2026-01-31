import React from "react";
import { createRoot } from "react-dom/client";z
let age=21;
let name=`shob ${age}`
let UserName="virat"
let ipl=["csk","rr","srh","gt","rcb","mi","lsg",'kkr',"cc"]
let storage=[
    {
        id:1,
        ProductName:"samsung",
        price:20000,
        rating:3
    },
    {
        id:2,
        ProductName:"vivo",
        price:15000,
        rating:4.2
    },
    {
        id:3,
        ProductName:"oppo",
        price:25000,
        rating:4.8
    },
    {
        id:4,
        ProductName:"iphone",
        price:50000,
        rating:5
    },
    {
        id:5,
        ProductName:"realme",
        price:10000,
        rating:2
    },

]
 createRoot(document.getElementById("root")).render(
    <>
    {/* <h1>UserName:{name}</h1>
    <h1>UserName:{UserName},{age}</h1> */}

    {/* <url>
        {ipl.map((e,i,arr)=>{
            return <li>{e.toUpperCase()}</li>
        })}
    </url> */}

    <div className="abc">
        {storage.map((e,i,arr)=>{
            return <section key={e.id} >
                <h3>Product Name:{e.ProductName}</h3>
                <h3>Product price:{e.price}</h3>
                <h3>Product rating:{e.rating}</h3>
            </section>

        })}
        </div>

    </>
 )