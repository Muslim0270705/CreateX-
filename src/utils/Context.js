import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext()

export const Context = (props) => {
    const [list,setList] = useState([])
    const [categories,setCategories] = useState([])
    const getProducts = () => {
        axios("http://localhost:8080/products")
            .then(res => setList(res.data))
            .catch(err => alert(err))
    }
    useEffect(() => {
        getProducts()
    }, []);
    const value = {
        list
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}