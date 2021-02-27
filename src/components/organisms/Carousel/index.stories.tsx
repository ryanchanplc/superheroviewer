import { Story, Meta } from '@storybook/react'

import React from 'react'
import Carousel from '.'
export default {
  title: 'Carousel',
  component: Carousel,
} as Meta

const Template: Story<any> = (args) => <Carousel {...args} />

export const HeroListWithData = Template.bind({})
HeroListWithData.args = {
  slides: [
    {
      id: 1,
      name: 'Batman',
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },
    {
      id: 2,
      name: 'Superman',
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },

    {
      id: 3,
      name: 'Spiderman',
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },
    {
      id: 4,
      name: 'Batman',
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },
    {
      id: 5,
      name: 'Superman',
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },
    {
      id: 6,
      name: 'Spiderman',
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
    },
  ],
}
