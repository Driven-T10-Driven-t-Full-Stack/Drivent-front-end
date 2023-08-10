import { CheckmarkCircleOutline, CloseCircleOutline, EnterOutline } from 'react-ionicons';
import { useState } from 'react';
import { useEffect } from 'react';
import { useActivityGet, useActivityPost, useGetUserActivity } from '../../hooks/api/useActivity';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { Days, Container, Day, BlockActivities, Activity, Description, Line, Icon } from './styled';

export default function ActivitiesInformations() {
  const idActivitiesUser = [];
  const [click, setClick] = useState(false);
  const [activitiesUser, setActivityUser] = useState([]);
  const [activityDays, setActivityDays] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [principal, setPrincipal] = useState([]);
  const [lateral, setLateral] = useState([]);
  const [workshop, setWorkshop] = useState([]);
  const [selectDay, setSelectDay] = useState([]);
  const { getAllActivities } = useActivityGet();
  const { getUserActivities } = useGetUserActivity();
  const { postActivities } = useActivityPost();
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  useEffect(async() => {
    const activitiesData = await getAllActivities();
    const activitiesUser = await getUserActivities();
    for (let i = 0; i < activitiesUser.length; i++) {
      const el = activitiesUser[i];
      idActivitiesUser.push(el.activityId);
    };
    setActivityUser(idActivitiesUser);
    setActivityDays(activitiesData);
    setSelectDay([]);
    setRefresh(false);
  }, [refresh]);

  useEffect(() => {
    setPrincipal(selectDay.filter(e => e.local === 'PRINCIPAL'));
    setLateral(selectDay.filter(e => e.local === 'LATERAL'));
    setWorkshop(selectDay.filter(e => e.local === 'WORKSHOP'));
  }, [selectDay]);

  function shakeButton() {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 800);
  };

  function handleWeekDay(activity) {
    if(!selectDay.includes(activity)) {
      setSelectDay([activity]);        
    }else{
      setSelectDay(selectDay.filter(e => e !== activity));  
    }
  }

  function subscribeActivity(activityId) {
    try{
      postActivities({ activityId });
      toast('Sua vaga foi confirmada!');
      setRefresh(true);
    }catch{
      toast('Erro ao se inscrever');
    }
  }

  return (
    <>
      <Days>
        {activityDays.map(e => (
          <Day key={e.id} onClick={() => handleWeekDay(e)} backgound={selectDay.includes(e) ? '#FFD37D' : '#E0E0E0'}>
            {daysOfWeek[dayjs(e.startedTime).day()]} {dayjs(e.startedTime).format('DD/MM')}
          </Day>
        ))}
      </Days>
      <Container>
        <div className="Principal">
          <h2>Auditório Principal</h2>
          <BlockActivities>
            {principal.map(e => (
              <Activity key={e.id} backgound={activitiesUser.includes(e.id) ? '#D0FFDB' : '#F1F1F1'}>
                <Description>
                  <h2><strong>{e.name}</strong></h2>
                  <p>{dayjs(e.startedTime).format('HH:mm')} - {dayjs(e.finishedTime).format('HH:mm')}</p>
                </Description>
                <Line />
                <Icon>
                  {activitiesUser.includes(e.id) ? <>
                    <CheckmarkCircleOutline
                      color={'#078632'} 
                      height="250px"
                      width="250px"
                    />
                    <p style={{ color: '#078632' }}>Inscrito</p>
                  </> : e.capacity <= 0 ? <>
                    <CloseCircleOutline
                      onClick={shakeButton}
                      color={'#ff0318'}
                      shake={click}
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#ff0318' }}>Esgotado</p>
                  </> : <>
                    <EnterOutline
                      onClick={() => subscribeActivity(e.id)}
                      color={'#078632'}
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#078632' }}>{e.capacity} vagas</p>
                  </>}
                </Icon>
              </Activity>
            ))}
                
          </BlockActivities>
        </div>
        <div className="Lateral">
          <h2>Auditório Lateral</h2>
          <BlockActivities>
            {lateral.map(e => (
              <Activity key={e.id} backgound={activitiesUser.includes(e.id) ? '#D0FFDB' : '#F1F1F1'}>
                <Description>
                  <h2><strong>{e.name}</strong></h2>
                  <p>{dayjs(e.startedTime).format('HH:mm')} - {dayjs(e.finishedTime).format('HH:mm')}</p>
                </Description>
                <Line />
                <Icon>
                  {activitiesUser.includes(e.id) ? <>
                    <CheckmarkCircleOutline
                      onClick={shakeButton}
                      beat={click}
                      color={'#078632'} 
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#078632' }}>Inscrito</p>
                  </> : e.capacity <= 0 ? <>
                    <CloseCircleOutline
                      onClick={shakeButton}
                      color={'#ff0318'}
                      shake={click}
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#ff0318' }}>Esgotado</p>
                  </>: <>
                    <EnterOutline
                      onClick={() => subscribeActivity(e.id)}
                      color={'#078632'}
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#078632' }}>{e.capacity} vagas</p>
                  </>}
                </Icon>
              </Activity>
            ))}
          </BlockActivities>
        </div>
        <div className="Workshop">
          <h2>Sala de Workshop</h2>
          <BlockActivities>
            {workshop.map(e => (
              <Activity key={e.id} backgound={activitiesUser.includes(e.id) ? '#D0FFDB' : '#F1F1F1'}>
                <Description>
                  <h2><strong>{e.name}</strong></h2>
                  <p>{dayjs(e.startedTime).format('HH:mm')} - {dayjs(e.finishedTime).format('HH:mm')}</p>
                </Description>
                <Line />
                <Icon>
                  {activitiesUser.includes(e.id) ? <>
                    <CheckmarkCircleOutline
                      onClick={shakeButton}
                      beat={click}
                      color={'#078632'} 
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#078632' }}>Inscrito</p>
                  </> : e.capacity <= 0 ? <>
                    <CloseCircleOutline
                      onClick={shakeButton}
                      color={'#ff0318'}
                      shake={click}
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#ff0318' }}>Esgotado</p>
                  </>: <>
                    <EnterOutline
                      onClick={() => subscribeActivity(e.id)}
                      color={'#078632'}
                      height="30px"
                      width="30px"
                    />
                    <p style={{ color: '#078632' }}>{e.capacity} vagas</p>
                  </>}
                </Icon>
              </Activity>
            ))}
          </BlockActivities>
        </div>
      </Container>
    </>
  );
}

