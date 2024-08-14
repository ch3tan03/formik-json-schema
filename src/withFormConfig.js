import React from 'react'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SchemaContext = React.createContext({});
export const SchemaProvider = ({ value, children }) => (
    <SchemaContext.Provider value={ value }>
        { children }
        <ToastContainer />
    </SchemaContext.Provider>
);

const withFormConfig = WrappedComponent => props => (
    <SchemaContext.Consumer>
        { config => <WrappedComponent { ...props } { ...config } /> }
      
    </SchemaContext.Consumer>
);

export default withFormConfig
