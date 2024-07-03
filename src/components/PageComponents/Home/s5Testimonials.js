import React from 'react';
import LabelText from '../../LabelText';
import CustomerCard from '../../CustomerCard';
import customerData from '../../../data/customer-data';


const S5Testimonials = (props) => {
  return (
    <>
        <section id="testimonials" className="py-20 lg:py-40">
      <div className="w-full relative sm:max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl  mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
        {props.Title}
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default S5Testimonials;
