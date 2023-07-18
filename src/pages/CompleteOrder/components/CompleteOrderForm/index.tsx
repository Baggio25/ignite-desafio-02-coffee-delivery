import { useTheme } from "styled-components";
import { MapPinLine } from "phosphor-react";

import { SectionTitle } from "../SectionTitle";
import { TitleText } from "../../../../components/Typography";

import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { AddressForm } from "./AddressForm";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />

        <AddressForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
