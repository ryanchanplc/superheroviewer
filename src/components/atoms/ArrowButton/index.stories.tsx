import { Story, Meta } from '@storybook/react'
import React from 'react'
import ArrowButton from '.'
export default {
  title: 'ArrowButton',
  component: ArrowButton,
} as Meta

const Template: Story<any> = (args) => <ArrowButton {...args} />
export const LeftButton = Template.bind({})
LeftButton.args = {
  direction: 'left',
}
export const RightButton = Template.bind({})
RightButton.args = {
  direction: 'right',
}
