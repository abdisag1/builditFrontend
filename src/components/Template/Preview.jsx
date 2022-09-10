import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import axiosInstanceapi from "../../axiosApi";


function Preview() {

    const [tempprev, setTemp] = useState([])
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        axiosInstanceapi.get(`templete-detail/${id}/`).then((response) => {
            console.log(response.data[0])
            const html = response.data[0].html

            const css = response.data[0].css
            const temp = `${html}<style>${css}</style>`
            setTemp(temp)
            console.log(tempprev)

        })
    }, [])

    return ( <div >
        <div dangerouslySetInnerHTML = {
            { __html: tempprev } }
        /> </div>
    )
}

export default Preview