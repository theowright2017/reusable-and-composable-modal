import React, { useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ButtonModalTrigger } from "@/components/ButtonModalTrigger";
import CheckboxDemo from "@/components/modals/modalItems/Checkbox";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [multi, setMulti] = useState(false);
	return (
		<React.Fragment>
			<CheckboxDemo onChange={() => setMulti((cur) => !cur)} checked={multi} />
			<ButtonModalTrigger name={"Edit"} multi={multi}/>
		</React.Fragment>
	);
}
