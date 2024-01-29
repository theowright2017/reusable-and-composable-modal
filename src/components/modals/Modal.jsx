import React, {useState} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";

import styles from "../../styles/Modal.module.scss";

const ModalDemo = (props) => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>{props.trigger}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styles.DialogOverlay} />
				<Dialog.Content className={styles.DialogContent}>
				
					<Dialog.Title className={styles.DialogTitle}>{props.title}</Dialog.Title>
					{props.children(setIsOpen)}
					<Dialog.Close asChild>
						<button className={styles.IconButton} aria-label="Close">
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default ModalDemo;
