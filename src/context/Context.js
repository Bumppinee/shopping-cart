import { createContext, useContext, useReducer } from 'react'
import {faker} from '@faker-js/faker'
import { cartReducer } from './Reducers'





const Cart = createContext()

const Context = ({children}) => {
// 20 products of fake data make array 
  const products = [...Array(20)].map(()=>({

    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])

  }));
  // use a hook called useReducers creates a function to increase and decrease a value

  const [state, dispatch] = useReducer(cartReducer,{
products:products,
cart:[]
    
  })

  
  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
  
}

export default Context;

export const CartState=()=>{
  return useContext(Cart);
};