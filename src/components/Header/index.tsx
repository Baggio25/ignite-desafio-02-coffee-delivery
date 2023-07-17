import { MapPin, ShoppingCart } from "phosphor-react";

import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Dois Vizinhos, PR
          </HeaderButton>
          
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}