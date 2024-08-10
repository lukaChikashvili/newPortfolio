import { createContext, useState } from "react";



export const UserContext = createContext();


const UserProvider = ({ children }) => {

     // show image modal
     const [modal, setModal] = useState(false);

     // change models
     const [violin, setViolin] = useState(false);
     const [drum, setDrum] = useState(true);
     const [ukulele, setUkulele] = useState(true);
    return (
        <UserContext.Provider value={{ modal, setModal, violin, setViolin, drum, setDrum, ukulele, setUkulele }}> 
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider