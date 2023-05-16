import './styles.css';
import { SingleQuestion } from './SingleQuestion';

export const FAQ = () => {
  return (
    <div className="faq">
      <div className="naglowek">
        <h1>FAQ</h1>
        <p className="par1">
          Tutaj znajdź odpowiedzi na najczęściej zadawane pytania.
        </p>
      </div>
  
      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answear={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />
      <SingleQuestion
        question={'Jak się z nami skontaktować?'}
        answear={
          'Znajdź nas na fb lub wyślij email na adres loremimpsu@gmail.com'
        }
      />
      <SingleQuestion
        question={'Jak się z nami skontaktować?'}
        answear={
          'Znajdź nas na fb lub wyślij email na adres loremimpsu@gmail.com'
        }
      />
      <SingleQuestion
        question={'Jak się z nami skontaktować?'}
        answear={
          'Znajdź nas na fb lub wyślij email na adres loremimpsu@gmail.com'
        }
      />
    </div>
  );
};
