import { Story, Meta } from '@storybook/react'
import React from 'react'
import Slide from '.'
export default {
  title: 'Slide',
  component: Slide,
} as Meta

const Template: Story<any> = (args) => <Slide {...args} />
export const SlideWithImage = Template.bind({})
SlideWithImage.args = {
  title: 'test',
  image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
}
