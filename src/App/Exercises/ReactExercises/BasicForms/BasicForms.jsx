import React from 'react';
import { Link } from 'react-router-dom';
// Forms
import { useForm } from 'react-hook-form';

// Validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 2 sposób importu -> musimy dodac wszystkie importy dot. walidacji,

// import { object, string, required} from "yup"

// Zastosowanie
// const schema = object({
//   address: string().required(),
// })

import './style.css';

const phoneRegExp = /^\d{9}$/;

const schemaValidationValues = {
  // password: {...}
  passwordMinValue: 8,
};
const schemaValidation = {
  required: 'Pole jest wymagane',
  email: 'Musisz podać poprawny email!',
  boolean: 'To pole musi być zaznaczone lub nie',
  booleanRequired: 'To pole musi być zaznaczone',
  phone: 'Musisz podać poprawny numer telefonu',
  password: {
    required: 'Hasło jest wymagane',
    confirmRequired: 'Potwierdź hasło',
    samePassword: 'Hasło musi być takie same',
    minValue: schemaValidationValues.passwordMinValue,
    min: `Hasło musi zawierać więcej niż ${schemaValidationValues.passwordMinValue} znaków`,
    getCharacterValidationError: (str) => {
      return `Twoje hasło musi zawierać przynajmniej 1 ${str}`;
    },
  },
};

const schema = yup.object({
  address: yup.string().required(schemaValidation.required),
  description: yup.string(),
  email: yup
    .string()
    .email(schemaValidation.email)
    .required(schemaValidation.required),
  isAdditionalDataChecked: yup.boolean(schemaValidation.boolean),
  isCreateAccountChecked: yup.boolean(schemaValidation.boolean),
  isEnvChecked: yup.boolean(schemaValidation.boolean),
  isGithubChecked: yup.boolean(schemaValidation.boolean),
  isNewsletterChecked: yup.boolean(schemaValidation.boolean),
  isTermsChecked: yup
    .boolean(schemaValidation.boolean)
    .oneOf([true], schemaValidation.booleanRequired),
  name: yup.string().required(schemaValidation.required),
  nickname: yup.string().required(schemaValidation.required),

  password: yup
    .string()
    .required(schemaValidation.password.required)
    // check minimum characters
    .min(schemaValidation.password.minValue, schemaValidation.password.min)
    // different error messages for different requirements
    .matches(
      /[0-9]/,
      schemaValidation.password.getCharacterValidationError('liczbę')
    )
    .matches(
      /[a-z]/,
      schemaValidation.password.getCharacterValidationError('małą litere')
    )
    .matches(
      /[A-Z]/,
      schemaValidation.password.getCharacterValidationError('dużą litere')
    ),
  confirmPassword: yup
    .string()
    .required(schemaValidation.password.confirmRequired)
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([yup.ref('password')], schemaValidation.password.samePassword),

  // !!! Check it
  paymentMethod: yup.string().required(schemaValidation.required),
  phone: yup.string().matches(phoneRegExp, schemaValidation.phone),
  productType: yup.string().required(schemaValidation.required),
});

