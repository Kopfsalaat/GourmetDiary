import { connect } from 'react-redux'

function Layout({children}){
    return(
        <div className="!scroll-smooth">
            {children}
        </div>
    )
}

const mapStateToProp = state =>({
    
})

export default connect(mapStateToProp,{

}) (Layout)