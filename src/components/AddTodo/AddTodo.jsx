import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// https://www.npmjs.com/package/uuid (id 고유값 생성)
// yarn add uuid
// npm install uuid
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
	const [text, setText] = useState("");
	const handleChange = (e) => setText(e.target.value);
	// 인풋에 입력할 때마다 바뀌는 것을 인식
	const handleSubmit = (e) => {
		//form고유의 submit 기능이 작동되면 실행
		e.preventDefault();
		// 페이지가 리프레시 되지 않도록 설정
		if (text.trim().length === 0) {
			// input에 입력된게 없을때는 handleSubmit함수에서 빠져나감
			// 스페이스바만 눌러도 등록안됨
			// trim : 공백제거
			return;
		}
		onAdd({ id: uuidv4(), text, status: "active" }); //onAdd함수 실행
		setText(""); //내용 초기화
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type="text"
				placeholder="할일을 입력해주세요"
				value={text}
				onChange={handleChange}
				// 변경될때마다 handleChange 함수 호출
			/>
			<button className={styles.button}>추가</button>
		</form>
	);
}
