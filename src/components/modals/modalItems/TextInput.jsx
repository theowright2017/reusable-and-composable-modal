import React from "react";
import * as Label from "@radix-ui/react-label";

const ModalTextInput = React.forwardRef((props, ref) => {
	return <TextInput ref={ref} {...props} />;
});

const TextInput = (props) => {
	const { id, label, changeHandler, type, disabled, value } = props;

	return (
		<div
			style={{
				display: "flex",
				padding: "5px 20px",
				// flexWrap: "wrap",
				gap: 15,
				alignItems: "center",
			}}
		>
			<Label.Root className="LabelRoot" htmlFor={id}>
				{label}
			</Label.Root>

			{/* maybe render something between label and input, i.e checkbox */}
			{props.children}

			<input
				className="Input"
				type={type}
				id={id}
				placeholder={label}
				onChange={changeHandler}
				disabled={disabled}
				value={value}
			/>
		</div>
	);
};

ModalTextInput.displayName = "ModalTextInput";

export { ModalTextInput, TextInput };
