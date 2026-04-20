import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import KidRatStudioBanner from "@/components/banner"
import ServicesSection from "@/components/servicessection"
import Game from "@/components/game"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-black">
      <Header />
      <main>
        {/* Full-screen hero with value proposition */}
        <Hero />

        {/* Interactive gaming banner */}
        <section className="bg-black py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-[#e37403] text-xs font-bold uppercase tracking-widest mb-1">
                Zona interactiva
              </p>
              <p className="text-gray-600 text-sm">
                Pasa el cursor o toca para activar
              </p>
            </div>
            <KidRatStudioBanner />
          </div>
        </section>

        {/* What we build + Services */}
        <ServicesSection />

        {/* Game demo */}
        <section className="bg-[#080808] py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[#e37403] text-xs font-bold uppercase tracking-widest mb-3">
                Demo interactiva
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Kid Rat Sprint
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-md mx-auto">
                Una muestra de lo que podemos construir. Jugable aquí mismo, en el navegador.
              </p>
            </div>
            <Game />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
