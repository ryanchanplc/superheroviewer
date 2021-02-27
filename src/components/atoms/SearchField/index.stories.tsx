import { Story, Meta } from '@storybook/react'
import React from 'react'
import SearchField, { SearchFieldProps } from '.'
export default {
  title: 'SearchField',
  component: SearchField,
} as Meta

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />

export const SearchFieldWithPlaceholder = Template.bind({})
SearchFieldWithPlaceholder.args = {
  placeholder: 'Search by name',
}
export const DisabledSearchField = Template.bind({})
DisabledSearchField.args = {
  disabled: true,
}
