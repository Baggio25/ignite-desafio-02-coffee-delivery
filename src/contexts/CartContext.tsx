/* eslint-disable @typescript-eslint/no-unsafe-return */

import { createContext, useState, useEffect, ReactNode } from "react";
import { produce } from "immer";

import { Coffe } from "../components/CoffeeCard";

export interface CartItem extends Coffe {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
  removeCartItem: (cartItemId: number) => void;
  cleanCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if(storagedCartItems) {
      return JSON.parse(storagedCartItems);
    }

    return [];
  });

  const cartQuantity = cartItems.length;
  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + (cartItem.price * cartItem.quantity);
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffee.id);
    
    const newCart = produce(cartItems, (draft) => {
      if(coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  }

  function changeCartItemQuantity(cartItemId: number, type: "increase" | "decrease"){
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistisInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

      if(coffeeExistisInCart >= 0) {
        const item = draft[coffeeExistisInCart];
        item.quantity = type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    })

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistisInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId);

      if(coffeeExistisInCart >= 0) {
        draft.splice(coffeeExistisInCart, 1);
      }
    })

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return(
    <CartContext.Provider 
      value={{ 
        cartItems, 
        cartQuantity,
        cartItemsTotal, 
        addCoffeeToCart, 
        changeCartItemQuantity,
        removeCartItem,
        cleanCart
      }}>
      {children}
    </CartContext.Provider>
  )
}