import { useEffect, useState } from "react";

const useItemDetail = (itemId) => {
    const [item, setItem] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/item/${itemId}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return [item, setItem]
}


export default useItemDetail;
