import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { setDate } from "date-fns";

const AddRoom = () => {
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  //   Date range handler==>
  const handleDates = (item) => {
    console.log(item);
    setDates(item.selection);
  };
  return (
    <div>
      <h1 className="text-5xl">Add room page</h1>
      {/* render a form */}
      <AddRoomForm dates={dates} handleDates={handleDates}></AddRoomForm>
    </div>
  );
};

export default AddRoom;
