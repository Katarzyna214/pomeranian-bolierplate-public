import './styles.css';

export function Exercise1() {
  return (
    <div>
      <div class="original-tags">
        <h1>Tytuł</h1>
        <small>05.2023</small>
        <h3>
          H<sub>2</sub>O is good for you
        </h3>
        <p>
          Staying <b>hydrated </b> is one of the best things you can do for your
          overall health. Staying <b>hydrated </b>
          can help support physical performance, prevent headaches and
          constipation, and more.
        </p>
        <h3>
          25<sup>th</sup> birthday
        </h3>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday
          <q>quote</q>
          or wish that will surely make that special someone’s day a great day.
          Whether you’re celebrating your birthday or someone else’s, you can
          rely on our list of
          <i>happy birthday</i>
          <q>quotes</q> to help put a smile on someone’s face. From
          inspirational to funny to cute sayings, browse our list of
          <q>quotes</q>
          to find one that resonates with you.
          <del>Nothing</del> can stop you!
        </p>
        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>
        <p>
          <h5>
            A lot of things to do <i>#todo</i>
          </h5>
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </p>
      </div>

      <div className="faked-tags">
        <div className="tytuł">Tytuł</div>
        <div className="date">05.2023</div>
        <div className="woda">
          H<span className="under">2</span>O is good for you{' '}
        </div>
        <div className="first-paragraph">
          Staying <span className="bold">hydrated</span> is one of the best
          things you can do for your overall health. Staying
          <span className="bold"> hydrated</span> can help support physical
          performance, prevent headaches and constipation, and more.
        </div>
        <div className="date1">
          25<span className="above">th</span> birthday
        </div>
        <div className="second-paragraph">
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday
          <span className="quote">quote</span> or wish that will surely make
          that special someone’s day a great day. Whether you’re celebrating
          your birthday or someone else’s, you can rely on our list of
          <span className="italics"> happy birthday </span>
          <span className="quote">quotes</span> to help put a smile on someone’s
          face. From inspirational to funny to cute sayings, browse our list of
          <span className="quote"> quotes</span> to find one that resonates with
          you. <span className="delete">Nothing</span> can stop you!
        </div>
        <div className="third-paragraph">
          Why not to use <span className="underline">lists</span> ?
        </div>

        <div className="forth-paragraph">
          A lot of things to do <span className="italics">#todo</span></div>
          <div className="lista">
            <div className="element1">Todo 1</div>
            <div className="element1">Todo 2</div>
            <div className="element1">Todo 3</div>
          </div>
        </div>
      </div>
  );
}
