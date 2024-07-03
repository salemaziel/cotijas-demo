import React from 'react';
import LabelText from '../../LabelText';
import StatsBox from '../../StatsBox';

const S4Stats = (props) => {
  return (
    <>
      <section id="stats" className="py-20 lg:pt-32">
        <div className="w-full relative sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl  mx-auto text-center">
          <LabelText className="text-gray-600">Our customers get results</LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default S4Stats;
