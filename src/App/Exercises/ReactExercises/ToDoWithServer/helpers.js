import { API_URL } from "./constants";

export const parseDate = (date) => {
  if (date) {
    const dateObj = new Date(date);

    // Przechodzimy do strefy czasowej CET
    const cetOffset = ""; // CET ma przesunięcie -1 godzina (w minutach)
    dateObj.setMinutes(dateObj.getMinutes() + cetOffset);

    const dateParsed = dateObj.getDate();
    const monthParsed = dateObj.getMonth() + 1; // Dodajemy 1, ponieważ miesiące są indeksowane od 0
    const yearParsed = dateObj.getFullYear();
    const hoursParsed = dateObj.getHours();
    const minutesParsed = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

    const finalDate = `${dateParsed}.${monthParsed}.${yearParsed}, ${hoursParsed}:${minutesParsed}`;

    return finalDate;
  } else {
    return date;
  }
};

export const setStateAsync = async (callback) => {
  return new Promise(() => {
    callback();
  });
};

export const requestHandler = async (selectedMethod, id, data) => {
  return new Promise(async (resolve, reject) => {
    let endOfUrl = "";

    if (id) {
      endOfUrl = `/${id}`;
    }

    const response = await fetch(`${API_URL}/todo${endOfUrl}`, {
      method: selectedMethod,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();

    if (response.status === 200) {
      resolve(jsonResponse);
    }

    if (jsonResponse.message === "Server error") {
      reject(jsonResponse);
    }

    if (response.status !== 200 && jsonResponse.message) {
      reject(jsonResponse);
    }
  });
};
