import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
    display: flex;
    text-align: center;
    div h2{
        margin-bottom: 8px;
        font-size: 19px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #7B7B7B;
    }
`;

export const Days = styled.div`
    margin-bottom: 40px;
    display: flex;
`;

export const Day = styled.div`
  width: 130px;
  height: 37px;
  background-color: ${props => props.background};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
`;

export const BlockActivities = styled.div`
    height: 450px;
    width: 295px;
    border: 1px solid #D7D7D7;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Activity = styled.div`
    width: 265px;
    height: 80px;
    margin-top: 8px;
    background-color: ${props => props.backgound};
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
`;

export const Description = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    >h2{
      font-size: 12px !important;
      color: #343434 !important;
    }
    p{
      font-size: 12px;
      font-weight: 400;
    }
`;

export const Line = styled.div`
    width: 1px;
    height: 65px;
    background-color: #CFCFCF;
    position: absolute;
    right: 65px;
`;

export const Icon = styled.div`
    width: 15%;
    cursor: pointer;
    p{
      font-size: 9px;
    }
`;

export const ErrorContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledError = styled(Typography)`
  && {
    max-width: 388px;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #8e8e8e;
  }
`;
