import { Button } from "../../../../../components/Button";
import { RegularText } from "../../../../../components/Typography";
import { ConfirmationSectionContainer } from "../styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de Itens</RegularText>
        <RegularText>R$ 19,80</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 4,50</RegularText>
      </div>
      <div>
        <RegularText weight={700} color="subtitle" size="l">Total</RegularText>
        <RegularText weight={700} color="subtitle" size="l">R$ 24,30</RegularText>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  )
}