import React, { useState, useEffect } from 'react';

function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    };

    return date.toLocaleString(undefined, options);
  };

  return (
    
    <div>
      <h1>{formatDate(date)}</h1>
    </div>
  );
}

export default CurrentDate;
