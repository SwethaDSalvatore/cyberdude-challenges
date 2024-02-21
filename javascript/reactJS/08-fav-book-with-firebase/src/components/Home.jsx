import React from 'react'

const Home = () => {
  return (
    <div>
      <main className="sm:grid sm:grid-cols-2 justify-center items-center p-4 ">
        <div className=" font-custom text-black sm:pl-5 space-y-4 text-center">
          <h1 className=" text-xl">
            Unlock the World of Words with{" "}
            <span className="text-xl font-custom text-red-400 font-semibold">Bookiee</span>
          </h1>
          <h1 className="text-xl">
            Your Gateway to Infinite Stories and Endless Adventures
          </h1>
          <button className="px-4 py-2 rounded-lg text-md bg-red-400 hover:bg-red-500 text-white">Donate</button>
        </div>
        <div className="flex justify-end">
          <img
            src="https://i.pinimg.com/564x/39/d3/39/39d33958bb8d034b21817de301a7f1c0.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}

export default Home
