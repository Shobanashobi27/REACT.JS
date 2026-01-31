import Nav from "./Nav"
import Structure from "./Structure"
import "./App.css"
export default function App(){
  let laptop =[{title:"walker Intel Celeron Dual Core N4020 - (4 GB/128 GB SSD/Windows 11 Home) NU14A1 Thin and Light Laptop  (14.1 inch, Cloud Silver, 1.3 Kg)",
    price:"₹11,990",
    rating:"3.7",
    image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/u/z/e/-original-imahg5fyvzdwaqzj.jpeg?q=70"},
    {
      title:"ASUS Vivobook Go 15 (2025) with Office 2024 + M365 Basic* Intel Core i3 N305 - (8 GB/512 GB SSD/Windows 11 Home) E1504GA-NJ3322WS | E1504GA-BQ1225WS Thin and Light Laptop  (15.6 inch, Mixed Black, 1.63 Kg, With MS Office)",
      price:"₹30,990",
      rating:"4.3",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/o/f/m/-original-imahbqpbwkdwc733.jpeg?q=70"
    },
    {
      title:"HP 15s Intel Core i3 13th Gen 1315U - (8 GB/512 GB SSD/Windows 11 Home) 15-fd0006TU / 15-fd0569TU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.75 Kg, With MS Office)",
      price:"₹41,999",
      rating:"3.8",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/i/m/q/-original-imahg53xegyhbrjh.jpeg?q=70"
    },
    {
      title:"Acer Aspire 3 Backlit AMD Ryzen 7 Octa Core 7730U - (16 GB/1 TB SSD/Windows 11 Home) A325-42 / AS15-42 Thin and Light Laptop  (15.6 Inch, Silver, 1.79 Kg)",
      price:"₹45,990",
      rating:"4.5",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/2/q/t/-original-imahg5ftjkmg4m82.jpeg?q=70"
    },
    {
      title:"ASUS Expertbook P1 Intel Core i3 13th Gen 1315U - (8 GB/512 GB SSD/Windows 11 Home) P1503CVA-S70501WS Thin and Light Laptop  (15.6 inch, Misty Grey, 1.62 Kg, With MS Office)",
      price:"₹36,990",
      rating:"4.5",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/7/q/-original-imahehnhwehhffc4.jpeg?q=70"
    },
    {
      title:"Ultimus APEX Intel Celeron Dual Core 4mm Thin Bezel 180 Degree Hinge - (8 GB/512 GB SSD/Windows 11 Home) NU14U7INC56BN-CS Laptop  (14.1 inch, Silver, 1.25 kg)",
      price:"₹18,490",
      rating:"4.8",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/t/q/a/-original-imahdwj9e5kfcz9q.jpeg?q=70"
    },
    {
      title:"Acer Aspire 3 Intel Celeron Dual Core N4500 - (12 GB/512 GB SSD/Windows 11 Home) A324-45 Thin and Light Laptop  (14 Inch, Pure Silver, 1.3 Kg)",
      price:"₹28,990",
      rating:"4.3",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/r/7/0/-original-imahg5fwjq9tnnhy.jpeg?q=70"
    },
    {
      title:"Acer Aspire 3 AMD Ryzen 3 Quad Core 7330U - (8 GB/512 GB SSD/Windows 11 Home) AS15 42 / A325 42 Thin and Light Laptop  (15.6 Inch, Silver, 1.79 Kg)",
      price:"₹29,990",
      rating:"4.5",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/7/z/j/-original-imahg5fyhy7ggkns.jpeg?q=70"
    }
  ]
  let mobile = [{
    title:"Apple iPhone 16 Plus (Ultramarine, 128 GB)",
    price:"₹79,900",
    rating:"4.5",
    image:"https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/o/d/1/-original-imahggetmzzanrty.jpeg?q=60"},
  ]
  return <div>
    <Nav></Nav>
    <Structure laptop={laptop}></Structure>
    <Structure laptop={mobile}></Structure>
  </div>
}