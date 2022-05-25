import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ReviewPage from '../../pages/ReviewPage';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
