import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  const [images, setImages] = useState([])
  const [page, setPage]= useState(2)
  const [loading, setLoading] = useState(false)
  const loaderRef = useRef()

  const fetchImages = async (index) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`
      const result = await fetch(url)
      const data = await result.json()
      return data
    } catch (error) {
      console.log("Error:", error)
    }
  }

  const fetchFirstPage = async () => {
    const data = await fetchImages(1)
    setImages(data)
  }

  useEffect(() => {
    fetchFirstPage()
  }, [])

  const getData = useCallback(async()=>{
    if(loading){
      return
    }
    setLoading(true)
    const data = await fetchImages(page)
    setImages((...prevImg) => [...prevImg, ...data])
  },[page, loading])
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      const target = enteries[0];
      if(target.isIntersecting){
        //call next page data
        getData()
      }
    })

    if(loaderRef.current){
      observer.observe(loaderRef.current)
    }

    return () => {
      observer.unobserve(loaderRef.current)
    }
  }, [])

  console.log("images", images.thumbnailUrl)

  return (
    <>
      <h1>Infinite Scrolling</h1>
      {
        images.map((image, idx) => (
          <div key={idx}>
            <p>{image.title}</p>
            <img alt={image.title} src={image.thumbnailUrl} />
          </div>
        ))
      }
      <div ref={loaderRef}></div>
    </>
  )
}

export default App
