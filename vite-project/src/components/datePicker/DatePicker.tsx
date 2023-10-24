import { useEffect, useState } from "react";
import "./DatePicker.css";

interface DatePickerProps {
  setDate: (date: Date) => void;
}

export const DatePicker = ({}: DatePickerProps) => {
  const months = [
    "Januar",
    "Februar",
    "Mars",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "Augusr",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const todayThisTime = new Date();
  const today = new Date(
    todayThisTime.getFullYear(),
    todayThisTime.getMonth(),
    todayThisTime.getDate()
  );

  const [selectedDay, setSelectedDay] = useState(new Date().getTime());
  const [monthOffset, setMonthOffset] = useState(0);
  const [days, setDays] = useState(
    getDaysToDisplay(new Date(today.getFullYear(), today.getMonth()))
  );

  useEffect(() => {
    setDays(
      getDaysToDisplay(
        new Date(today.getFullYear(), today.getMonth() + monthOffset)
      )
    );
  }, [monthOffset]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th colSpan={8}>
              <div className="header-wrapper">
                <div
                  className="arrow left-arrow"
                  onClick={() => setMonthOffset((pre) => pre - 1)}
                />

                <h2 className="h2">{months[days[2][2].getMonth() % 12]}</h2>

                <div
                  className="arrow right-arrow"
                  onClick={() => setMonthOffset((pre) => pre + 1)}
                />
              </div>
            </th>
          </tr>
          <tr>
            <th>Uke</th>
            <th>Ma</th>
            <th>Ti</th>
            <th>On</th>
            <th>To</th>
            <th>Fr</th>
            <th>Lø</th>
            <th>Sø</th>
          </tr>
        </thead>
        <tbody>
          {days.map((r, i) => (
            <tr key={i}>
              <th>{getWeekNumber(r[0])}</th>
              {r.map((e, j) => (
                <td
                  key={j}
                  className={
                    e.getTime() == selectedDay && e.getTime() == today.getTime()
                      ? "selected-date today td"
                      : e.getTime() == selectedDay
                      ? "selected-date td"
                      : e.getTime() == today.getTime()
                      ? "today td"
                      : e.getMonth() != days[2][2].getMonth()
                      ? "notThisMonth td"
                      : "td"
                  }
                  onClick={
                    e.getMonth() == days[2][2].getMonth()
                      ? () => setSelectedDay(e.getTime())
                      : () =>
                          setMonthOffset(
                            (pre) => pre + e.getMonth() - days[2][2].getMonth()
                          )
                  }
                >
                  {e.getDate()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getWeekNumber = (d: Date): number => {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return weekNo;
};

const getDaysToDisplay = (firstDayOfTheMonth: Date): Date[][] => {
  const dates: Date[][] = [];
  const firstDayOfTheNextMonth = new Date(
    firstDayOfTheMonth.getFullYear(),
    firstDayOfTheMonth.getMonth() + 1
  );

  let iteratorDay = new Date(
    firstDayOfTheMonth.getFullYear(),
    firstDayOfTheMonth.getMonth(),
    firstDayOfTheMonth.getDate()
  );

  if (getDayname(firstDayOfTheMonth) !== "Mon") {
    while (getDayname(iteratorDay) !== "Mon") {
      iteratorDay = new Date(
        iteratorDay.getFullYear(),
        iteratorDay.getMonth(),
        iteratorDay.getDate() - 1
      );
    }
  }

  while (iteratorDay < firstDayOfTheNextMonth) {
    let week: Date[] = [];

    for (let i = 0; i < 7; i++) {
      week.push(iteratorDay);
      iteratorDay = new Date(
        iteratorDay.getFullYear(),
        iteratorDay.getMonth(),
        iteratorDay.getDate() + 1
      );
    }

    dates.push(week);
  }

  return dates;
};

const getDayname = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { weekday: "short" };
  const dayName: string = date.toLocaleDateString("en-US", options);
  return dayName;
};
