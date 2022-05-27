import CouponBanner from 'components/CouponBanner';
import ReviewSlide from 'components/ReviewSlide';
import SubscribeBanner from 'components/SubscribeBanner';
import DetailIntro from 'components/main/DetailIntro';
import IntroLayout from 'components/main/IntroLayout';
import MainBanner from 'components/main/MainBanner';

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
