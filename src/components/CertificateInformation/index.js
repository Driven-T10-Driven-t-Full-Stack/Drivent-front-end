import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../Form/Button';
import axios from 'axios';

export default function CertificateInformation() {
  const gerarCertificado = async() => {
    try {
      const config = {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY5MTA4OTQ4MH0.pwkirML5TPVnG6X4RFYKZHQzNiuMnAW9UeuNkHC9sEk'
        },
        responseType: 'arraybuffer', // Alterado para arraybuffer
      };
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/certificate`, config);
      // Crie um blob a partir da resposta
      const contentType = response.headers['content-type'];
      const blob = new Blob([response.data], { type: contentType });
  
      // Crie uma URL temporária para o blob
      const url = URL.createObjectURL(blob);
  
      // Abra uma nova aba do navegador com o visualizador de PDF
      window.open(url, '_blank');
  
      // Limpe a URL temporária
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao gerar certificado:', error);
    }
  };
  return(
    <>
      <StyledTypography variant='h6' style={{ marginBottom: '15px' }}>Clique no botão abaixo para gerar seu certificado de participação.</StyledTypography>
      <Button onClick={gerarCertificado}>
        Gerar Certificado
      </Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 40px!important;
  color:#8E8E8E;
`;
