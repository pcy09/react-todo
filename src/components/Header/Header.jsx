// 다크모드 콘텍스트 연결
import styles from "./Header.module.css";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className={styles.header}>
			<button className={styles.toggle} onClick={toggleDarkMode}>
				{darkMode && <BsMoonFill />}
				{!darkMode && <BsSunFill />}
			</button>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button
							className={`${styles.filter} ${
								filter === value && styles.selected
							}`}
							onClick={() => onFilterChange(value)}
						>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
