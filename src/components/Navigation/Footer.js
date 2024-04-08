import { connect } from 'react-redux';
import Logo from '@/../assets/images/logo.png';

function Footer(){
    return(
        <footer className="bg-primary rounded-lg shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-36" alt="GD Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Gourmet Diary</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="/" className="text-secondary hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="/Gourtmines" className="text-secondary hover:underline me-4 md:me-6">Gourtmines</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="text-secondary block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="text-secondary hover:underline">Gourmet Diary. </a>Todos los derechos reservados.</span>
            </div>
        </footer>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

}) (Footer)