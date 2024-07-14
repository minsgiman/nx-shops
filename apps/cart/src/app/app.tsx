import { Route, Routes } from 'react-router-dom';

import '@nx-shops/shared/header';

import { CartCartPage } from '@nx-shops/cart/cart-page';

export const App = () => {
  return (
    <>
      <nx-shops-header />
      <Routes>
        <Route path="/" element={<CartCartPage />} />
        <div>TEST4</div>
        <div>TEST100</div>
      </Routes>
    </>
  );
};

export default App;
