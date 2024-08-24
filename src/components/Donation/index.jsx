import { All, Container, Inform, Textos, Titlemini, TitleminiWrapper, Titulo, FormRow, FormColumn, FieldGroup, FieldLabel, SectionTitle, SectionWrapper, ConsentGroup } from "./styles";
import SInput from "../Input";
import StyledButton from "../Button";

function Donation() {
  return (
    <>
      <All>
        <Textos>
          <Titulo>DOE COM O <span>CORAÇÃO</span></Titulo>
          <Inform>Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.</Inform>
        </Textos>
        <Container>
          <TitleminiWrapper>
            <Titlemini>Preencha com seus dados</Titlemini>
          </TitleminiWrapper>
          {/* Section: Dados Pessoais */}
          <SectionWrapper>
            <SectionTitle>Dados Pessoais</SectionTitle>
            <FormRow>
              {/* Nome Completo and E-mail */}
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Nome Completo</FieldLabel>
                  <SInput placeholder="Digite seu nome completo" />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>E-mail</FieldLabel>
                  <SInput type="email" placeholder="Digite seu e-mail" />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Telefone (opcional)</FieldLabel>
                  <SInput type="tel" placeholder="Digite seu telefone" />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Endereço (opcional)</FieldLabel>
                  <SInput placeholder="Digite seu endereço" />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              {/* CPF and RG */}
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>CPF</FieldLabel>
                  <SInput placeholder="Digite seu CPF" />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>RG</FieldLabel>
                  <SInput placeholder="Digite seu RG" />
                </FieldGroup>
              </FormColumn>
            </FormRow>
          </SectionWrapper>

          {/* Section: Dados de Doação */}
          <SectionWrapper>
            <SectionTitle>Dados de Doação</SectionTitle>
            <FormRow>
              {/* Tipo de Roupa and Quantidade */}
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Tipo de Roupa</FieldLabel>
                  <SInput placeholder="Descreva o item doado" />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Quantidade</FieldLabel>
                  <SInput type="number" placeholder="Número de peças doadas" />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              {/* Condição and Tamanho */}
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Condição</FieldLabel>
                  <SInput placeholder="Estado das roupas (novas, usadas, etc.)" />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Tamanho</FieldLabel>
                  <SInput placeholder="Tamanho das roupas" />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              {/* Data da Doação */}
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Data da Doação</FieldLabel>
                  <SInput type="date" />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            {/* Preferences and Comments */}
            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Comentários ou Observações</FieldLabel>
                  <SInput placeholder="Deixe seu comentário ou observação" />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Preferências de Contato (opcional)</FieldLabel>
                  <SInput placeholder="Como prefere ser contatado?" />
                </FieldGroup>
              </FormColumn>
            </FormRow>
          </SectionWrapper>

          {/* Consent and Confirmation */}
          <ConsentGroup>
            <label>
              <input type="checkbox" /> Consentimento para Receber Comunicação
            </label>
            <label>
              <input type="checkbox" /> Consentimento para Compartilhamento de Dados
            </label>
          </ConsentGroup>

          {/* Submit Button */}
          <StyledButton>ENVIAR</StyledButton>
        </Container>
      </All>
    </>
  );
}

export default Donation;
