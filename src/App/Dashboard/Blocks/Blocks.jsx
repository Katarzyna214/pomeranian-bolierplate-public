export const Blocks = () => {
  return (
    <div className="dashboard-tiles-container">
      <h2>Hej tu Kasia!</h2>{' '}
      <div className="dashboard-tiles">
        {' '}
        <div className="box1">
          Moje CV
          <p className="cvpar">podgląd CV wraz z doświadczeniem</p>
          <p className="cvpar">zobacz więcej </p>
        </div>{' '}
        <div>Projekty</div>{' '}
        <div>
          Ćwiczenia
          <p className="cvpar">wszystkie wykonane ćwiczenia</p>
          <p className="cvpar">zobacz więcej</p>
        </div>{' '}
        <div>Edukacja</div>{' '}
        <div>
          {' '}
          <p className="dashboard-tile-title">Tech stack</p>{' '}
          {/* <img src={codeSvg} alt="icon tech stack" /> */}{' '}
          <p className="dashboard-tile-description">
            {' '}
            Stack technologiczny realizowany na kursie{' '}
          </p>{' '}
          {/* <SeeMoreLink to="tech-stack" /> */}{' '}
        </div>{' '}
        <div>Doświadczenie</div>{' '}
      </div>{' '}
    </div>
  );
};
