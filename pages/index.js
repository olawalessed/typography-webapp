import GridLayout from "../layouts/GridLayout";
import Link from 'next/link'
import Hero from "../components/LandingPage/Hero";
import { useEffect, useState } from "react";
import LoadingIcons from "react-loading-icons";

export default function Index() {


  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    
    setLoading(true)
    const pageLoad = setTimeout(() => {
      setLoading(false)
      console.log("I stopped loading")
    }, 5000);
    return () => {
      clearTimeout(pageLoad)
    }
  }, [])


  return (
    <GridLayout>
      <Hero />
    </GridLayout>
  );
}
