import React, { useEffect, useState } from "react";
import "./style.css";
import img_one from "./pictures/01.jpg";
import img_two from "./pictures/02.jpg"
import img_three from "./pictures/03.jpg";
import img_four from "./pictures/04.jpg";
import img_five from "./pictures/05.jpg";
import img_six from "./pictures/06.jpg";
import img_seven from "./pictures/07.jpg";
import img_eight from "./pictures/08.jpg";
import photo from "./pictures/img-01.jpg";

export default function Boxes(){
    const [name] = useState(["Pizza", "Salad", "Noodle"]);
    const [box, setbox] = useState([]);
    const [boxes] = useState([
        {
            img: img_one,
            title: "Fusce dictum finibus",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$45 / $55",
            type: "Pizza"
        },
        
        {
            img: img_two,
            title: "Aliquam sagittis",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$65 / $70",
            type: "Pizza"
        },

        {
            img: img_three,
            title: "Sed varius turpis",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$30.50",
            type: "Pizza"
        },

        {
            img: img_four,
            title: "Aliquam sagittis",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$25.50",
            type: "Pizza"
        },

        {
            img: img_five,
            title: "Maecenas eget justo",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$80.25",
            type: "Pizza"
        },

        {
            img: img_six,
            title: "Quisque et felis eros",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$20 / $40 / $60",
            type: "Pizza"
        },

        {
            img: img_seven,
            title: "Sed ultricies dui",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$94",
            type: "Pizza"
        },

        {
            img: img_eight,
            title: "Donec porta consequat",
            description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
            price: "$15",
            type: "Pizza"
        },

        {
            img: img_four,
            title: "Salad Menu One",
            description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
            price: "$25",
            type: "Salad"
        },

        {
            img: img_three,
            title: "Second Title Salad",
            description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
            price: "$30",
            type: "Salad"
        },

        {
            img: img_five,
            title: "Third Salad Item",
            description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
            price: "$45",
            type: "Salad"
        },

        {
            img: img_one,
            title: "Superior Salad",
            description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
            price: "$50",
            type: "Salad"
        },

        {
            img: img_eight,
            title: "Sed ultricies dui",
            description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
            price: "$55 / $60",
            type: "Salad"
        },

        {
            img: img_seven,
            title: "Maecenas eget justo",
            description: "Proin eu velit egestas, viverra sapien eget, consequat nunc. Vestibulum tristique",
            price: "$75",
            type: "Salad"
        },

        {
            img: img_eight,
            title: "Noodle One",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            price: "$12.50",
            type: "Noodle"
        },

        {
            img: img_seven,
            title: "Noodle Second",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            price: "$15.50",
            type: "Noodle"
        },

        {
            img: img_six,
            title: "Third Soft Noodle",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            price: "$20.50",
            type: "Noodle"
        },

        {
            img: img_five,
            title: "Aliquam sagittis",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            price: "$30.25",
            type: "Noodle"
        },

        {
            img: img_four,
            title: "Maecenas eget justo",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            price: "$35.50",
            type: "Noodle"
        },

        {
            img: img_three,
            title: "Quisque et felis eros",
            description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            price: "$40.50",
            type: "Noodle"
        }
    ])

   useEffect(()=>{
        setbox(boxes.filter(x=>x.type === "Pizza"))
   },[])

    const Filtrashion = (y)=>{
        setbox(boxes.filter(x=>x.type === y))
    }
    return(
        <section>
            <div className="center">
                <span className="welcome">Welcome to Simple House</span>
                <p className="paragraph">Total 3 HTML pages are included in this template. Header image has a parallax <br/>
                   effect. You can feel free to download, edit and use this TemplateMo layout for <br/>
                   your commercial or non-commercial websites.
                </p>
                {name.map((elem, index)=>{
                return <button onClick={()=>Filtrashion(elem)} key={index}>{elem}</button>
            })}
            </div>
            <div className="products">
                {box.map((elem, index)=>{
                    return (
                        <div>
                            <img src={elem.img} alt="" />
                            <h2>{elem.title}</h2>
                            <p>{elem.description}</p>
                            <p>{elem.price}</p>
                        </div>
                    )
                })}
            </div>
            <div className="content">
                <img src={photo} alt="" />
                <div>
                    <span className="finish">Maecenas nulla neque</span>
                    <p>
                        Redistributing this template as a downloadable ZIP file on <br/>
                        any template collection site is strictly prohibited. You will <br/>
                        need to <a href="#">talk to us</a> for additional permissions about our <br/>
                        templates. Thank you.
                    </p>
                    <button>Read More</button>
                </div>
            </div>
        </section>
    )
}