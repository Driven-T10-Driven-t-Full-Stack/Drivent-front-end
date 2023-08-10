import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import CertificateInformation from '../../../components/CertificateInformation';
import { useState } from 'react';
import ErrorMsg from '../../../components/CertificateInformation/ErrMsg';

export default function Certificate() {
  const [readyCertificate, setReadyCertificate] = useState(true);
  return (
    <>
      <StyledTypography variant='h4'>Certificado</StyledTypography>
      {readyCertificate ? <CertificateInformation/> : <ErrorMsg /> } 
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
