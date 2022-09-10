// UserDetailsProvider.js

import { createContext, useState } from 'react';

//create a context, with createContext api
export const userDetailsContext = createContext(false);

const UserDetailsProvider = (props) => {
    // this state will be shared with all components 
    const [islogd, setIsloged] = useState();

    return (
        // this is the provider providing state
        <userDetailsContext.Provider value={[islogd, setIsloged]}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;