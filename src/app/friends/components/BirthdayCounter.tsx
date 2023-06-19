import React from 'react';
import { useTimer } from 'react-timer-hook';
import moment from 'moment';

interface TimerProps {
  expiryTimestamp: string;
}

function BirthdayCounter({ expiryTimestamp }: TimerProps) {
  const currentYear = moment().year();
  const expiryDate = moment(expiryTimestamp).year(currentYear).toDate();

  if (moment().isAfter(expiryDate)) {
    expiryDate.setFullYear(currentYear + 1);
  }

  const {
    seconds,
    minutes,
    hours,
    days
  } = useTimer({ expiryTimestamp: expiryDate });

  function convertToTwoDigit(num: number) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  return (
    <div className='text-sm md:text-lg'>
      {`${days}D ${hours}H ${convertToTwoDigit(minutes)}M ${convertToTwoDigit(seconds)}S`}
    </div>
  );
}

export default BirthdayCounter;
