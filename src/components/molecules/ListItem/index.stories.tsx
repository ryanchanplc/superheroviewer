import { Story, Meta } from '@storybook/react'
import React from 'react'
import ListItem from '.'
import List from '@material-ui/core/List'
export default {
  title: 'ListItem',
  component: ListItem,
} as Meta

const Template: Story<any> = (args) => (
  <List>
    <ListItem {...args} />
  </List>
)

export const SingleListItem = Template.bind({})
SingleListItem.args = {
  primary: 'Batman',
}

export const SingleListItemWithImage = Template.bind({})
SingleListItemWithImage.args = {
  primary: 'Batman',
  image: {
    url: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
  },
}
