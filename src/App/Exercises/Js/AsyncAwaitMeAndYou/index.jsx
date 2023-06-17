import './styles.css';
// async function doSomethingAsync() {
//   //logika tu sie znajduje mozna tez zapisac funckja strzalkowa patrz nizej!
// }
// const doSomethingAsyncArrowFunc = async () => {
//   //logic
// }
export function AsyncAwaitMeAndYou() {
  const greeting = new Promise((resolve, reject) => {
    resolve('Hallo!');
  });

  const handleGreeting = () => {
    greeting
      .then((res) => {
        console.log('Greeting done', res);
      })
      .catch((err) => {
        console.log('Greeting error', err);
      })
      .finally(() => {
        console.log(
          'The promise is settled, meaning it has been resolved or rejected.'
        );
      });
  };

  //async await
  const handleGreetingAsync = async () => {
    // const value = await greeting;
    // console.log('Greeting from async done', value); nie da sie tu wylapac bledu dlatego try-catch patrz nizej
    try {
      const res = await greeting;
      console.log('Greeting from async done', res);
    } catch (err) {
      console.log('Greeting from async error', err);
    } finally {
      console.log(
        'The promise from async is settled, meaning it has been resolved or rejected.'
      );
    }
  };
  //asynchroniczna funkcja gdzie nie ma await
  //Finally , when returning a Promise inside an async function, you don't neet to use await. So the following syntax is acceptable.
  const getGreeting = async () => {
    return greeting;
  };
  //However, there's one exepction to this rule: you do need to write return await if you' re looking to handle
  //the Promise being rejected in a try...catch block.
  const getGreetingTryCatch = async () => {
    try {
      //gdy mamy try-catch zawsze musi byc await
      return await greeting;
    } catch (err) {
      console.log('Greeting from async error', err);
    } finally {
      console.log(
        'The promise from async is settled, meaning it has been resolved or rejected.'
      );
    }
  };
  return (
    <div>
      <button className="button" onClick={handleGreeting}>
        Click on me and check console, please!
      </button>
      <button className="button" onClick={handleGreetingAsync}>
        Promise from async/await!
      </button>
    </div>
  );
}
