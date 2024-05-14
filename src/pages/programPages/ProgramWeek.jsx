import { week } from "../../components/date";

const ProgramWeek = () => {
  return (
    <div>
      <ul>
        {week.map((dayDate, index) => {
          return (
            <li key={index}>
              {dayDate.day}, {dayDate.date}.{dayDate.month}.{dayDate.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProgramWeek;
