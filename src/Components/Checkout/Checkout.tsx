import './Checkout.css'
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Checkout() {
    const [items, setItems] = useState<any[]>([]);
    const navigate = useNavigate();
    let cart = JSON.parse(sessionStorage.getItem("cart") as string);

    useEffect(() => {
        if (cart === null) {
            setItems([]);
        }  else {
            let price: number = 0
            for (let item of cart) {
                price += item.price
                let options: any[] = []
                if (item.customizations !== undefined) {
                    for (let option of Object.entries(item.customizations)) {
                        if (option.length === 2) { // Customzations are a little messed up at them moment so this is needed
                            if (option[1] === "1") { options.push(option[0])
                            } else if (option[1] === "0") {
                                //do nothing for now
                            } else { options.push(option[1]) }
                        }
                    }
                    item.customizations = options
                }
            }

            setItems(cart);
            document.getElementById("checkout_price")!!.innerText = price.toString();
        }

        
    },[])

    function removeFromCart(item: any, index: number, event: any) {
        //Maybe set Prompt if the user is sure they want to delete the item.

        let cart = JSON.parse(sessionStorage.getItem("cart") as string);
        if (!Array.isArray(cart) || cart.length === 1) {
            cart = []
        } else { cart.splice(index, 1); }

        sessionStorage.setItem("cart", JSON.stringify(cart));
        (event.target as HTMLDivElement).parentElement!.remove();
    }

    function purchase() {
        if (items.length !== 0) {
            navigate("/payment");
        } else {
            //maybe add error saying why
        }
    }

    return (
        <div className="checkout">
            <h1 className="checkout_title">Checkout</h1>

            <div className="checkout_item_list">
                {items.length > 0 ? items.map((item: any, index: number) => (
                    <div key={index} className="checkout_item">
                        <div className="checkout_item_title">{item.name}</div>
                        <div className="checkout_remove_item" onClick={(e) => {removeFromCart(item, index, e)}}>X</div>
                        <div className="checkout_item_description">{item.description}</div>
                        <div className="checkout_item_price">{item.price}</div>
                        <div className="checkout_item_customizations">
                            Customizations : {item.customizations !== undefined ? item.customizations.map((option: any ) => (
                                <p>{option}</p>
                            )) : <></>}
                        </div>
                    </div>)) : <h1>You dont have any items yet!</h1>}
            </div>

            <div className="checkout_details">
                <p id="checkout_price">Total<br/>0.00</p>
                <div className="checkout_purchase_button" onClick={purchase}>Purchase</div>
            </div>
        </div>)
}