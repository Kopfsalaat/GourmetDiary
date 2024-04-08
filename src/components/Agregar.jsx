import Footer from "components/Navigation/Footer"
import NavBar from "components/Navigation/NavBar"
import Layout from "hocs/Layouts/Layout"

function Agregar(){
    return(
        <Layout>
            <NavBar/>
                <section className="py-16 ">
                    <h1 className="text-center font-bold pt-16 pb-4 text-secondary text-lg">Agregar Nuevo Restaurante</h1>
                    <form className="max-w-md mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="name" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre Restaurante</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="ubication" name="floating_ubication" id="floating_ubication" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_ubication" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ubicación</label>
                        </div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Categoría de Comida</label>
                        <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option>Selecciona una categoría</option>
                            <option>Japonesa</option>
                            <option>Hamburguesas</option>
                            <option>Italiana</option>
                            <option>Pescados y Mariscos</option>
                        </select>
                        <div className="pt-4">
                            <button type="submit" className="inline-flex justify-center hover:text-primary items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-secondary rounded-lg border border-white hover:bg-secondary transition duration-300 focus:ring-4 focus:ring-primary">Guardar</button>
                        </div>
                    </form>
                </section>
            <Footer/>
        </Layout>
    )
}
export default Agregar;