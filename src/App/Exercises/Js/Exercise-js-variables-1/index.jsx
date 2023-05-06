import './styles.css';

export function Exercise() {
  let string1 = 'Jon Snow';
  const myname = 'Kasia';
  const num1 = 'piętnastym';
  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to: ${string1}`;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje na stringach</h2>
        <p>Ulubiony bohater z serialu "Gra o tron" to {string1}</p>
        <p>
          Ulubiony bohater z serialu "Gra o tron" to
          <span className="variable-string-placeholder">{string1}</span>
        </p>
        <p>{string2}</p>
        <p>{string3}</p>
        {/* Uzupełnij zdanie korzystając ze zmiennych oraz operacji na stringach */}
        <p>
          Witaj {myname}! Jesteś {num1} użytkownikiem odwiedzającym tę stronę!
        </p>
      </section>
    </div>
  );
}
