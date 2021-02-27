import { Story, Meta } from '@storybook/react'
import React from 'react'
import TopHeroBanner from '.'

export default {
  title: 'TopHeroBanner',
  component: TopHeroBanner,
} as Meta

const Template: Story<any> = (args) => <TopHeroBanner {...args} />

export const TopHeroBannerExample = Template.bind({})
TopHeroBannerExample.args = {
  title: 'Super Hero Viewer',
  summary: 'A viewer for searching and displaying the public SuperHero API ',
}
