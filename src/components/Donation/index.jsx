import { All, Container, Inform, Textos, Titlemini, TitleminiWrapper, Titulo, FormRow, FormColumn, FieldGroup, FieldLabel, SectionTitle, SectionWrapper, ConsentGroup, SelectionBox } from "./styles";
import SInput from "../Input";
import StyledButton from "../Button";
import { useState } from 'react';
import InputMask from 'react-input-mask';

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

  function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
  
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
  
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
  
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
  
    return true;
  }
  
  function isValidRG(rg) {
    rg = rg.replace(/\D/g, ''); 
    return rg.length >= 7 && rg.length <= 9; 
  }
  
  function isValidPhone(phone) {
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/; 
    return phonePattern.test(phone);
  }
  
  const handleSubmit = async () => {

  const { nomeCompleto, email, cpf, rg, quantidade, dataDoacao, consentimentoComunicacao, consentimentoDados, condicao, endereco, telefone } = formData;
  

  if (!nomeCompleto || !email || !cpf || !rg || !dataDoacao || !quantidade || !consentimentoComunicacao || !consentimentoDados || !condicao || !endereco || !telefone  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }
    
    if (!isValidCPF(cpf)) {
      alert("CPF inválido");
      return;
    }
  
    if (!isValidRG(rg)) {
      alert("RG inválido");
      return;
    }
  
    if (!isValidPhone(telefone)) {
      alert("Telefone inválido");
      return;
    }

    if(parseInt(quantidade, 10) === 0){
      alert("Doe no minimo uma peça");
      return;
    }

    const today = new Date(); 
    const selectedDate = new Date(dataDoacao); 
    const currentYear = today.getFullYear(); 
  
    if (selectedDate < today) {
      alert("A data de doação não pode ser anterior ao dia atual.");
      return;
    }
  
    if (selectedDate.getFullYear() !== currentYear) {
      alert(`A data de doação deve ser dentro do ano ${currentYear}.`);
      return;
    }

    try {
      const dataToSend = {
        ...formData,
        cpf: formData.cpf.replace(/\D/g, ''),
        rg: formData.rg.replace(/\D/g, ''),
        telefone: formData.telefone.replace(/\D/g, ''),
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
  
      setFormData({
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

                  <InputMask
                    name="telefone"
                    mask="(99) 99999-9999"
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleChange({ target: { name: 'telefone', value: e.target.value } })}
                    placeholder="Digite seu telefone"
                  >
                    {(inputProps) => <SInput {...inputProps} placeholder="(00) 00000-0000" type="text" />}
                  </InputMask>
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
                  <InputMask
                    mask="999.999.999-99" 
                    value={formData.cpf}
                    onChange={(e) => handleChange({ target: { name: 'cpf', value: e.target.value } })}
                  >
                    {(inputProps) => <SInput {...inputProps} placeholder="000.000.000-00" type="text" />}
                  </InputMask>
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>RG</FieldLabel>
                  <InputMask
                    mask="99.999.999-9"
                    value={formData.rg}
                    onChange={(e) => handleChange({ target: { name: 'rg', value: e.target.value } })}
                  >
                    {(inputProps) => <SInput {...inputProps} placeholder="00.000.000-0" type="text" />}
                  </InputMask>
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
                    min="0"
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
                  <SelectionBox name="condicao"
                    value={formData.condicao}
                    onChange={handleChange}
                    >
                     <option disabled selected hidden value="">Estado das roupas</option>
                    <option value="Diversas condições">Diversas condições</option>
                    <option value="Novas">Novas</option>
                    <option value="Usadas">Usadas</option>
                    <option value="Seminovas">Seminovas</option>
                    <option value="Usadas Desgastadas">Usadas Desgastadas</option>
                    <option value="Usadas rasgadas">Usadas rasgadas</option>
                  </SelectionBox>
                </FieldGroup>
              </FormColumn>
              <FormColumn>
                <FieldGroup>
                  <FieldLabel>Tamanho</FieldLabel>
                  <SelectionBox name="tamanho" value={formData.tamanho} onChange={handleChange} placeholder="Selecione um tamanho">
                    <option disabled selected hidden value="">Selecione um tamanho</option>
                    <option value="Diversos Tamanhos">Diversos Tamanhos</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                    <option value="GG">GG</option>
                  </SelectionBox>
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
