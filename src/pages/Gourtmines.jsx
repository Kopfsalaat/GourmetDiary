import React, {
    useState,
    useEffect
} from 'react'
import {
    getRestaurantes
} from '../components/services/restaurantes'

import Footer from "components/Navigation/Footer"
import NavBar from "components/Navigation/NavBar"
import Layout from "hocs/Layouts/Layout"
import ListaRestaurantes from "components/ListaRestaurantes"

const Gourtmines = () => {
    const [restaurantes, setRestaurantes] = useState(null)

    useEffect(() => {
        fetchRestaurantes()
    }, [])

    const fetchRestaurantes = () => {
        setRestaurantes(null)
        getRestaurantes().then(response => {
            setRestaurantes(response)
        }).catch(error => {
            setRestaurantes([])
        })
    }

    return(
        <>
            <Layout>
                <NavBar/>
                    <section className="bg-quinary">
                        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                            <h1 className="pt-16 mb-4 text-4xl font-extrabold tracking-tight leading-none text-secondary md:text-5xl lg:text-6xl">¡Aqui comienza nuestra aventura gastronómica!</h1>
                        </div>
                    </section>
                    <section className="container mx-auto my-6">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="pb-4 grid grid-cols-2">
                                <div className="justify-self-start">
                                    <label htmlFor="table-search" className="sr-only text-secondary">Search</label>
                                    <div className="relative mt-1">
                                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                            <svg className="w-4 h-4 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                            </svg>
                                        </div>
                                        <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-secondary border border-secondary rounded-lg w-80 bg-gray-50 focus:ring-tertiary focus:border-tertiary" placeholder="Buscar..."/>
                                    </div>
                                </div>
                                <div className="justify-self-end">
                                    <a href="/Gourtmines/Agregar" className="inline-flex justify-center hover:text-primary items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-secondary rounded-lg border border-white hover:bg-secondary transition duration-300 focus:ring-4 focus:ring-primary">
                                        Agregar
                                    </a>
                                </div>
                            </div>
                            <ListaRestaurantes restaurantes={restaurantes} fetchRestaurantes={fetchRestaurantes}/>
                        </div>
                    </section>
                <Footer/>
            </Layout>
        </>
    )
}
export default Gourtmines;