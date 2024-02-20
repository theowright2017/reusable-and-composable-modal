import React from "react";

import { Form } from "@/components/form/FormEdit";
import { MultiForm } from "@/components/form/MultiFormEditLayer";

export const RoomEditModal = ({ data, setIsOpen, multi, ...rest }) => {
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
		Campus: 'Central',
		Building: 'A Block'
	};

	return (
		<MultiForm.Form
			handleSaveProcess={handleSaveProcess}
			id={id}
			multiEdit={multi}
			values={defaultValues}
		>
			<section
				id={"section-one"}
				style={{ display: "flex", flexDirection: "row" }}
			>
				<section id={"left"}>
					<MultiForm.Input name={"Code"} />
					<MultiForm.Input name={"Name"} />
					<MultiForm.GroupEditSelect
						name={"Department"}
						groupName={"location"}
						options={data.departmentOptions}
					/>
					<MultiForm.GroupEditSelect
						name={"Campus"}
						groupName={"location"}
						options={data.campusOptions}
					/>
					<MultiForm.GroupEditSelectConsumer
						name={"Building"}
						groupName={"location"}
						options={data.buildingOptions}
						provider={'Campus'}
					/>
					<MultiForm.GroupEditSelectConsumer
						name={"Floor"}
						groupName={"location"}
						options={data.floorOptions}
						provider={'Building'}
					/>
					{/* <MultiForm.Check name={'Virtual'} /> */}
					<MultiForm.Input name={"Area (m2)"} type={"number"} />
					<MultiForm.Input name={"Carbon Cost"} type={"number"} />
					{/* <MultiForm.Check name={'Reserved'} /> */}
				</section>
				<section id={"right"}>
					<MultiForm.Input name={"Talk"} type={"number"} />
					<MultiForm.Input name={"Seminar"} type={"number"} />
					<MultiForm.Input name={"Laboratory"} type={"number"} />
					<MultiForm.Input name={"Practical"} type={"number"} />
					<MultiForm.Input name={"Workshop"} type={"number"} />
				</section>
			</section>

			<Form.SaveButton id={id} />
		</MultiForm.Form>
	);
};

// const 
