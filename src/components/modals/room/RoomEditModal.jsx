import React from "react";

import { Form } from "@/components/form/FormEdit";

export const RoomEditModal = ({ setIsOpen, multiEdit }) => {
	function handleSaveProcess(formValues, event) {
		console.log("VALS", formValues);
		setIsOpen(false);
		event.preventDefault();
	}

	const id = "room-edit";

	const rules = {
		newOne: {
			minLength: 4,
			message: "Min Four Chars",
			required: true,
		},
		description: { required: "Neededeeed" },
	};

	console.log('RUL', rules["NewOne"])

	return (
		<Form handleSaveProcess={handleSaveProcess} id={id} multiEdit={multiEdit}>
			<section>
				<Form.Input name={"Name"} />
				<Form.Input name={"Description"} rules={rules["description"]} />
				<Form.Input name={"Amount"} type={"number"} />
				<Form.InputNew name={"New One"} rules={rules["newOne"]} />
				<Form.Select name={"Numbers"} options={["One", "Two", "Three"]} />
			</section>

			<Form.SaveButton id={id} />
		</Form>
	);
};
