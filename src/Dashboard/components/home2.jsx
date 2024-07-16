import React from 'react';

const Home = () => {
  return (
    <div className="bg-purple-50 p-5">
      <h1 className="text-3xl font-bold mb-4">Good Morning Jefy,</h1>
      
      <div className="flex mb-4">
        <span className="text-purple-600 mr-4">Shortcuts</span>
        <button className="mr-2">Male Registration</button>
        <button className="mr-2">Female Registration</button>
        <button>+ Add Section</button>
      </div>
      
      <div className="flex space-x-4">
        <UpcomingAppointments />
        {/* <ExpiringCryo />
        <MachineriesOverview /> */}
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
          <img src="placeholder-avatar.jpg" alt={appointment.name} className="w-10 h-10 rounded-full mr-3" />
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



// const ExpiringCryo = () => {
//   // Component implementation
// };

// const MachineriesOverview = () => {
//   // Component implementation
// };

export default Home;