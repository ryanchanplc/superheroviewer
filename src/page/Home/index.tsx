import React, { useEffect, useState } from 'react'

import carousel from '../../config/carousel'
import Generic from '../../components/template/Generic'
import Header from '../../components/organisms/Header'
import Footer from '../../components/organisms/Footer'
import Carousel from '../../components/organisms/Carousel'
import HeroList from '../../components/organisms/HeroList'
import HeroDialog from '../../components/organisms/HeroDialog'
export interface HomeProps {}

export function Home(props: HomeProps) {
  const [slideData, setSlideData] = useState<any>(null)
  const [resultList, setResultList] = useState<any>(null)
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)
  const [viewID, setViewId] = useState<number>(-1)
  const fetchHero = (id: number) => {
    const baseURL = `https://www.superheroapi.com/api.php/${process.env.REACT_APP_API_TOKEN}/${id}`
    const init = {
      method: 'GET',
      mode: 'cors' as 'cors',
    }
    const myRequest = new Request(baseURL, init)
    return fetch(myRequest).then((value) => value.json())
  }

  useEffect(() => {
    const getHeros = carousel.map((id) => fetchHero(id))
    Promise.all(getHeros)
      .then((heros) =>
        setSlideData(
          heros.map((hero) => {
            return { name: hero.name, image: hero.image.url }
          })
        )
      )
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = (keyword: string) => {
    const baseURL = `https://www.superheroapi.com/api.php/${process.env.REACT_APP_API_TOKEN}/search/${keyword}`
    const init = {
      method: 'GET',
      mode: 'cors' as 'cors',
    }
    const myRequest = new Request(baseURL, init)
    return fetch(myRequest)
      .then((value) => value.json())
      .then((value) => {
        console.log(value)
        return value
      })
      .then((value: any) => {
        setResultList(value.results)
      })
  }
  return (
    <Generic
      header={
        <Header
          title="SuperHero Viewer"
          onValidateSuccess={handleSubmit}
        ></Header>
      }
      footer={
        <Footer
          title="SuperHero Viewer"
          description={
            <a href="https://www.superheroapi.com/">
              https://www.superheroapi.com/
            </a>
          }
        ></Footer>
      }
    >
      {!resultList && slideData && <Carousel slides={slideData}></Carousel>}
      {resultList && (
        <React.Fragment>
          <HeroList
            title="Result"
            showFav={false}
            heroDataList={resultList}
            handleItemClick={(id: number) => {
              setDialogOpen(true)
              setViewId(id)
            }}
            perPage={10}
            favList={[]}
          ></HeroList>
          {viewID > -1 && (
            <HeroDialog
              onClose={() => {
                setDialogOpen(false)
                setViewId(-1)
              }}
              open={dialogOpen}
              name={resultList[viewID].name}
              image={resultList[viewID].image.url}
              biography={resultList[viewID].work.base}
            ></HeroDialog>
          )}
        </React.Fragment>
      )}
    </Generic>
  )
}
