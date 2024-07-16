import React from 'react';
import img from "../../assets/person.png"
const Home = () => {
  return (
    <div className="bg-purple-50 p-5">
      <div className="bg-white p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Good Morning Jefy,</h1>

    <div className="flex items-center mb-4">
      <span className="text-purple-600 mr-4">Shortcuts</span>
      <button className="mr-2 px-4 py-2  text-[#5B5B5B]  shadow-md border border-[#44148D4D]  rounded-[24px]">Male Registration</button>
      <button className="mr-2 px-4 py-2  text-[#5B5B5B]  shadow-md border border-[#44148D4D] rounded-[24px]">Female Registration</button>
      <button className="mr-2 px-4 py-2  text-[#5B5B5B]  shadow-md border border-[#44148D4D] rounded-[24px]">Add Section</button>
    </div>
  </div>

      <div className="grid grid-cols-12 gap-5 mt-10">
        <div className='col-span-6'>
        <UpcomingAppointments />

        </div>
        <div className='col-span-3'>
        <ExpiringCryo />
        </div>
        <div className='col-span-3'>
        <MachineriesOverview />
        </div>
       
       
      </div>
    </div>
  );
};



const UpcomingAppointments = () => {
  const appointments = [
    {
      name: "Kiran Kuram",
      age: 32,
      gender: "Male",
      id: "9876723654",
      consultant: "Dr. Krishnna prasadh",
      department: "General Medicine",
      time: "12:30 am"
    },
    {
      name: "Mark Antony",
      age: 32,
      gender: "Male",
      id: "9876723654",
      consultant: "Dr. Krishnna prasadh",
      department: "General Medicine",
      time: "11:45 am"
    }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        <button className="text-sm text-gray-500">See All</button>
      </div>
      <div className="text-sm text-gray-500 mb-2">Today (3)</div>
      {appointments.map((appointment, index) => (
        <div key={index} className="flex items-center mb-4">
          <img src={img} alt={appointment.name} className="w-10 h-10 rounded-full mr-3" />
          <div className="flex-1">
            <div className="font-semibold">{appointment.name}</div>
            <div className="text-sm text-gray-500">
              {appointment.age}, {appointment.gender} • {appointment.id}
            </div>
            <div className="text-sm text-gray-500">{appointment.consultant}</div>
            <div className="text-sm text-gray-500">{appointment.department}</div>
          </div>
          <div className="bg-purple-200 text-purple-700 px-3 py-1 rounded">
            {appointment.time}
          </div>
        </div>
      ))}
    </div>
  );
};



const ExpiringCryo = () => {
  const data = [
    { type: 'Embryo', annualRenewal: 9, storageExpiry: 0 },
    { type: 'Sperm', annualRenewal: 7, storageExpiry: 3 },
    { type: 'Oocyte', annualRenewal: 4, storageExpiry: 0 },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Expiring Cryo</h2>
        <button className="text-sm text-gray-500">See All</button>
      </div>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-purple-600 font-semibold">{item.type}</h3>
          <div className="mt-2">
            <a href="#annual-renewal" className="flex justify-between items-center bg-purple-100 rounded-lg p-2 text-gray-700 text-sm mb-2">
              Due For Annual Renewal
              <span className="bg-purple-200 text-purple-700 rounded-full px-3 py-1 text-sm">{item.annualRenewal}</span>
            </a>
          </div>
          <div className="mt-2">
            <a href="#storage-expiry" className="flex justify-between items-center bg-purple-100 rounded-lg p-2 text-gray-700 text-sm">
              Due For Storage Expiry
              <span className="bg-purple-200 text-purple-700 rounded-full px-3 py-1 text-sm">{item.storageExpiry}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};




const MachineriesOverview = () => {
  const machines = [
    {
      category: "Total Machines",
      count: 13,
    },
    {
      category: "Machines Under Maintenance",
      count: 3,
      subcategories: [
        "Embryo Scopes",
        "Sperm Analyzers",
        "Centrifuges",
      ],
    },
    {
      category: "Upcoming Maintenance",
      count: 4,
    },
    {
      category: "Last Maintenance Date",
      date: "02 - 07 - 2024",
      item: "Microscopes",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Machineries Overview</h2>
        <button className="text-sm text-gray-500">See All</button>
      </div>
      {machines.map((machine, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center bg-purple-50 p-2 rounded-lg">
            <div className="text-purple-600">{machine.category}</div>
            {machine.count !== undefined && (
              <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                {machine.count}
              </div>
            )}
          </div>
          {machine.subcategories && (
            <div className="ml-4 mt-2 text-gray-500">
              {machine.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="mb-1">
                  {subcategory}
                </div>
              ))}
            </div>
          )}
          {machine.date && (
            <div className="flex justify-between items-center mt-2 text-gray-500">
              <div>{machine.item}</div>
              <div>{machine.date}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};


export default Home;