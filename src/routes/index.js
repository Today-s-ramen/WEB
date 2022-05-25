import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage, ReviewPage, SubscribePage } from 'pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="subscribe" element={<SubscribePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
