import express from 'express';
import bodyParser from 'body-parser';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
const app = express();
const prisma = new PrismaClient();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());

app.post('/donation', async (req, res) => {
  try {
    const {
      nomeCompleto,
      email,
      telefone,
      endereco,
      cpf,
      rg,
      tipoRoupa,
      quantidade,
      condicao,
      tamanho,
      dataDoacao,
      comentarios,
      preferenciaContato,
      consentimentoComunicacao,
      consentimentoDados
    } = req.body;

    const donation = await prisma.donation.create({
      data: {
        fullName: nomeCompleto, 
        email,
        phone: telefone,
        address: endereco, 
        cpf,
        rg,
        clothingType: tipoRoupa, 
        quantity: quantidade, 
        condition: condicao, 
        size: tamanho, 
        donationDate: new Date(dataDoacao),
        comments: comentarios, 
        contactPref: preferenciaContato, 
        consentCommunication: consentimentoComunicacao,
        consentDataSharing: consentimentoDados
      }
    });
    

    res.status(201).json({ message: 'Doação registrada com sucesso!', donation });
  } catch (error) {
    console.error('Erro ao salvar a doação:', error);
    res.status(500).json({ error: 'Erro ao registrar a doação' });
  }
});


app.listen(8080, () => {
  console.log(`Servidor rodando na porta 8080`);
});
