import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
export default function Home() {
  // DATE 1:
  const [date, setDate] = useState("");
  // const [date, setDate] = useState(new Date());
  console.log(date); //Wed May 31 2023 12:22:18 GMT+0300 (East Africa Time)

  // DATE 2: dealing with a date range
  const [date2, setDate2] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  // DATE 3: Time included
  const [date3, setDate3] = useState(new Date());



  return (
    <div className="flex justify-between mt-8 w-full h-screen">
      {/* DATE 1 */}
      <div>
        <p>DATE 1: Simple date picker</p>
        <DatePicker
          placeholderText={"mm/dd/yyyy"}
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>

      {/* DATE 2 */}
      <div>
        <p>DATE 2: Range Date Picker</p>
        <DatePicker
          selected={date2}
          onChange={handleChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange={true}
        />
      </div>

      {/* DATE 3: With time added */}
      <div>
        <p>With Time added</p>
        <DatePicker
          showTimeSelect={true}
          minTime={new Date(0, 0, 0, 8, 0)}
          maxTime={new Date(0, 0, 0, 16, 30)}
          selected={date3}
          onChange={(date) => setDate3(date)}
          dateFormat="MMMM d, yyyy h:mmaa"
        />
      </div>
    </div>
  );
}
