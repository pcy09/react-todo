import React from "react";
import { FiMinusCircle } from "react-icons/fi";
// 아이콘 이름 앞2글자와 /뒤 글자를 같게(뒤는 소문자)
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
	const { id, text, status } = todo; //간편한 사용을 위해 todo에서 할당
	const handleChange = (e) => {
		// 받아온게 아님, 내부에서만 사용
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status });
	};
	const handleDelete = () => onDelete(todo);

	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id={id}
				checked={status == "completed"}
				onChange={handleChange}
			/>
			<label className={styles.text} htmlFor={id}>
				{text}
			</label>
			<span className={styles.icon}>
				<button className={styles.button} onClick={handleDelete}>
					<FiMinusCircle />
				</button>
			</span>
		</li>
	);
}
