
import { Navigate } from 'react-router-dom';


const ProtectedRoute = (props) => {
    console.log("props", props);
    const Component = props.element
    // const currentUser = props.currentUser
    return   (  
        <>
            < Component />
        </>
    // <Navigate to ="/" /> 
    )
    
    
  };


export default ProtectedRoute