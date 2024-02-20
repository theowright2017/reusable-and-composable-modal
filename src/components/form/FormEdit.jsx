import React, { createContext, useContext, useState } from "react";

import { useForm, useController, Controller, useWatch } from "react-hook-form";
import { TextInput } from "../modals/modalItems/TextInput";

import styles from "../../styles/Modal.module.scss";

export const FormContext = createContext();

const Form = (props) => {
	const { handleSaveProcess, id, multiEdit, values } = props;

	const {
		handleSubmit,
		control,
		formState,
		getFieldState,
		resetField,
		getValues,
	} = useForm({
		defaultValues: values,
	});

	const { dirtyFields } = formState;
	return (
		<FormContext.Provider
			value={{
				control,
				id,
				multiEdit,
				resetField,
				getFieldState,
				formState,
				getValues,
			}}
		>
			<form
				onSubmit={handleSubmit((data, event) => {
					handleSaveProcess(data, event, dirtyFields);
				})}
				id={id}
			>
				{props.children}
			</form>
		</FormContext.Provider>
	);
};

const ItemContent = (props) => (
	<React.Fragment>
		{props.children}
		{props.error && <span role="alert">{props.error.message}</span>}
	</React.Fragment>
);

// const FormInput = (props) => {
// 	const { control, id } = useContext(FormContext);
// 	const { name, rules = {}, type = "text" } = props;

// 	return (
// 		<Controller
// 			name={name}
// 			control={control}
// 			rules={rules}
// 			render={({
// 				field: { onChange, onBlur, value, ref },
// 				fieldState: { error },
// 			}) => {
// 				return (
// 					<ItemContent error={error}>
// 						<TextInput
// 							id={id}
// 							label={name}
// 							changeHandler={onChange}
// 							value={value}
// 							type={type}
// 						/>
// 					</ItemContent>
// 				);
// 			}}
// 		/>
// 	);
// };

const FormInputNew = (props) => {
	const { control, id } = useContext(FormContext);
	const { name, rules = {}, disabled } = props;

	const { field, fieldState, formState } = useController({
		name,
		control,
		rules: rules,
		disabled: disabled,
	});

	const { onChange, value } = field;
	const { error } = fieldState;

	return (
		<ItemContent error={null}>
			<TextInput
				label={name}
				changeHandler={onChange}
				value={value}
				disabled={field.disabled}
			>
				{props.children}
			</TextInput>
			{error?.minLength && error.minLength < 4 && (
				<span role="alert">{error.message}</span>
			)}
			{error?.type === "required" && <span role="alert">{error.message}</span>}
		</ItemContent>
	);
};

const FormSelect = (props) => {
	const { control, id } = useContext(FormContext);
	const { name, rules = {}, options, disabled } = props;

	const { field, fieldState, formState } = useController({
		name,
		control,
		rules: rules,
		disabled: disabled,
	});

	const { onChange, value } = field;
	const { error } = fieldState;

	return (
		<ItemContent error={error}>
			<label value={name}>
				{props.children}
				<select
					defaultValue={value}
					onChange={onChange}
					disabled={props.disabled}
				>
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
};

// const FormSelect = (props) => {
// 	const { control, id } = useContext(FormContext);
// 	const { name, options, rules = {} } = props;

// 	return (
// 		<Controller
// 			name={name}
// 			control={control}
// 			rules={rules}
// 			disabled={props.disabled}
// 			render={({
// 				field: { onChange, onBlur, value, ref },
// 				fieldState: { error },
// 			}) => {
// 				return (
// 					<ItemContent error={error}>
// 						<label value={name}>
// 							{props.children}
// 							<select
// 								defaultValue={value}
// 								onChange={onChange}
// 								disabled={props.disabled}
// 							>
// 								{options.map((opt) => (
// 									<option key={opt} value={opt}>
// 										{opt}
// 									</option>
// 								))}
// 							</select>
// 						</label>
// 						{error && <span role="alert">{error.message}</span>}
// 					</ItemContent>
// 				);
// 			}}
// 		/>
// 	);
// };

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

const FormSelectConsumer = ({provider, options, ...rest}) => {
	const { control, id, getValues, formState } = useContext(FormContext);
	const value = useWatch({
		control,
		name: provider,
	});

	// *** doesn't cascade all the way down yet

	const compare = value || getValues(provider);

	const updated = options
		.filter((item) => item[provider.toLowerCase()] === compare)
		.map((item) => item.name);
	return (
		<FormSelect options={updated} {...rest}>
			{rest.children}
		</FormSelect>
	);
};

Form.Input = FormInputNew;
// Form.InputNew = FormInputNew;
Form.Select = FormSelect;
Form.SelectConsumer = FormSelectConsumer;
Form.SaveButton = SaveButton;

export { Form };
