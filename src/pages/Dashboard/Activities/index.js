import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ActivitiesInformations from '../../../components/ActivitiesInformation';
import OnlineActivitiesInformations from '../../../components/ActivitiesInformation/onlineActivities';
import { useEffect, useState } from 'react';
import { useUserActivity } from '../../../hooks/api/useActivity';

export default function Activities() {
  const { getUserActivities } = useUserActivity();
  const [ isOnline, setIsOnline ] = useState(false);

  useEffect( async() => {
    const data = await getUserActivities();
    const isRemote = data[0]?.isRemote;
    if(isRemote) {
      setIsOnline(true);
    }
  }, []);

  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      {isOnline ? <OnlineActivitiesInformations></OnlineActivitiesInformations> : <ActivitiesInformations />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
