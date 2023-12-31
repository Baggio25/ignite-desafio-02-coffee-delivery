import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { useCart } from "../../hooks/useCart";
import coffeeLogoImg from "../../assets/Logo.svg";

import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";

export function Header() {
  const { cartQuantity } = useCart();


  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Dois Vizinhos, PR
          </HeaderButton>

          <NavLink to="/complete-order">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
