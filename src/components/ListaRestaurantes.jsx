import { useState } from "react";
import {
    deleteRestaurante,
    update
} from './services/restaurantes'

const ListaRestaurantes = ({
    restaurantes,
    fetchRestaurantes
}) => {
    console.log(restaurantes)
    const [ option, setOptions ] = useState(null)
    const [ editing, setEditing ] = useState(null)
    const toggleRestaurante = (restaurantes) => {
        restaurantes.ListaRestaurantes = !restaurantes.ListaRestaurantes
        update(restaurantes).finally(() => fetchRestaurantes(), setOptions(null))
    }

    const eliminar = (id) => {
        if (window.confirm('¿Estas seguro que quieres eliminar este restaurante de la lista?')){
            deleteRestaurante({ id 
        }).then(response => {
            if (response.status === 'success'){
                alert('Restaurante eliminado correctamente')
            }
        }).finally(() => fetchRestaurantes(), setOptions(null))
        }
    }

    const mappingRestaurantes = () => (
        (!restaurantes)
            ? Array.from({ length: 5}).map((_, index) => (
                <table key={index} className="w-full text-sm text-left rtl:text-right text-secondary">
                    <thead className="text-xs text-secondary uppercase bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Visitado
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Ubicación
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Categoría
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Calificación
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Acción
                            </th>
                        </tr>
                    </thead>
                </table>
            ))
            : restaurantes?.map((restaurantes, index) => (
                <table key={restaurantes.id} className="w-full text-sm text-left rtl:text-right text-secondary">
                    <thead className="text-xs text-secondary uppercase bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Visitado
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Ubicación
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Categoría
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Calificación
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary font-bold text-sm">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b hover:bg-gray-50">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input type="checkbox" checked={restaurantes.visited} onChange={() => toggleRestaurante} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"/>
                                </div>
                            </td>
                            <th id={'titulo-restaurante-${restaurantes.id}'} type="text" scope="row"  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" value={restaurantes.name} diabled={true}>
                                
                            </th>
                            <td type="text" value={restaurantes.ubication} className="px-6 py-4">
                                
                            </td>
                            <td type="text" value={restaurantes.categoria} className="px-6 py-4">
                                
                            </td>
                            <td type="text" value={restaurantes.rate} className="px-6 py-4">
                            
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => eliminar(restaurantes.id)}>
                                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <p>Eliminar</p>
                                    </div>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))
    )
    return(
        <>
            <div>
                <div>{mappingRestaurantes()}</div>
            </div>
        </>
    )
}
export default ListaRestaurantes;