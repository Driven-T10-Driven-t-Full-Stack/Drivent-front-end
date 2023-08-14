export default function Days({ activityDays }){

    const uniqueDays = new Set();
    activityDays.map(e => {
        const day = dayjs(e.startedTime).format('YYYY-MM-DD'); // Extrai o dia da data
    
        if (uniqueDays.has(day)) {
          return null; // Pula a renderização se o dia já foi processado
        }
    
        uniqueDays.add(day); // Adiciona o dia ao conjunto
    });    
    return (
        <Day
          key={e.id}
          onClick={() => handleWeekDay(e)}
          backgound={selectDay.includes(e) ? '#FFD37D' : '#E0E0E0'}
        >
          {daysOfWeek[dayjs(e.startedTime).day()]} {dayjs(e.startedTime).format('DD/MM')}
        </Day>
      );
}