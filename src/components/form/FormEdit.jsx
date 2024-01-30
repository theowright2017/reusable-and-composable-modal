import React, { createContext, useContext } from "react";

import { useForm, useController, Controller } from "react-hook-form";
import { TextInput } from "../modals/modalItems/TextInput";

import styles from "../../styles/Modal.module.scss";

const FormContext = createContext();

const Form = (props) => {
	const { handleSaveProcess, id, multiEdit } = props;

	const { handleSubmit, control } = useForm();
	return (
		<FormContext.Provider value={{ control, id }}>
			<form onSubmit={handleSubmit(handleSaveProcess)} id={id}>
				{props.children}
			</form>
		</FormContext.Provider>
	);
};

const ItemContent = (props) => {
	const { error } = props;
	return (
		<React.Fragment>
			{props.children}
			{error && <span role="alert">{error.message}</span>}
		</React.Fragment>
	);
};

const FormInput = (props) => {
	const { control, id } = useContext(FormContext);
	const { name, rules = {}, type = "text" } = props;

	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error },
			}) => {
				return (
					<ItemContent error={error}>
						<TextInput
							id={id}
							label={name}
							changeHandler={onChange}
							value={value}
							type={type}
						/>
					</ItemContent>
				);
			}}
		/>
	);
};

const FormInputNew = (props) => {
	const { control, id } = useContext(FormContext);
	const { name, rules = {} } = props;

	const { field, fieldState, formState } = useController({
		name,
		control,
		rules: rules,
	});

	const { onChange, value } = field;
	const { error } = fieldState;
	console.log("rules", error);

	return (
		<ItemContent error={null}>
			<TextInput label={name} changeHandler={onChange} value={value} />
			{error?.minLength && error.minLength < 4 && (
				<span role="alert">{error.message}</span>
			)}
			{error?.type === "required" && <span role="alert">{error.message}</span>}
		</ItemContent>
	);
};

const FormSelect = (props) => {
	const { control, id } = useContext(FormContext);
	const { name, options, rules = {} } = props;

	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({
				field: { onChange, onBlur, value, ref },
				fieldState: { error },
			}) => {
				return (
					<ItemContent error={error}>
						<label value={name}>
							<select defaultValue={value} onChange={onChange}>
								{options.map((opt) => (
									<option key={opt} value={opt}>
										{opt}
									</option>
								))}
							</select>
						</label>
						{error && <span role="alert">{error.message}</span>}
					</ItemContent>
				);
			}}
		/>
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

Form.Input = FormInput;
Form.InputNew = FormInputNew;
Form.Select = FormSelect;
Form.SaveButton = SaveButton;

export { Form };
