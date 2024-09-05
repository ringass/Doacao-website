import { All, Container, Inform, Textos, Titlemini, TitleminiWrapper, Titulo, FormRow, FormColumn, FieldGroup, FieldLabel, SectionTitle, SectionWrapper, ConsentGroup } from "./styles";
import SInput from "../Input";
import StyledButton from "../Button";
import { useState } from 'react';

function Donation() {

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    endereco: '',
    cpf: '',
    rg: '',
    tipoRoupa: '',
    quantidade: '',
    condicao: '',
    tamanho: '',
    dataDoacao: '',
    comentarios: '',
    preferenciaContato: '',
    consentimentoComunicacao: false,
    consentimentoDados: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {

      const dataToSend = {
        ...formData,
        quantidade: parseInt(formData.quantidade, 10) || 0,
      };

      const response = await fetch('http://localhost:8080/donation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Erro:', error);
    }
  };
  
  
  

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
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Nome Completo</FieldLabel>
                  <SInput
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                  />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>E-mail</FieldLabel>
                  <SInput
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite seu e-mail"
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Telefone (opcional)</FieldLabel>
                  <SInput
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Digite seu telefone"
                  />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Endereço (opcional)</FieldLabel>
                  <SInput
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Digite seu endereço"
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>CPF</FieldLabel>
                  <SInput
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    placeholder="Digite seu CPF"
                  />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>RG</FieldLabel>
                  <SInput
                    name="rg"
                    value={formData.rg}
                    onChange={handleChange}
                    placeholder="Digite seu RG"
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>
          </SectionWrapper>

          {/* Section: Dados de Doação */}
          <SectionWrapper>
            <SectionTitle>Dados de Doação</SectionTitle>
            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Tipo de Roupa</FieldLabel>
                  <SInput
                    name="tipoRoupa"
                    value={formData.tipoRoupa}
                    onChange={handleChange}
                    placeholder="Descreva o item doado"
                  />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Quantidade</FieldLabel>
                  <SInput
                    name="quantidade"
                    type="number"
                    value={formData.quantidade}
                    onChange={handleChange}
                    placeholder="Número de peças doadas"
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Condição</FieldLabel>
                  <SInput
                    name="condicao"
                    value={formData.condicao}
                    onChange={handleChange}
                    placeholder="Estado das roupas (novas, usadas, etc.)"
                  />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Tamanho</FieldLabel>
                  <SInput
                    name="tamanho"
                    value={formData.tamanho}
                    onChange={handleChange}
                    placeholder="Tamanho das roupas"
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Data da Doação</FieldLabel>
                  <SInput
                    name="dataDoacao"
                    type="date"
                    value={formData.dataDoacao}
                    onChange={handleChange}
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>

            <FormRow>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Comentários ou Observações</FieldLabel>
                  <SInput
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleChange}
                    placeholder="Deixe seu comentário ou observação"
                  />
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Preferências de Contato (opcional)</FieldLabel>
                  <SInput
                    name="preferenciaContato"
                    value={formData.preferenciaContato}
                    onChange={handleChange}
                    placeholder="Como prefere ser contatado?"
                  />
                </FieldGroup>
              </FormColumn>
            </FormRow>
          </SectionWrapper>

          {/* Consent and Confirmation */}
          <ConsentGroup>
            <label>
              <input
                type="checkbox"
                name="consentimentoComunicacao"
                checked={formData.consentimentoComunicacao}
                onChange={handleChange}
              /> Consentimento para Receber Comunicação
            </label>
            <label>
              <input
                type="checkbox"
                name="consentimentoDados"
                checked={formData.consentimentoDados}
                onChange={handleChange}
              /> Consentimento para Compartilhamento de Dados
            </label>
          </ConsentGroup>

          {/* Submit Button */}
          <StyledButton onClick={handleSubmit}>ENVIAR</StyledButton>
        </Container>
      </All>
    </>
  );
}

export default Donation;
