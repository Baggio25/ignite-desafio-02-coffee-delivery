
import { useTheme } from "styled-components";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";

import confirmedOrderImg from "../../assets/ConfirmedOrder.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";

import { RegularText, TitleText } from "../../components/Typography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

export function OrderConfirmed() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado!</TitleText>
        <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você.</RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon 
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua XV de novembro, 36</strong>
                <br/>
                Margarida Galvan - Dois Vizinhos, PR
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega 
                <br/>
                <strong>20 a 30min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Pagamento na entrega 
                <br/>
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderImg} />
      </section>

    </OrderConfirmedContainer>
  )
}