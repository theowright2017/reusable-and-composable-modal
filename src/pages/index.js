import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {ButtonModalTrigger} from '@/components/ButtonModalTrigger'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return <ButtonModalTrigger name={'Edit'}/>;
}
