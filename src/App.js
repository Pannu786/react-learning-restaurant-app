import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsSet, setCartIsSet] = useState(false);

  const setCartHandler = () => {
    setCartIsSet(true);
  };

  const unsetCartHandler = () => {
    setCartIsSet(false);
  };

  return (
    <>
      {cartIsSet && <Cart onUnset={unsetCartHandler} />}
      <Header onSetCart={setCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
