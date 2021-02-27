import { Story, Meta } from '@storybook/react'
import React from 'react'
import Header, { HeaderProps } from '.'
export default {
  title: 'Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />
export const HeaderWithTitle = Template.bind({})

HeaderWithTitle.args = {
  title: 'SuperHero Viewer',
}
