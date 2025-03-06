import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data/data';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full px-4 lg:py-10">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            className={item.className}
            status={item.status}
            id={item.id}
            path={item.path}
            title={item.title}
            description={item.description}
            username={item.username}
            technologies={item.technologies} 
            formation={item.formation}
            image={item.image}
            socialMediaLinks={item.socialMediaLinks}
            cvLink={item.cvLink}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
