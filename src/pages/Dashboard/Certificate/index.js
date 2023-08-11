import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import CertificateInformation from '../../../components/CertificateInformation';
import { useEffect, useState } from 'react';
import ErrorMsg from '../../../components/CertificateInformation/ErrMsg';
import { getEventInfo } from '../../../services/eventApi';
import dayjs from 'dayjs';

export default function Certificate() {
  const [readyCertificate, setReadyCertificate] = useState(false);

  async function data() {
    const data = await getEventInfo();
    const today = dayjs().format('YYYY-MM-DD');
    const tomorrow = dayjs(data.endsAt).add(1, 'day').format('YYYY-MM-DD');
    if(dayjs(tomorrow).isSame(today)) {
      setReadyCertificate(true);
    } else {
      setReadyCertificate(false);
    }
  }

  useEffect(() => {
    data();
  }, []);

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
