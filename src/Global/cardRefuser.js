import React from 'react'

export const CardRefuser = (state, action) => {

    // console.log("State message is show ",  state)
    const { shoppingCard, totalPrice, qty } = state;
    console.log(shoppingCard);
    let product;
    let index;
    let updatePrice;
    let updateQty;


    switch (action.type) {
        case 'Add To Card': {
            console.log("Add to card");

            const Check = shoppingCard.find(product => product.id === action.id);
            if (Check) {
                return state;
            }
            else {
                product = action.product;
                product['qty'] = 1;
                updateQty = qty + 1;
                updatePrice = totalPrice + product.price;
                return {
                    shoppingCard: [product, ...shoppingCard],
                    totalPrice: updatePrice, qty: updateQty
                };


            }

            break;
        }
        case 'inc':
            product = action.card;
           product.qty = product.qty + 1;
            updatePrice = totalPrice + product.price;
            updateQty = qty+1
            index = shoppingCard.findIndex((card) => card.id === action.id)
            shoppingCard[index] = product;
            return { shoppingCard: [...shoppingCard], totalPrice: updatePrice, qty: updateQty }
            break;

        case 'dec':
            product = action.card;
            if (product.qty > 0) {
                product.qty = product.qty - 1;
                updatePrice = totalPrice - product.price;
                updateQty = qty-1
                index = shoppingCard.findIndex((card) => card.id === action.id)
                shoppingCard[index] = product;
                return { shoppingCard: [...shoppingCard], totalPrice: updatePrice, qty: updateQty }
            }
            else {
                return state;
            }

            break;

            case 'delete':
               const filtered=shoppingCard.filter(product=>product.id!==action.id)
            product=action.card
            updateQty=qty-product.qty
            updatePrice=totalPrice-product.price*product.qty;
            return {shoppingCard:[...filtered],totalPrice:updatePrice,qty:updateQty}
            break;

        default: return state;

    }
}
