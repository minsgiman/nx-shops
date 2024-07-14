import { Route, Routes } from 'react-router-dom';

import '@nx-shops/shared/header';

import { CartCartPage } from '@nx-shops/cart/cart-page';

export const App = () => {
  return (
    <>
      <nx-shops-header />
      <Routes>
        <Route path="/" element={<CartCartPage />} />
        <div>TEST3</div>
      </Routes>
    </>
  );
};

export default App;
