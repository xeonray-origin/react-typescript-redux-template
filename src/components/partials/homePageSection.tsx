import React from 'react';
import { SectionHOC } from '@components/base';
import { ISectionProps, ISectionConfig } from '@types';

const HomePageSection = (props: any) => {
  const { config } = props;
  console.log(config);
  return (
    <>
      <SectionHOC cardConfig={config} />
    </>
  );
};

export default HomePageSection;
