"use client"
import React, { createContext, useState } from "react";
export const FilterContext = createContext();
export default function FilterContextProvider({ children }) {
    const [filterr, setFilter] = useState([]);
    return (
        <FilterContext.Provider value={{ filterr, setFilter }}>
            {children}
        </FilterContext.Provider>
    )
}