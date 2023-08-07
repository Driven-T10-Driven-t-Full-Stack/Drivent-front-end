import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useState } from 'react';
import Input from './styled';
import Button from '../Form/Button';
import { toast } from 'react-toastify';
import { usePaymentPost } from '../../hooks/api/usePayment';
import { validData, validDate } from './validData';

export default function CreditCardPayment({ ticket, totalPrice }) {
  const { postPayment } = usePaymentPost();
  const [issuer, setIssuer] = useState();
  const [error, setError] = useState(false);
  const [errorExpiry, setErrorExpiry] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    if (name === 'expiry') {
      const error = validDate(state);
      setErrorExpiry(error);
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handleCardIssuer = (cardIssuer) => {
    setIssuer(cardIssuer.issuer);
  };

  const removeNonNumeric = (str) => str.replace(/\D/g, '');

  async function submitPayment(event) {
    event.preventDefault();

    console.log(removeNonNumeric(state.number).length)
    console.log(removeNonNumeric(state.cvc).length)
    const error = validData(state);
    const errorExpiry = validDate(state);
    setErrorExpiry(errorExpiry);

    if (error || errorExpiry) {
      setError(true);
      toast('Dados inválidos do Cartão!');
      setDisabled(false);
      return;
    }

    const cardData = {
      issuer: issuer,
      number: removeNonNumeric(state.number),
      name: state.name,
      expirationDate: state.expiry,
      cvv: state.cvc,
      totalPrice
    };

    try {
      await postPayment({ ticketId: ticket.id, cardData });
      setDisabled(true);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      toast('Pagamento feito com sucesso');
    } catch (error) {
      toast('Algo inesperado aconteceu!');
      setDisabled(false);
    }
  }

  return (
    <>
      <form onSubmit={submitPayment}>
        <Payment>
          <Card>
            <Cards
              number={removeNonNumeric(state.number)}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
              callback={handleCardIssuer}
            />
          </Card>
          <Inputs>
            <Input
              type="text"
              name="number"
              placeholder="Card Number"
              mask="9999 9999 9999 9999"
              value={state.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              error={error}
            />
            <Typography variant='subtitle1' component='div' style={{ color: '#A9A9A9' }}> E.g.: 49..., 51..., 36..., 37... </Typography>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              error={error}
            />

            <Input
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              mask="99/99"
              value={state.expiry}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="validThru"
              errorExpiry={errorExpiry}
            />

            <Input
              type="text"
              name="cvc"
              placeholder="CVC"
              mask="999"
              value={state.cvc}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              className="cvc"
              error={error}
            />
          </Inputs>
        </Payment>

        <Button type="submit" disabled={disabled}>
          FINALIZAR PAGAMENTO
        </Button>

      </form>

    </>
  );
}

const Payment = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 670px;

  margin-bottom: 20px;

  input{
      /* width: 340px;
      height: 50px;
      background: #ffffff;
      border: 2px solid #d5d5d5;
      border-radius: 5px;
      box-sizing: border-box;
      padding-left: 10px;
      margin-bottom: 5px;
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      } */

      ::placeholder{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: black;
      }
  }

  .validThru{
    width: 195px;
    margin-right: 5px;
  }

  .cvc{
    width: 140px;
  }

  
`;

const Inputs = styled.div`
  width: 340px;
`;

const Card = styled.div`

`;
