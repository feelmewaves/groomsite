import { useState } from "react";
import EnrollBtn from "../ui/EnrollBtn/EnrollBtn";
import { AppointmentPopup, ThanksPopup } from "../AppointmentPopup";
import { Popup } from "../ui/Popup";

export function Enroll() {
  const [showPopup, setShowPopup] = useState(false);
	const [isPopupForm, setIsPopupForm] = useState(true);

	function togglePopup() {
		setShowPopup(prevState => !prevState);
		setIsPopupForm(true);
	}

	function handleChangePopup() {
		setIsPopupForm(false);
	}

  return (
    <>
      <EnrollBtn onClick={togglePopup}/>
      {
				showPopup && <Popup togglePopup={togglePopup}>
					{isPopupForm ? <AppointmentPopup handleChangePopup={handleChangePopup}/> : <ThanksPopup />}
				</Popup>
			}
    </>
  )
}