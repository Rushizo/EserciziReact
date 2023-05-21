import { useMemo } from "react";

const FilteredList = () => {

    let dataUsers = [
        {
          "id" : 1,
          "name" : "Marco Polo",
          "age" : 55
        },

        {
            "id" : 2,
            "name" : "Pippo Baudo",
            "age" : 33 
        },

        {
            "id" : 3,
            "name" : "Filippo Ancona",
            "age" : 12
        },

        {
            "id" : 4,
            "name" : "Alexander Sanso",
            "age" : 53
        },

        {
            "id" : 5,
            "name" : "Immacolata Vergine",
            "age" : 20
        },

        {
            "id" : 6,
            "name" : "Giuseppe Tradito",
            "age" : 20
        },

        {
            "id" : 7,
            "name" : "Giggino Maurizio",
            "age" : 56
        }
    ]

    const memoizeAdults = useMemo(() => dataUsers.filter(el => el.age > 18) , [dataUsers]);

    return(
        <>
        {memoizeAdults.map((arr) =>
        <div>
            <li>
            <h3>{arr.name}</h3>
            <div>id: {arr.id} - age: {arr.age}</div>
            <hr></hr>
            </li>
        </div>
        )}
        </>
    )
}

export default FilteredList