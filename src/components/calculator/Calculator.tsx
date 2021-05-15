import { getCalculatorBody, getClassName } from '../../shared/helpers/calculator/calculator.helper';
import './Calculator.scss';

const Calculator = (): JSX.Element => {
  return (
    <>
      <section className="numbers">
        {getCalculatorBody.map((value, index) =>
          <button
            className={getClassName(value)}
            key={index}>
            {value.key}
          </button>
        )}
      </section>

      <div className="last">
        <button className="reset">Reset</button>
        <button className="equals">=</button>
      </div>
    </>
  );
};

export default Calculator;
