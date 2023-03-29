import React, { useState } from 'react';

function Calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const prevMonth = () => {
    if ((month % 12) == 0) {
        setYear((prevYear) => prevYear - 1);
        setMonth(11);
    } else {
        setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const nextMonth = () => {
    if ((month % 12) == 11) {
        setYear((prevYear) => prevYear + 1);
        setMonth(0);
    } else {
        setMonth((prevMonth) => prevMonth + 1);
    }
  };

  const daysInMonth = getDaysInMonth(month, year);
  const firstDayOfMonth = getFirstDayOfMonth(month, year);
  const rows = [];

  let cells = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (day <= daysInMonth && (i > 0 || j >= firstDayOfMonth)) {
        cells.push(
          <td key={day} style={day === new Date().getDate() && month === new Date().getMonth() ? styles.today : styles.newdate}>
            {day}
          </td>
        );
        day++;
      } else {
        cells.push(<td key={`${i}-${j}`} style={styles.inactive}></td>);
      }
    }
    rows.push(<tr key={i}>{cells}</tr>);
    cells = [];
    if (day > daysInMonth) {
      break;
    }
  }

  return (
    <div style={styles.calendar}>
      <div style={styles.header}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>{`${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(year, month))} ${year}`}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr style={styles.weekdays}>
            {daysInWeek.map((day) => (
              <th key={day} style={styles.headCell}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

const styles = {
  calendar: {
    fontFamily: 'Arial, sans-serif',
    // maxWidth: '600px',
    maxWidth: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: '#34a853',
    color: '#fff',
    fontSize: '18px',
    border: '5px solid black',
    maxHeight: '45px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '5px solid black',
    borderTop: 'none',
  },
  headCell: {
    backgroundColor: '#34a853',
    color: '#fff',
    padding: '10px',
    alignItems: 'center',
    fontSize: '17px',
  },
  inactive: {
    backgroundColor: 'rgb(200, 183, 166)',
    color: '#fff',
  },
  today: {
    backgroundColor: '#34a853',
    color: '#fff',
    padding: '5px',
    fontSize: '14px',
  },
  newdate: {
    padding: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    border: '1px solid black',
  },
  weekdays: {
    border: '1px solid black',
  }
};

export default Calendar;
