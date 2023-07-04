import { useState, useEffect } from 'react';
import { format } from 'date-fns';

export default function Alarm() {
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);

  useEffect(() => {
    if (isAlarmSet) {
      const interval = setInterval(checkAlarm, 1000);
      return () => clearInterval(interval);
    }
  }, [isAlarmSet]);

  const handleAlarmChange = (event) => {
    const { value } = event.target;
    setAlarmTime(value);
  };

  const setAlarm = () => {
    if (alarmTime) {
      console.log('Alarm time:', alarmTime);
      setIsAlarmSet(true);
      setIsAlarmTriggered(false);
    } else {
      console.log('Invalid time value');
      setIsAlarmSet(false);
    }
  };

  const checkAlarm = () => {
    if (alarmTime) {
      const currentTime = new Date();
      const [hours, minutes] = alarmTime.split(':');
      const alarmDate = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        hours,
        minutes
      );

      if (currentTime >= alarmDate && !isAlarmTriggered) {
        console.log('Alarm triggered!');
        setIsAlarmTriggered(true);
      }
    }
  };

  const formattedAlarmTime = alarmTime ? format(new Date(`2000-01-01T${alarmTime}`), 'hh:mm a') : '';

  return (
	<>
	<center>
    <div>
      <h2>Set Alarm</h2>
      <input type="time" value={alarmTime} onChange={handleAlarmChange} />
	<br/><br/>
	
      <button onClick={setAlarm}>Set Alarm</button>

      {isAlarmSet && (
        <p>
          Alarm is set for: {formattedAlarmTime}
        </p>
      )}

      {isAlarmTriggered && (
        <p>Alarm time reached!</p>
      )}
    </div>

	</center>
	</>
  );
}
