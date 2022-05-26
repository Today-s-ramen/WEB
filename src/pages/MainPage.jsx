import CouponBanner from 'components/CouponBanner';
import ReviewSlide from 'components/ReviewSlide';
import SubscribeBanner from 'components/SubscribeBanner';
import DetailIntro from '../components/DetailIntro';
import IntroLayout from '../components/IntroLayout';
import MainBanner from '../components/MainBanner';

const MainPage = () => {
  return (
    <>
      <MainBanner />
      <IntroLayout />
      <DetailIntro />
      <ReviewSlide />
      <CouponBanner />
      <SubscribeBanner />
    </>
  );
};

export default MainPage;
