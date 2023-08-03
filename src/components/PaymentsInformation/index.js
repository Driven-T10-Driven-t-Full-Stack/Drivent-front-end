import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useEffect, useState } from 'react';
import Input from './styled';
import Button from '../Form/Button';
import axios from 'axios';

export default function PaymentsInformation() {
  const [dataTicket, setDataTicket] = useState({});
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  useEffect(() => {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/tickets`);
    console.log(promise);
  }, []);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  
  function submitPayment() {
    console.log('enviar');
  }

  return (
    <>
      <StyledTypography variant='h6'>Ingresso escolhido</StyledTypography>
      <BoxConfirmation>
        <Typography variant='subtitle1' component='div' style={{ color: '#454545' }}> Presencial + com Hotel </Typography>
        <Typography variant='body2' component='div' style={{ color: '#898989' }}> R$ 600 </Typography>
      </BoxConfirmation>
      <StyledTypography variant='h6'>Pagamento</StyledTypography>

      <form onSubmit={submitPayment}>
        <Payment>
          <Card>
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
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
            />
            <Typography variant='subtitle1' component='div' style={{ color: '#A9A9A9' }}> E.g.: 49..., 51..., 36..., 37... </Typography>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
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
            />
          </Inputs>
        </Payment>

        <Button type="submit" >
        FINALIZAR PAGAMENTO
        </Button>

      </form>
      
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 40px!important;
  color:#8E8E8E;
`;

const BoxConfirmation = styled.div`
    width: 290px;
    height: 108px;
    background-color: #FFEED2;
    border-radius: 20px;
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

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
