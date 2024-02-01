import { useState } from 'react'
const App = () => {
  const [name, setName] = useState("Name");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const [message, setMessage] = useState("Message");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const [networkProvider, setNetworkProvider] = useState("LTE");
  const handleNetworkProvider = (e) => {
    setNetworkProvider(e.target.value);
  };
  const [batteryPercent, setBatteryPercent] = useState(10);
  const handleBatteryPercent = (e) => {
    setBatteryPercent(e.target.value);
  };
  const [time, setTime] = useState("12.00 PM");
  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className='bg-emerald-600'>
      <h1 className='p-4 text-center text-4xl text-emerald-600 bg-white font-semibold'>FakeApp Chat</h1>
      <div className="bg-emerald-600 p-4 sm:grid sm:grid-cols-2 sm:gap-20 space-y-4">
        <div className="">
          <h4 className='p-2 sm:text-2xl text-xl font-semibold text-white'>Enter Your Details Below !!</h4>
          <div className="bg-emerald-200 p-10  space-y-5 shadow-xl rounded-lg">
            <div>
              <label className="block">Select Network Provider</label>
              <select
                onChange={handleNetworkProvider}
                className="border border-gray-300 px-4 py-1 rounded outline-none w-full"
              >
                <option>--select--</option>
                <option value={"LTE"}>LTE</option>
                <option value={"3G"}>3G</option>
                <option value={"2G"}>2G</option>
              </select>
            </div>
            <div>
              <label className="block">Battery Percentage</label>
              <input
                type="range"
                onChange={handleBatteryPercent}
                min={0}
                max={100}
                value={batteryPercent}
                step={1}
                className="w-full"
              />
            </div>
            <div>
              <label className="block">Time</label>
              <input
                className="border border-gray-300 px-4 py-1 rounded outline-none "
                placeholder="time"
                onChange={handleTime}
              />
            </div>
            <div>
              <label className="block">Name</label>
              <input
                className="border border-gray-300 px-4 py-1 rounded outline-none w-full"
                placeholder="name"
                onChange={handleName}
              />
            </div>
            <div>
              <label className="block">Message</label>
              <textarea
                className="border border-gray-300 px-4 py-1 outline-none w-full"
                placeholder="message"
                onChange={handleMessage}
              />
            </div>

          </div>
        </div>


        <div className="bg-slate-200 border-black rounded-2xl max-w-md">
          <div className="bg-emerald-800  rounded-t-2xl p-1 pl-4 pr-4 flex items-center justify-between">
            <h4 className="font-semibold text-xs text-white">{time}</h4>
            <div className="flex justify-between items-center space-x-4 hover:cursor-pointer">
              <div className='flex text-xs text-white justify-center items-center'>
                <p>{networkProvider}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white  fill-current w-4"><path d="M6.5 20q-.625 0-1.062-.437T5 18.5v-3q0-.625.438-1.062T6.5 14q.625 0 1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20m6 0q-.625 0-1.062-.437T11 18.5v-8q0-.625.438-1.062T12.5 9q.625 0 1.063.438T14 10.5v8q0 .625-.437 1.063T12.5 20m6 0q-.625 0-1.062-.437T17 18.5v-13q0-.625.438-1.062T18.5 4q.625 0 1.063.438T20 5.5v13q0 .625-.437 1.063T18.5 20" /></svg>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white  fill-current w-4"><path d="M12 21L0 9q2.375-2.425 5.488-3.713T12 4q3.425 0 6.525 1.275T24 9zM4.35 10.5q1.675-1.2 3.625-1.85T12 8q2.075 0 4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6q-2.475 0-4.8.775T2.9 9.05z" /></svg>
              <div className='flex text-xs text-white justify-center items-center space-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 14 14" className="text-white fill-current w-4"><path stroke="#888888" stroke-linecap="round" stroke-linejoin="round" d="M13.5 5.5A.5.5 0 0 0 13 5h-1V4a1 1 0 0 0-1-1H1.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1V9h1a.5.5 0 0 0 .5-.5Zm-10.25 0v3m3-3v3m3-3v3" /></svg>
                <p>{batteryPercent}%</p>
              </div>
            </div>
          </div>
          <ul className="bg-emerald-800 p-1 pl-4 pr-4 text-white flex justify-between items-center space-x-4">
            <li className=" flex items-center justify-center space-x-2 pb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white fill-current w-5"><path d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z" /></svg>
              <img className="rounded-full w-10" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile-pic" />
              <h4 className="">{name ? name : "Name"}</h4>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white fill-current w-5"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l2.29 2.29c.63.63 1.71.18 1.71-.71V8.91c0-.89-1.08-1.34-1.71-.71z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-white fill-current w-5"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className="text-white fill-current w-5"><path d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28-52a28 28 0 1 0-28-28a28 28 0 0 0 28 28m0 104a28 28 0 1 0 28 28a28 28 0 0 0-28-28" /></svg>
            </li>
          </ul>
          <section className="bg-cover bg-slate-200 rounded-b-lg p-2">
            <div className='mt-72'>
              <div className="flex items-center justify-end space-x-2 p-3 pr-10 bg-emerald-300 rounded-l-3xl rounded-b-3xl ml-24 shadow-lg ">{message ? message : "Type your message"}</div>
              <div className="flex items-center justify-start space-x-2 pt-4">
                <div className="p-2 w-full bg-white rounded-3xl flex items-center justify-between">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" className=" fill-current w-6 text-slate-400"><path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M80 108a12 12 0 1 1 12 12a12 12 0 0 1-12-12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-1.07 48c-10.29 17.79-27.4 28-46.93 28s-36.63-10.2-46.92-28a8 8 0 1 1 13.84-8c7.47 12.91 19.21 20 33.08 20s25.61-7.1 33.07-20a8 8 0 0 1 13.86 8" /></svg>
                  <div className="flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className=" fill-current w-6 text-slate-400"><path d="M14 1a5 5 0 0 0-5 5v10a3 3 0 0 0 3 3a2.991 2.991 0 0 0 2.99-3V6H13v10a1 1 0 1 1-2 0V6a3 3 0 1 1 6 0v10.125C17 18.887 14.762 21 12 21a5 5 0 0 1-5-5v-5H5v5a7 7 0 0 0 7 7a6.991 6.991 0 0 0 6.99-7V6c0-2.762-2.228-5-4.99-5" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className=" fill-current w-6 text-slate-400"><circle cx="12" cy="12" r="3.2" /><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5" /></svg>

                  </div>
                </div>
                <div className="bg-emerald-800 p-2 rounded-full items-center justify-end"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className=" fill-current w-6 text-white"><path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3m6.08-3c-.42 0-.77.3-.83.71c-.37 2.61-2.72 4.39-5.25 4.39s-4.88-1.77-5.25-4.39a.839.839 0 0 0-.83-.71c-.52 0-.92.46-.85.97c.46 2.97 2.96 5.3 5.93 5.75V21c0 .55.45 1 1 1s1-.45 1-1v-2.28c2.96-.43 5.47-2.78 5.93-5.75a.857.857 0 0 0-.85-.97" /></svg></div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div className="mt-4 lg:mx-0 p-4  text-center sm:text-md text-sm font-semibold text-emerald-800 bg-gradient-to-r bg-white sm:flex justify-between items-center">
          <div>
            <p>Designed by <span class="text-emerald-800 font-semibold underline">Swetha Ramesh </span> for CyberDude
              Networks Internship programme</p>
          </div>
          <div className="flex gap-x-3 justify-center">
            <a href="https://github.com/SwethaDSalvatore/" target="_blank" class="">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                class="fill fill-current w-7 text-emerald-800 hover:text-neutral-400 hover:cursor-pointer">
                <path fill-rule="evenodd"
                  d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
