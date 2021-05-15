import { CalculatorBody } from '../../interfaces/calculator/calculator.interface';

export const getCalculatorBody: CalculatorBody[] = [
  { key: 7 }, { key: 8 }, { key: 9 },
  { key: 'DEL', className: 'del' },
  { key: 4 }, { key: 5 }, { key: 6 },
  { key: '+' }, { key: 1 }, { key: 2 },
  { key: 3 }, { key: '-' }, { key: '.' },
  { key: 0 }, { key: '/' }, { key: 'x' }
];

export const getClassName = (calculatorBody: CalculatorBody): string => {
  return calculatorBody.className ? `${calculatorBody.className} number` : 'number';
};
