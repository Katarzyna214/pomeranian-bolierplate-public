import './styles.css';

const Slider = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <section>
              <div>
                <p className="my-custom-arrow arrowbutton custombutton blabla">
                  Przepisy na dania kuchni polskiej, czyli pierogi w wielu
                  zaskakujących odsłonach. Sprawdź przepisy na pierogi z
                  soczewicą, grzybami, a nawet dynią. Pychota!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Exercise() {
  return (
    <div className="selectors">
      <h3>Pierogi - przepisy i pomysły</h3>
      <Slider />
      <p>
        Przepisy na dania kuchni polskiej, czyli pierogi w wielu zaskakujących
        odsłonach. Sprawdź przepisy na pierogi z soczewicą, grzybami, a nawet
        dynią. Pychota!
      </p>
      <p>
        Przepisy na dania kuchni polskiej, czyli pierogi w wielu zaskakujących
        odsłonach. Sprawdź przepisy na pierogi z soczewicą, grzybami, a nawet
        dynią. Pychota!
      </p>
      <p>
        Przepisy na dania kuchni polskiej, czyli pierogi w wielu zaskakujących
        odsłonach. Sprawdź przepisy na pierogi z soczewicą, grzybami, a nawet
        dynią. Pychota!
      </p>
      <p>
        Przepisy na dania kuchni polskiej, czyli pierogi w wielu zaskakujących
        odsłonach. Sprawdź przepisy na pierogi z soczewicą, grzybami, a nawet
        dynią. Pychota!
      </p>
      <p>
        Przepisy na dania kuchni polskiej, czyli pierogi w wielu zaskakujących
        odsłonach. Sprawdź przepisy na pierogi z soczewicą, grzybami, a nawet
        dynią. Pychota!
      </p>
      <a href='=#'>Puste </a>;
      <a href = "http://google.com"> Google.com </a>;
      <a href="https://wp.pl/" rel= "nofollow">wp.pl</a>;
    <a href="https://">This is a link.</a>

    <div data-position="2">wpis</div>
    <div data-position="4">wpis</div>
    <div data-position="6">wpis</div>
    <div data-position="10">wpis</div>
    <div data-position>wpis</div>
    <div data-position="1">wpis</div>

    <div className='hoverable'>
      Wielka Promocja!
    </div>
    </div>
    
  );
};

