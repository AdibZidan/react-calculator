import './Screen.scss';

const Screen = (): JSX.Element => {
  const result: string = (399981).toLocaleString();

  return (
    <section className="screen">
      <span className="result">
        {result}
      </span>
    </section>
  );
};

export default Screen;
