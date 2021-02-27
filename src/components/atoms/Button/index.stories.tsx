import { Story, Meta } from '@storybook/react'
import React from 'react'
import SearchButton, { SearchButtonProps } from '.'
export default {
  title: 'SearchButton',
  component: SearchButton,
} as Meta

const Template: Story<SearchButtonProps> = (args) => <SearchButton {...args} />
export const ActiveButton = Template.bind({})
ActiveButton.args = {
  title: 'Active Button',
}
export const DisabledButton = Template.bind({})
DisabledButton.args = {
  title: 'Disabled Button',
  disabled: true,
}
