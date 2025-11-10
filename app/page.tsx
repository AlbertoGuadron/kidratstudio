import Header from "@/components/header"
import Footer from "@/components/footer"
import KidRatStudioBanner from "@/components/banner"
import ServicesSection from "@/components/servicessection"
import Game from "@/components/game"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header/>
      <main>
        <KidRatStudioBanner/>
        <ServicesSection/>
        <Game/>
      </main> 
      <Footer/>
    </div>
  )
}