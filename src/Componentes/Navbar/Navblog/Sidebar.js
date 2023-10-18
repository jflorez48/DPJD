import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-2xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <div >
           
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="  z-30 flex items-center cursor-pointer right-10 top-6"
            fill="#0F1E83"
            viewBox="0 0 100 80"
            width="30"
            height="30"
          >
            <rect width="100"  height="10"></rect>
            <rect y="30"  width="100" height="10"></rect>
            <rect y="60" width="100"  height="10"></rect>
          </svg>{" "}
          
        </div>
      )}

      <div
        className={`top-0 right-0 w-[25vw] bg-color-pastor p-5 pl-10 text-white  fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-2xl font-semibold text-white">temas</h3>
      </div>
    </>
  );
};

export default Sidebar;
