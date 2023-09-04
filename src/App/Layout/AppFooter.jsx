import './styles/footer.css';

const email = 'katarzyna.mazur@pomeranian.it';
const phone = '+48-999-999-999';

export function AppFooter() {
  return (
    <footer>
      <div>
        Projekt uzyskał dofinansowanie ze środków Unii Europejskiej z
        Europejskiego Funduszu Rozwoju
      </div>
      <a href={`mailto:${email}`} className="email">{`Email:${email}`}</a>
      <div>
        Regionalnego w ramach projektu grantowego „Invest in Pomerania 2020”.
      </div>
      <a href={`tel:${phone}`} className="email">{`Tel: ${phone}`}</a>
    </footer>
  );
}
