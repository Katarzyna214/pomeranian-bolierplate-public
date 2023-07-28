import MyPhoto1 from '../../Images/Myphoto1.jpg';

export const MyData = () => {
  return (
    <div className="dashboard-about-me">
      <img className="photo_dashboard" src={MyPhoto1} alt="loading photo" />
      <b className="mydataname">Katarzyna</b>{' '}
      <p className="mydatainfo">Gorlice</p>
      <p className="mydatainfo1">
        e-mail: katarzyna.mazur@pomeranianstartit.pl
      </p>
      <p className="mydatainfo3">telefon: +48 567 891 890</p>
    </div>
  );
};
