import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GoalSetting from '../../components/retrospect-settings/GoalSetting';
import TemplateSelectSetting from '../../components/retrospect-settings/TemplateSelectSetting';
import SettingPrevNextButton from '../../components/retrospect-settings/SettingPrevNextButton';
import SlideStatusBar from '../../components/retrospect-settings/SlideStatusBar';
import TimeSetting from '../../components/retrospect-settings/TimeSetting';

const RetrospectSettingsPage = () => {
  const [slideIdx, setSlideIdx] = useState<number>(1);
  const handleSlideIdx = (newSlideIdx: number) => {
    if (newSlideIdx < 1) {
      newSlideIdx = 1;
    } else if (newSlideIdx > 3) {
      newSlideIdx = 3;
    }
    setSlideIdx(newSlideIdx);
  };

  const sliderRef = React.createRef<Slider>();
  const next: () => void = () => {
    sliderRef.current?.slickNext();
    handleSlideIdx(slideIdx + 1);
  };
  const previous: () => void = () => {
    sliderRef.current?.slickPrev();
    handleSlideIdx(slideIdx - 1);
  };

  const sliderSettings = {
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <SlideStatusBar slideIdx={slideIdx} />

      <Slider ref={sliderRef} {...sliderSettings}>
        <GoalSetting />
        <TemplateSelectSetting />
        {/* TODO : name, time은 API를 통해 받아와야 함 */}
        <TimeSetting name={'KPT'} avgDurationMinutes={120} />
      </Slider>

      <SettingPrevNextButton
        prevFn={previous}
        nextFn={next}
        slideIdx={slideIdx}
      />
    </section>
  );
};

export default RetrospectSettingsPage;
