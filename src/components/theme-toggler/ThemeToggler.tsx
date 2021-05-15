import { useState } from 'react';
import './ThemeToggler.scss';

const ThemeToggler = (): JSX.Element => {
  const theme: string = 'theme'.toUpperCase();
  const [order, setOrder] = useState('first');

  document.body.className = order;

  const setThemeOrder = (): void => {
    switch (order) {
      case 'first':
        setOrder('second');
        return;
      case 'second':
        setOrder('third');
        return;
      case 'third':
        setOrder('first');
        return;
    }
  };

  return (
    <section>
      <span className="theme">
        {theme}
      </span>

      <div className="toggle-container">
        <p>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </p>

        <div
          className="button-container"
          onClick={setThemeOrder}>

          <button
            className={order}>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThemeToggler;
