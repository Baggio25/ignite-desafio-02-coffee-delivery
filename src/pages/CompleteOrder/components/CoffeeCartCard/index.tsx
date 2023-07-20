import { Trash } from "phosphor-react";

import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { CartItem } from "../../../../contexts/CartContext";

import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";

import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();
  const coffeeTotal = coffee.price * coffee.quantity;
  const formatedPrice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }


  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput 
              size="small"
              quantity={coffee.quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            
            <RemoveButton
              onClick={handleRemove}
            >
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formatedPrice}</p>
    </CoffeeCartCardContainer>
  )
}