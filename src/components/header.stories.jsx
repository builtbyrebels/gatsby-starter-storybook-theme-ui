import React from 'react';

import Header from './header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  siteTitle: "Gatsby + Storybook + Theme UI",
};