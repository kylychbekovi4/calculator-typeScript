import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
	add,
	subtract,
	multiply,
	divide,
	reset,
} from "../redux/tools/todoSlice";
import scss from "./Calculator.module.scss";

export const Calculator = () => {
	const [inputValue, setInputValue] = useState("");
	const value = useAppSelector((state) => state.calculator.value);
	const dispatch = useAppDispatch();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleAdd = () => {
		dispatch(add(Number(inputValue)));
		setInputValue("");
	};

	const handleSubtract = () => {
		dispatch(subtract(Number(inputValue)));
		setInputValue("");
	};

	const handleMultiply = () => {
		dispatch(multiply(Number(inputValue)));
		setInputValue("");
	};

	const handleDivide = () => {
		dispatch(divide(Number(inputValue)));
		setInputValue("");
	};

	return (
		<div className={scss.parent}>
			<h1>Calculator:</h1>
			<input
				placeholder="Калькулятор"
				type="number"
				value={inputValue}
				onChange={handleInput}
			/>
			<div className={scss.mathema}>
				<button onClick={handleAdd}>+</button>
				<button onClick={handleSubtract}>-</button>
				<button onClick={handleMultiply}>*</button>
				<button onClick={handleDivide}>/</button>
			</div>
			<div className={scss.result}>
				<button onClick={() => dispatch(reset())}>Очистить</button>
			</div>
			<h1>Result: {value}</h1>{" "}
		</div>
	);
};

export default Calculator;
