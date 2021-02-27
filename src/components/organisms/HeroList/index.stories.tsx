import { Story, Meta } from '@storybook/react'

import React from 'react'
import HeroList from '.'
export default {
  title: 'HeroList',
  component: HeroList,
} as Meta

const Template: Story<any> = (args) => <HeroList {...args} />

export const HeroListWithData = Template.bind({})
HeroListWithData.args = {
  title: 'Result',
  perPage: 2,
  favList: [2, 3],
  heroDataList: [
    {
      id: 1,
      name: 'Batman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
    },
    {
      id: 2,
      name: 'Superman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
    },

    {
      id: 3,
      name: 'Spiderman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
    },
    {
      id: 4,
      name: 'Batman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
    },
    {
      id: 5,
      name: 'Superman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
    },
    {
      id: 6,
      name: 'Spiderman',
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
      },
    },
  ],
}
