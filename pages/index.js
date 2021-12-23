import GridLayout from "../layouts/GridLayout";
import Link from 'next/link'
import Hero from "../components/LandingPage/Hero";
import { useEffect, useState } from "react";
import Rings from "react-loading-icons/dist/components/rings";




export default function Index() {


  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    
    setLoading(true)
    const pageLoad = setTimeout(() => {
      setLoading(false)
      console.log("I stopped loading")
    }, 3500);
    return () => {
      clearTimeout(pageLoad)
    }
  }, [])


  return (
    <div>
      <GridLayout>
        {loading ? <Rings /> : <Hero />}
      </GridLayout>
    </div>
  );
}
