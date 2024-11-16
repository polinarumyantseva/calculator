import { useState } from 'react';
import styles from './app.module.css';

const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');

	const handleNumClick = (num) => {
		if (operator === '') {
			setOperand1((prevNum) => prevNum + num);
		} else {
			setOperand2((prevNum) => prevNum + num);
		}

		if (result !== '') {
			setResult('');
		}
	};

	const setInitialValues = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};

	const handleCalculation = () => {
		switch (operator) {
			case '+':
				setResult(Number(operand1) + Number(operand2));
				setInitialValues();
				break;
			case '-':
				setResult(Number(operand1) - Number(operand2));
				setInitialValues();
				break;
			default:
				break;
		}
	};

	const handlePlusClick = () => {
		if (result !== '') {
			setOperand1(result);
			setResult('');
		}
		setOperator('+');
	};
	const handleMinusClick = () => {
		if (result !== '') {
			setOperand1(result);
			setResult('');
		}
		setOperator('-');
	};

	const handleClearField = () => {
		setInitialValues();
		setResult('');
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Калькулятор</h1>
				<div className={styles.wrapper}>
					<div className={styles['result-field']}>
						{result === '' ? (
							`${operand1} ${operator} ${operand2}`
						) : (
							<span className={styles.result}>{result}</span>
						)}
					</div>

					<div className={styles['nums-block']}>
						<div className={styles['nums-list']}>
							{NUMS.map((num, index) => {
								return (
									<button
										key={index}
										onClick={() => handleNumClick(num)}
										className={styles['num-item']}
									>
										{num}
									</button>
								);
							})}
						</div>
						<div className={styles['buttons-container']}>
							<button onClick={handleClearField} className={styles.button}>
								C
							</button>
							<button onClick={handlePlusClick} className={styles.button}>
								+
							</button>
							<button onClick={handleMinusClick} className={styles.button}>
								−
							</button>
							<button onClick={handleCalculation} className={styles.button}>
								=
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
