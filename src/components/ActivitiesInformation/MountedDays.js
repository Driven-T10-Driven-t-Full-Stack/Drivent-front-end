import dayjs from 'dayjs';
import { Day, Days } from './styled.js';

export default function MountedDays({ activityDays, uniqueDays, selectDay, setSelectDay }) {
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  function filterActivitiesByDay(date) {
    const targetDay = dayjs(date, 'DD/MM');
    const activitiesOnTargetDay = activityDays.filter((activity) =>
      dayjs(activity.startedTime).isSame(targetDay, 'day')
    );

    activitiesOnTargetDay.sort((a, b) => dayjs(a.startedTime).diff(dayjs(b.startedTime)));

    return activitiesOnTargetDay;
  }

  function handleWeekDay(activity, day) {
    const dayActivities = filterActivitiesByDay(day);
    if (!selectDay.includes(activity)) {
      setSelectDay(dayActivities);
    } else {
      setSelectDay([]);
    }
  }
  return (
    <Days>
      {activityDays.map((e) => {
        const day = dayjs(e.startedTime).format('YYYY-MM-DD'); // Extrai o dia da data

        if (uniqueDays.has(day)) {
          return null; // Pula a renderização se o dia já foi processado
        }

        uniqueDays.add(day); // Adiciona o dia ao conjunto

        return (
          <Day
            key={e.id}
            onClick={() => handleWeekDay(e, dayjs(e.startedTime).format('DD/MM'))}
            backgound={selectDay.includes(e) ? '#FFD37D' : '#E0E0E0'}
          >
            {daysOfWeek[dayjs(e.startedTime).day()]} {dayjs(e.startedTime).format('DD/MM')}
          </Day>
        );
      })}
    </Days>
  );
}
