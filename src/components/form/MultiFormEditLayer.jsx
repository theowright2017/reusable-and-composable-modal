import React, { useState, useContext } from "react";
import { Form, FormContext } from "./FormEdit";
import CheckboxDemo from "../modals/modalItems/Checkbox";
import { useWatch, useController } from "react-hook-form";

const MultiForm = {};

/**
 *  Works as a HOC
 *  - Takes an existing component (Input)
 *  - Renders it as a child of a separate component (MultiEdit)
 *  - Passes the props from MultiEdit into Input
 *
 *  Used to add a checkbox and disabled prop, specifically
 *  for multi edit form
 */
const multiEditWrapper = (ComponentType) => {
	return function MultiEdit(props) {
		const { multiEdit } = useContext(FormContext);
		const [canEdit, setCanEdit] = useState(!multiEdit);

		return (
			<ComponentType {...props} disabled={!canEdit}>
				{multiEdit && (
					<CheckboxDemo
						checked={canEdit}
						onChange={() => setCanEdit((cur) => !cur)}
					/>
				)}
			</ComponentType>
		);
	};
};

const multiEditGroupWrapper = (Componet) => {
	return function MultiEdit(props) {
		const { multiEdit, control } = useContext(FormContext);

		const { field } = useController({
			name: props.groupName,
			control,
			defaultValue: false,
		});

		const editable = useWatch({
			control,
			name: props.groupName,
			defaultValue: false,
		});

		return (
			<Componet {...props} disabled={!editable}>
				{multiEdit && (
					<CheckboxDemo
						checked={editable}
						onChange={(e) => {
							console.log("E::", e);
							field.onChange(e);
						}}
					/>
				)}
			</Componet>
		);
	};
};

MultiForm.Form = Form;
MultiForm.Input = multiEditWrapper(Form.InputNew);
MultiForm.Select = multiEditWrapper(Form.Select);
// MultiForm.Grouping = (items) => console.log("ITEMS", items);
MultiForm.GroupEditInput = multiEditGroupWrapper(Form.InputNew);
export { MultiForm };
