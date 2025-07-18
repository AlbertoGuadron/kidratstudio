import Header from "@/components/header"
import Footer from "@/components/footer"
import HomePage from "@/components/home"
import KidRatStudioBanner from "@/components/banner"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header/>
      <main>
        <KidRatStudioBanner/>
      </main> 
      <Footer/>
    </div>
  )
}