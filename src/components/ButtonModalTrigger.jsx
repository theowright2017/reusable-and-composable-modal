import ModalDemo from "./modals/Modal";
import { RoomEditModal } from "./modals/room/RoomEditModal";
import { formDataGenerator } from "@/api/dataGenerator";

export const ButtonModalTrigger = ({ name, multi }) => {
	return (
		<ModalDemo trigger={<button>{name}</button>} title={"Edit Room Modal"}>
			{(setIsOpen) => {
				const data = formDataGenerator();

				return (
					<RoomEditModal
						data={data}
						setIsOpen={setIsOpen}
						multi={multi}
						onSingleUpdate={(values) =>
							console.log("on single updates: ", values)
						}
						onMultiUpdate={(values) => console.log("on multi update:", values)}
					/>
				);
			}}
		</ModalDemo>
	);
};
