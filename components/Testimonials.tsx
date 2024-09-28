import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { testimonials } from '@/data/data';

const Testimonials = () => {
  return (
    <section id="testimonials" >
<div className="lg:py-8">
      <h1 className="heading text-center text-[20px] lg:text-[32px] font-bold uppercase  mb-8 relative">
      Endorsements: {"  "}
      <span className="text-purple">  Voices of Satisfaction and Success</span>
      </h1>
      <div className="overflow-x-auto py-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      </div>
    </section>
  );
}

export default Testimonials;
