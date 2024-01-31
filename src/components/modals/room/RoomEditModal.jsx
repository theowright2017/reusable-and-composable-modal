import React from "react";

import { Form } from "@/components/form/FormEdit";
import { MultiForm } from "@/components/form/MultiFormEditLayer";

export const RoomEditModal = ({ setIsOpen, multi, ...rest }) => {
	function handleSaveProcess(formValues, event, dirtyFields) {
		if (multi) {
			const allValuesMap = new Map(Object.entries(formValues));

			const editedValuesMap = new Map();

			Object.keys(dirtyFields).forEach((edited) => {
				const value = allValuesMap.get(edited);

				if (value) {
					editedValuesMap.set(edited, value);
				} else {
					return;
				}
			});

			rest.onMultiUpdate(Object.fromEntries(editedValuesMap));
		} else {
			rest.onSingleUpdate(formValues);
		}

		setIsOpen(false);
		event.preventDefault();
	}

	const id = "room-edit";

	const rules = {
		// newOne: {
		// 	minLength: 4,
		// 	message: "Min Four Chars",
		// 	required: true,
		// },
		// description: { required: "Neededeeed" },
	};

	const defaultValues = {
		MUltiBOI: "YERRRP",
	};

	return (
		<MultiForm.Form
			handleSaveProcess={handleSaveProcess}
			id={id}
			multiEdit={multi}
			values={defaultValues}
		>
			<section>
				{/* 
				<MultiForm.Input name={"MUltiBOI"} />
				<Form.InputNew name={"New One"} rules={rules["newOne"]} />
				<Form.Select name={"Numbers"} options={["One", "Two", "Three"]} />
				<MultiForm.Select name={"Multi Numbers"} options={["12", "13", "14"]} /> */}
				<MultiForm.GroupEditInput name={"one"} groupName={"group"} />
				<MultiForm.GroupEditInput name={"two"} groupName={"group"} />
				<MultiForm.Input name={"MUltiBOI"} />
			</section>

			<Form.SaveButton id={id} />
		</MultiForm.Form>
	);
};
