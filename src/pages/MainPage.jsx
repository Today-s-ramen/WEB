import CouponBanner from 'components/main/CouponBanner';
import ReviewSlide from 'components/main/ReviewSlide';
import SubscribeBanner from 'components/main/SubscribeBanner';
import DetailIntro from 'components/main/DetailIntro';
import IntroLayout from 'components/main/IntroLayout';
import MainBanner from 'components/main/MainBanner';
import { Header, Footer } from 'components';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <IntroLayout />
      <DetailIntro />
      <ReviewSlide />
      <CouponBanner />
      <SubscribeBanner />
      <Footer />
    </>
  );
};

export default MainPage;
