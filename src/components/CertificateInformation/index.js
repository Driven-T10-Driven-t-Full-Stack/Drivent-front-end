import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../Form/Button';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function CertificateInformation() {
  const gerarCertificado = async() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const token = userData.token;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
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
      toast('Algo inesperado aconteceu!');
    }
  };
  return (
    <>
      <StyledTypography variant="h6" style={{ marginBottom: '15px' }}>
        Clique no botão abaixo para gerar seu certificado de participação.
      </StyledTypography>
      <Button onClick={gerarCertificado}>Gerar Certificado</Button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-top: 40px !important;
  color: #8e8e8e;
`;
