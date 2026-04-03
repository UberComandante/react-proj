import { useState } from "react"

const useSbor = (callback) => {
    const [loader, setLoader] = useState(true)
    const [error, setError] = useState('')

    const sborka = async (p) => {
        try {           
            await callback(p)
        } 
        catch (e) {
            setError(e.message);
        }
        finally {
            setLoader(false)
        }

        
    }
    return [sborka, loader, error]
}

export default useSbor;