import React, { useEffect, useState } from "react";
import useSbor from "../components/hooks/useSbor";
import { useParams } from "react-router-dom";
import PostService from "../APIs/Postservice";

const PostPage = () => {
    const params = useParams()
    const [idSost, setIdSost] = useState({})

    const [sborka, loader, error] = useSbor( async (id) => {
        const responce = await PostService.getID(id)
        setIdSost(responce.data)
    })

    useEffect(() => {
        sborka(params.id)
    }, [])

  return (
    <div>
        { idSost && <h2>You are here! ID = {params.id} + {idSost.title ? idSost.title : <span>Wait for it...</span> }</h2> }
    </div>
  )
}

export default PostPage;