import { Story, Meta } from '@storybook/react'
import React from 'react'
import CardItem from '.'

export default {
  title: 'CardItem',
  component: CardItem,
} as Meta

const Template: Story<any> = (args) => <CardItem {...args} />

export const SingleCardItem = Template.bind({})
SingleCardItem.args = {
  name: 'Batman',
  fullname: 'Bruce Wayne',
}

export const SingleListItemWithImage = Template.bind({})
SingleListItemWithImage.args = {
  name: 'Batman',
  fullname: 'Bruce Wayne',
  image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
}
