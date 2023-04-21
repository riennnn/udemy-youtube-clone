import React, {useContext, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideGridItem from '../components/VideoGridItem/VideGridItem'

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data',res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title} />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top
