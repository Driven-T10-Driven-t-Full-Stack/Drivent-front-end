import { useState, useEffect } from 'react';
import { CheckmarkCircleOutline } from 'react-ionicons';
import * as styled from './styled';
import { useActivity } from '../../hooks/api/useActivity';
import dayjs from 'dayjs';

export default function OnlineActivitiesInformations() {
  const [activities, setActivities] = useState([]);
  const { getAllActivities, activityError } = useActivity();

  useEffect(async() => {
    const data = await getAllActivities();
    setActivities(data);
  }, []);
  
  if (activityError) {
    return (
      <styled.ErrorContainer>
        <styled.StyledError>Você precisa ter confirmado o pagamento antes de fazer a escolha de atividades</styled.StyledError>
      </styled.ErrorContainer>
    );
  }

  return (
    <>
      <styled.Container style={ { marginTop: '50px' } } >
        <div className="Principal"><h2>Online</h2><styled.BlockActivities>{activities.map((activity, index) => activity.isRemote? <styled.Activity key={index} style={ { backgroundColor: '#D0FFDB' } }><styled.Description><h2><strong>{activity.name}</strong></h2><p>({dayjs(activity.startedTime).format('DD/MM/YYYY')}) {dayjs(activity.startedTime).format('HH:mm')}h - {dayjs(activity.finishedTime).format('HH:mm')}h
        </p>
        </styled.Description>
        <styled.Line />
        <styled.Icon><CheckmarkCircleOutline color={'#078632'} height="25px" width="25px" /><p style={{ color: '#078632' }}>Inscrito</p></styled.Icon>
        </styled.Activity> : <div key={index}></div>)}
        </styled.BlockActivities>
        </div>
      </styled.Container>
    </>
  );
}
