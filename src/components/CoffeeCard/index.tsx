/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useState } from "react";
import { ShoppingCart } from "phosphor-react";

import { QuantityInput } from "../QuantityInput";
import { RegularText, TitleText } from "../Typography";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../utils/formatMoney";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";

export interface Coffe {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeProps {
  coffee: Coffe;
}

export function CoffeeCard({ coffee }: CoffeProps) {

  const [ quantity, setQuantity ] = useState(1);
  const { addCoffeeToCart } = useCart();
  const formattedPrice = formatMoney(coffee.price);

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee, 
      quantity
    }

    addCoffeeToCart(coffeeToAdd);
  }

  function handleIncrease() {
    setQuantity((state: number) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state: number) => state - 1);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
