import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvidor = (props) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    
    useEffect(() => {
        fetch("/api/products")
        .then(res => res.json())
          .then(data =>{
            setProducts(data);
            setproductsOrigin(data);
            setCategories(Object.keys(groupBy(data, 'category')));
             });
      },[]);

      const contexValus = {user, setUser, isAuthenticated, setIsAuthenticated};

    return(
        <AuthContext.Provider value={contexValus}>
            {props.children}
        </AuthContext.Provider>
    )

};

}