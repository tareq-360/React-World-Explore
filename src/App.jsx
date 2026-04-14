import Countries from './components/countries/countries'
import './App.css'
import { Suspense } from 'react'


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())
function App() {

  return (
    <>

      <h1>Get started</h1>
      <Suspense fallback={<p>Countries is loading....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>



    </>
  )
}

export default App
