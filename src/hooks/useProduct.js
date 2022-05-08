import { useEffect, useState } from "react";

const useProduct = () => {
    const [ productId, setProductId] = useState("");

    const deleteProduct = (id) =>{

        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaning = services.filter(service=>id!==service._id);
                setServices(remaning);
            })
        }
    }
};

export default useProduct;