import ModalDemo from "./modals/Modal";
import { RoomEditModal } from "./modals/room/RoomEditModal";

export const ButtonModalTrigger = ({ name }) => {
	return (
		<ModalDemo trigger={<button>{name}</button>} title={"Edit Room Modal"}>
			{(setIsOpen) => <RoomEditModal setIsOpen={setIsOpen} />}
		</ModalDemo>
	);
};
