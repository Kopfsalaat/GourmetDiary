import NavBar from "components/Navigation/NavBar"
import Footer from "components/Navigation/Footer"
import Layout from "hocs/Layouts/Layout"
import avatar from "assets/images/avatar.jpg"
import { Link } from 'react-router-dom'
import { useRef } from 'react'

function Home(){
    const about = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        })
    }
    return(
        <Layout>
            <NavBar/>
                <section className="bg-tertiary pt-24">
                    <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-52 md:py-32 py-28">
                        <h1 className="text-primary mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">¡Bienvenidos Genomines!</h1>
                        <p className="text-primary mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Acompañenme en esta deliciosa aventura ¡La Ruta Gourtnomina!</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="/Gourtmines" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded-lg hover:text-primary">
                                Ver Ruta
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                            <Link onClick={() => scrollToSection(about)} className="inline-flex justify-center hover:text-primary items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-secondary rounded-lg border border-white hover:bg-secondary transition duration-300 focus:ring-4 focus:ring-primary">
                                Sobre mi
                            </Link>  
                        </div>
                    </div>
                </section>
                <section ref={about} className="bg-quaternary">
                    <div className="grid grid-rows-3 grid-flow-col place-content-center px-4 mx-auto max-w-screen-xl text-center md:py-32">
                        <div className="col-span-2">
                            <h1 className="text-4xl font-bold text-secondary pt-10">¡Hola Genomines!</h1>
                        </div>
                        <div className="row-span-2 col-span-2">
                            <h2 className="text-xl">Soy Genomina, una apasionada por la comida y los viajes. En mi canal, comparto experiencias únicas probando la gastronomía de diferentes partes del mundo. Desde los puestos callejeros más humildes hasta los restaurantes más exclusivos, los invito a acompañarme en este emocionante viaje lleno de sabores, aromas y culturas. ¡Vengan y descubran conmigo el mundo a través del paladar!</h2>
                        </div>
                        <a className="row-span-3 mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse pb-10 md:">
                            <img src={avatar} alt="avatar"/>
                        </a>
                    </div>
                </section>
            <Footer/>
        </Layout>
    )
}
export default Home;