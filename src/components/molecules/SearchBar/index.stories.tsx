import { Story, Meta } from '@storybook/react'
import React from 'react'
import SearchBar, { SearchBarProps } from '.'
export default {
  title: 'SearchBar',
  component: SearchBar,
} as Meta

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />

export const ActiveSearchBar = Template.bind({})
ActiveSearchBar.args = {}
export const DisabledSearchBar = Template.bind({})
DisabledSearchBar.args = {
  loading: true,
}
