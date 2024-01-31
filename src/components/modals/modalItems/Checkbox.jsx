import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "../../../styles/Checkbox.module.scss";

const CheckboxDemo = (props) => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<Checkbox.Root
				className={styles.CheckboxRoot}
				defaultChecked
				id="c1"
				onCheckedChange={props.onChange}
				checked={props.checked}
			>
				<Checkbox.Indicator className={styles.CheckboxIndicator}>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label className={styles.Label} htmlFor="c1">
				{props.label}
			</label>
		</div>
	</form>
);

export default CheckboxDemo;
