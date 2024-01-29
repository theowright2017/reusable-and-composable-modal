import React from "react";

import { useForm, Controller } from "react-hook-form";

import styles from "../../../styles/Modal.module.scss";
import { TextInput } from "../modalItems/TextInput";

export const RoomEditModal = ({ setIsOpen }) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm();

	function handleSaveProcess(formValues, event) {
		setIsOpen(false);
		event.preventDefault();
	}

	const id = "room-edit";
	const required = "required";

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit(handleSaveProcess)} id={id}>
				<SplitSection>
					<Left id={id} control={control} errors={errors} />
					<Right id={id} control={control} errors={errors} />
				</SplitSection>
			</form>
			<SaveButton id={id} />
		</React.Fragment>
	);
};

const SplitSection = (props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				width: "100%",
				justifyContent: "space-between",
				border: '1px solid black'
			}}
		>
			{props.children}
		</div>
	);
};

const Left = ({ control, errors, id }) => {
	return (
		<div>
			<Controller
				control={control}
				disabled={false}
				rules={{
					required: "Needed",
					maxLength: {
						value: 3,
						message: "too long",
					},
				}}
				name={"Name"}
				render={({ field: { onChange, onBlur, value, ref } }) => {
					return (
						<React.Fragment>
							<TextInput
								id={id}
								label={"Name"}
								changeHandler={onChange}
								value={value}
							/>
							{errors.Name && <span role="alert">{errors.Name.message}</span>}
						</React.Fragment>
					);
				}}
			/>
			<Controller
				control={control}
				name={"Department"}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<TextInput
						id={id}
						label={"Department"}
						changeHandler={onChange}
						value={value}
					/>
				)}
			/>
		</div>
	);
};

const Right = ({ control, errors, id }) => {
	return (
		<div>
			<Controller
				control={control}
				name={"Details"}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<TextInput
						id={id}
						label={"Details"}
						changeHandler={onChange}
						value={value}
					/>
				)}
			/>
		</div>
	);
};

const SaveButton = ({ id }) => (
	<div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
		<button
			className={`${styles.Button} ${styles.green}`}
			type={"submit"}
			id={id}
			form={id}
		>
			Save changes
		</button>
	</div>
);
