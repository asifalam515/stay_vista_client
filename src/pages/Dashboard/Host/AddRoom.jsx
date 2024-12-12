import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { setDate } from "date-fns";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
const AddRoom = () => {
  const { user } = useAuth();
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

  //   form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = "";
    const from = "";
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const image_url = "function";
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  // another swal
  Swal.fire({
    title: "Custom animation with Animate.css",
    showClass: {
      popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
    },
    hideClass: {
      popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
    },
  });
  return (
    <div>
      <h1 className="text-5xl">Add room page</h1>
      {/* render a form */}
      <AddRoomForm
        dates={dates}
        handleDates={handleDates}
        handleSubmit={handleSubmit}
      ></AddRoomForm>
    </div>
  );
};

export default AddRoom;
