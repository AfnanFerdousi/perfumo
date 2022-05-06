import { useEffect, useState } from "react";

const useItemDetail = (itemId) => {
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`https://arcane-retreat-77656.herokuapp.com/item/${itemId}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return [item, setItem]
}


export default useItemDetail;
