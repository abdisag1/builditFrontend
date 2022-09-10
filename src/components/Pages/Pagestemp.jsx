import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import axiosInstanceapi from "../../axiosApi";

import "../Template/Template.css";
import img from "../../assets/photo-1496181133206-80ce9b88a853.avif";
import edit from "../../assets/icons8-edit-30.png";
import delet from "../../assets/icons8-delete-30.png";
// import Maptemp from './maptemp'

function TemplateCard() {
  const [temp, setTemp] = useState([]);

  const { id } = useParams();
  // const [csst, setCsst] = useState('')
  // const [pageid, setPageid] = useState('')

  useEffect(() => {
    axiosInstanceapi.get(`page-list/`).then((response) => {
      const res = response.data;
      console.log(res);
      setTemp(res);
      // console.log(temp)
      // return res
    });
    // setTemp(res)
  }, []);

  // const handleDelet = (id) => {
  //     axios.delete(`http://localhost:8000/page-delete/${id}`).then((response) => {
  //         // alert(response)
  //     })

  // }

  const handleDelet = async (id) => {
    try {
      const res = await axiosInstanceapi
        .delete(`page-delete/${id}`)
        .then(() => {
          axiosInstanceapi.get("page-list/").then((response) => {
            const res = response.data;
            console.log(res);
            setTemp(res);
            // console.log(temp)
            // return res
          });
        });
      console.log("Item successfully deleted.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-between mt-3">
          <h1 className=" text-black  px-5">my pages </h1>
          <Link to="./editor">
            <button
              type="button"
              className="inline-block px-6 py-2.5  text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] btn-card absolute z-5 right-0"
            >
              Add
            </button>
          </Link>
        </div>
        {/* <iframe src="https://www.youtube.com/watch?v=AfYfvjP1hK8" width={1000} height={500} sandbox='allow-scripts allow-modal' loading='eager' title='ifr'></iframe> */}
        <div className="mx-auto max-w-2xl py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-2 ">
            {temp.map((item) => (
              <div key={item.id} className="group">
                <div className="  aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 l:aspect-w-7 xl:aspect-h-8 temp-card relative !important"  >
                  {/* <div
                    className="contain absolute !important right-0 left-0"
                    dangerouslySetInnerHTML={{
                      __html: `${item.html}<style>${item.css}</style>`,
                    }}
                  /> */}
                   

                   {/* <img className='object-cover mx-auto mt-2 ' src='''https://source.unsplash.com/random' alt=''></img>  */}
                   <img className='object-cover mx-auto mt-2 temp-card ' src={item.img_url} alt=''></img> 
                   {console.log(item)}
                   

                   {/* https://postimg.cc/mPQCg1Bp */}
                  {/* {
                                        item.page_pic
                                    } */}
                </div>

                <div className="flex justify-between mt-2">
                  <Link to={`/previewp/${item.id}`}>
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5  text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow] btn-card"
                    >
                      preview
                    </button>
                  </Link>
                  <div className="flex mx-2">
                    <Link to={`/editor/${item.id}`}>
                      <img src={edit} alt=""></img>
                    </Link>

                    <img
                      src={delet}
                      alt=""
                      onClick={() => handleDelet(item.id)}
                    ></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TemplateCard;
