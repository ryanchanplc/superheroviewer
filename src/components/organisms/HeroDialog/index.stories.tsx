import { Story, Meta } from '@storybook/react'
import React from 'react'
import HeroDialog, { HeroDialogProps } from '.'
export default {
  title: 'HeroDialog',
  component: HeroDialog,
} as Meta

const Template: Story<HeroDialogProps> = (args) => <HeroDialog {...args} />
export const HeroDialogWithData = Template.bind({})

HeroDialogWithData.args = {
  open: true,
  name: 'Batman',
  biography: ' I am Batman',
  image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
}
