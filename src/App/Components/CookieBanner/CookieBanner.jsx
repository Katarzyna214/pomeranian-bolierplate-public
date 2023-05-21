import './styles.css';
import { CookieIcon } from '../Icons/CookieIcon';
import React from 'react';

export const CookieBanner = () => {
  const handleCookiesPermission = () => {
    localStorage.setItem('cookiePermission', true);
  };
  const cookiesInLocalStorage = () => {
    if (localStorage.getItem('cookiePermission') === 'true') return true;
    if (!!localStorage.getItem('cookiePermission')) return false;
  };

  return (
    <>
      {' '}
      {!cookiesInLocalStorage() && (
        <div className="cookie-wrapper">
          <div className="cookie-content">
            <CookieIcon className="content-icon" />
            <h4>Pozwól na pliki cookies.</h4>
            <p className="par1">
              Nasza strona korzysta z ciasteczek, które umożliwiają poprawne
              działanie strony i pomagają nam świadczyć usługi na najwyższym
              poziomie. Możesz zaakceptować wykorzystanie przez nas wszystkich
              tych plików i przejść do strony lub dostosować użycie do swoich
              preferencji. W tym celu kliknij przycisk po prawej stronie
              “dopasuj zgody”, aby następnie wybrać te które odpowiadają Twoim
              indywidualnym preferencjom.
            </p>
          </div>
          <div className="cookie-permissions">
            <button
              onClick={handleCookiesPermission}
              className="permission-accept"
            >
              W porządku.
            </button>
            <button className="permission-reject">Dopasuj zgody</button>
          </div>
        </div>
      )}
    </>
  );
};
