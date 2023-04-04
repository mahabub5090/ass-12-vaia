import { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [IsBuyer, setIsBuyer] = useState(false)
    const [IsBuyerLoading, setBuyerLoading] = useState(true)
    useEffect(() => {
        fetch(`https://resala-server.vercel.app/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data.role)
                setBuyerLoading(false)
            })
    }, [email])
    return [IsBuyer, IsBuyerLoading]
};

export default useBuyer;