export function BasicForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log('!!! Dane w formularzu:', data);

  return (
    <>
      {' '}
      <Link to=".." relative="path" className="linktoformularzzamowienia">
        {' '}
        {'< FORMULARZ ZAMÓWIENIA'}{' '}
      </Link>
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        {/* sekcja 1 */}
        <div>
          <div className="h2_div">
            <h2>Zamówienie produktu</h2>
          </div>
          <div className="opcje">
            <label htmlFor="productType">Wybierz produkt*</label>

            <select {...register('productType')}>
              <option value="frontend">kurs front-end</option>
              <option value="backend">kurs backend-end</option>
              <option value="ux/ui">kurs UX/UI</option>
            </select>
            {errors.productType?.message}
          </div>

          <div className="opcje">
            <label htmlFor="paymentMethod">Wybierz formę płatności*</label>
            <div className="payment">
              <div className="payment-option">
                <input
                  value="blik"
                  type="radio"
                  {...register('paymentMethod')}
                />
                <span>blik</span>
              </div>
              <div className="payment-option">
                <input
                  value="paypal"
                  type="radio"
                  {...register('paymentMethod')}
                />
                <span>paypal</span>
              </div>
              <div className="payment-option">
                <input
                  value="transaction"
                  type="radio"
                  {...register('paymentMethod')}
                />
                <span>przelew tradycyjny</span>
              </div>
            </div>
            <span className="regulamin">{errors.paymentMethod?.message}</span>
          </div>

          <div className="opcje">
            <label htmlFor="orderInformations">
              Opcje dodatkowe do zamówienia
            </label>
            <div className="additional-option">
              <input
                className="checkbox1"
                name="orderInformations"
                type="checkbox"
                {...register('isEnvChecked')}
              />
              <span className="checkbox-label">ustawienie środowiska</span>
            </div>

            <div className="additional-option">
              <input
                className="checkbox1"
                name="orderInformations"
                type="checkbox"
                {...register('isGithubChecked')}
              />
              <span className="checkbox-label">intro do github</span>
            </div>

            <div className="additional-option">
              <input
                className="checkbox1"
                name="orderInformations"
                type="checkbox"
                {...register('isAdditionalDataChecked')}
              />
              <span className="checkbox-label">materiały dodatkowe</span>
            </div>
          </div>
        </div>

        {/* sekcja 2 */}
        <div className="h3_div">
          <h2>Dane do realizacji zamówienia</h2>
          <div className="order_div">
            <label htmlFor="name">Imię i nazwisko*</label>
            <input
              className="select_div"
              id="name"
              type="name"
              placeholder="wpisz swoje imię i nazwisko"
              {...register('name')}
            />
            <span className="regulamin">{errors.name?.message}</span>
            {/* {errors.name && <span>Nazwisko jest wymagane!</span>} */}
          </div>

          <div className="order_div">
            <label htmlFor="nickname">Twój pseudonim*</label>
            <input
              className="select_div"
              id="nickname"
              placeholder="wpisz swój pseudonim"
              {...register('nickname')}
            />
            <span className="regulamin"> {errors.nickname?.message}</span>
          </div>

          <div className="order_div">
            <label htmlFor="address">Adres do wysyłki*</label>
            <input
              className="select_div"
              id="address"
              type="address"
              placeholder="adres, na który mamy wysłać zamówienie"
              {...register('address')}
            />
            <span className="regulamin">{errors.address?.message}</span>
          </div>

          <div className="order_div">
            <label htmlFor="email">Adres e-mail*</label>
            <input
              className="select_div"
              id="email"
              type="email"
              placeholder="jan.kowalski@gmail.com"
              {...register('email')}
            />
            <span className="regulamin">{errors.email?.message}</span>
          </div>

          <div className="order_div">
            <label htmlFor="phone">Numer kontaktowy*</label>
            <input
              className="select_div"
              id="phone"
              type="tel"
              placeholder="888888888"
              {...register('phone')}
            />
            <span className="regulamin">{errors.phone?.message}</span>
          </div>

          <div className="order_div">
            <label htmlFor="description">Dodatkowe uwagi do zamówienia</label>
            <textarea
              className="select_div1"
              id="description"
              placeholder="jeśli masz jakieś uwagi, wpisz je tutaj..."
              {...register('description')}
            />
            {/* {errors.description && <span></span>} */}
          </div>
        </div>

        {/* sekcja 3 */}
        <div className="h4_div">
          <h2>Zakładanie konta</h2>
          <div>
            {/* htmlFor -> składania języka HTML i podstawowych formularzy */}
            <label htmlFor="createAccount">
              Chcę założyć konto razem z zamówieniem
            </label>
            {/* 
                Dzięki temu że mamy tutaj wpisane name i htmlFor w inpucie i label jako "createAccout" -> identyfikujemy
                te elementy !!! BEZPOŚREDNIO przy użyciu składni HTML'a !!!

                FUNKCJ
            */}
            <div className="order_div1">
              {/* name === htmlFor (z label) -> składania języka HTML i podstawowych formularzy */}

              <input
                className="checkbox1"
                name="createAccount"
                type="checkbox"
                // część odpowiedzialna za rejestracje inputa do naszego zastosowania przy użyciu biblioteki react-hook-form
                {...register('isCreateAccountChecked')}
              />
              <span className="createaccount">Zakładam konto</span>
            </div>
          </div>

          {/* TODO: add func to show/hide this inputs(password, confirmPassword) */}
          {/* ASK DESIGNER: dlaczego... */}
          <div className="order_div">
            <label htmlFor="password">Moje hasło</label>
            <input
              className="select_div"
              type="password"
              id="password"
              placeholder="wpisz hasło"
              {...register('password')}
            />
            <span className="regulamin"> {errors.password?.message}</span>
          </div>

          <div className="order_div">
            <label htmlFor="confirmPassword">Powtórz hasło</label>
            <input
              className="select_div"
              type="password"
              id="confirmPassword"
              placeholder="wpisz swoje hasło ponownie"
              {...register('confirmPassword')}
            />
            <span className="regulamin">
              {' '}
              {errors.confirmPassword?.message}{' '}
            </span>
          </div>
        </div>

        {/* sekcja 4 */}
        <div className="h4_div">
          <h2>Zgody i newsletter</h2>
          <div className="zgody_div">
            <label htmlFor="terms">
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </label>
            <div>
              <input
                className="checkbox1"
                name="terms"
                type="checkbox"
                {...register('isTermsChecked')}
              />
              <span className="regulamin">akceptuję regulamin*</span>
            </div>
            <span className="regulamin">{errors.isTermsChecked?.message}</span>
          </div>

          <div className="order_div3">
            <label htmlFor="newsletter">
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </label>
            <div>
              <input
                className="checkbox1"
                name="newsletter"
                type="checkbox"
                {...register('isNewsletterChecked')}
              />
              <span>zapisuję się na listę mailingową</span>
            </div>
          </div>
        </div>

        <button className="button_zamowienie" type="submit">
          składam zamówienie
        </button>
      </form>
    </>
  );
}
