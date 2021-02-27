import { Story, Meta } from '@storybook/react'
import React from 'react'
import Generic from '.'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import Carousel from '../../organisms/Carousel'
import HeroList from '../../organisms/HeroList'
import TopHeroBanner from '../../organisms/TopHeroBanner'

export default {
  title: 'GenericTemplate',
  component: Generic,
} as Meta

const Template: Story<any> = (args) => <Generic {...args} />

export const HomePage = Template.bind({})
HomePage.args = {
  header: <Header title="SuperHero Viewer" />,
  footer: <Footer title="footer"></Footer>,
}

export const SearchPage = Template.bind({})
SearchPage.args = {
  header: <Header title="SuperHero Viewer" />,
  content: (
    <HeroList
      showFav={true}
      title="Result"
      perPage={2}
      favList={[2, 3]}
      heroDataList={[
        {
          id: 1,
          name: 'Batman',
          image:
            'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },
        {
          id: 2,
          name: 'Superman',
          image:
            'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },

        {
          id: 3,
          name: 'Spiderman',
          image:
            'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },
        {
          id: 4,
          name: 'Batman',
          image:
            'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },
        {
          id: 5,
          name: 'Superman',
          image:
            'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },
        {
          id: 6,
          name: 'Spiderman',
          image:
            'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },
      ]}
    />
  ),
}
