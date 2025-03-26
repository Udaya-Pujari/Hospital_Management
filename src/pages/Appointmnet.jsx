// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointmnet = () => {
  const [docInfo, setDocInfo] = useState(null);
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  // console.log("=====", doctors);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log("docInfo=>", docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* ---------------doc details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* ------docinfo----------------- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/* ----doc about */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p>
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees + "0"}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointmnet;

// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Appointment = () => {
//   const [docInfo, setDocInfo] = useState(null); // Initialize as null
//   const { docId } = useParams();
//   const { doctors } = useContext(AppContext);

//   const fetchDocInfo = () => {
//     const doc = doctors.find((doc) => doc._id === docId);
//     setDocInfo(doc); // Update state with doctor info
//     console.log("docInfo=>", doc);
//   };

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]); // Run when doctors or docId changes

//   // Conditional rendering to avoid accessing properties of null
//   if (!docInfo) {
//     return <div>Loading...</div>; // You can replace this with a spinner or message
//   }

//   return (
//     <div>
//       <div>
//         <div>
//           <img src={docInfo.image} alt={docInfo.name} />
//           <h1>{docInfo.name}</h1>
//           <p>{docInfo.speciality}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;
