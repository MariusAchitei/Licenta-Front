import backgroudImage from "assets/images/welcome-girl.png";
import logoImage from "assets/images/logo.png";

import { applicationName } from "utils/vars";

export default function Layout({children}){
    const divStyle = {
    backgroundImage: `url(${backgroudImage})`,
    backgroundSize: "contain", // Ensures the background covers the div
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundPosition: "center", // Centers the background image
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2 pula">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <div className="flex items-center justify-start">
            <img src={logoImage} className="w-20 h-20" alt="Clinic Care Logo" />
            <p className="text-5xl text-blue-500 font-bold ml-4">Clinic-Care</p>
          </div>
          <div className="min-h-lvh" style={divStyle}>
            {/* <img src={backgroudImage} alt="" /> */}
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out min-w-72 flex-1">
          <h2 className="mb-3 p-3 text-3xl font-bold text-pink-400">
            {applicationName}
          </h2>
          <div className="mb-3 inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <>
            {children}
          </>
        </div>
      </main>
    </div>
  );
}