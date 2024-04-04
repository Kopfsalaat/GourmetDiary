import { connect } from 'react-redux';

function Navbar(){
    return(
        <nav className='w-full py-10 px-10 shadow-md fixed'>
            Navbar
        </nav>
    )
}

const mapStateToProp = state =>({

})

export default connect(mapStateToProp,{

}) (Navbar)