import { Route, Routes } from 'react-router-dom';
import Page from 'pages/Page';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
};
