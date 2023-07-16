import { HeaderContainer } from "./styles";

import coffeeLogoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} />
      </div>
    </HeaderContainer>
  )
}