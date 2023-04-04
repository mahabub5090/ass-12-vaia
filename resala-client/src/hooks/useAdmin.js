import { useEffect, useState } from 'react';

const useAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState('')
    const [isAdminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`https://resala-server.vercel.app/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.role)
                setAdminLoading(false)
            })
    }, [email])
    return [isAdmin, isAdminLoading]
};

export default useAdmin;