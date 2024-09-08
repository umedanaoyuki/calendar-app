import { getMonth } from "date-fns";
import { CalendarHeader } from "../components/organisms/CalendarHeader";
import { CalendarBody } from "../components/organisms/CalendarBody";
import { useCalendar } from "../hooks/useCalendar";
import { useState } from "react";
import { CalendarNav } from "../components/organisms/CalendarNav";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { dateList } = useCalendar({ currentDate: currentDate });

  return (
    <>
      <h1 className=" font-bold text-3xl mb-5">{`${
        getMonth(currentDate) + 1
      }月`}</h1>
      <CalendarNav />
      <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
        <CalendarHeader />
        <CalendarBody currentDate={currentDate} dateList={dateList} />
      </table>
    </>
  );
};
