import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaAmbulance, FaPlane, FaUserFriends } from 'react-icons/fa';

export const Seeprices = () => {
  const location = useLocation();

  const { pickup, drop } = location.state || { pickup: '', drop: '' };
  const [service, setservice] = useState("Ambulance");
  const services = [
    {
      type: 'Ambulance',
      src: "/images/ambulance.jpg",
      capacity: '3 (1-Patient , 2-Family Member)',
      time: '5 mins away',
      description: 'Affordable and compact rides',
      price: 2000,
    },
    {
      type: 'Air Ambulance',
      src: "/images/air_ambulance.jpg",
      capacity: '4 (1-Patient , 3-Family Member)',
      time: '15 mins away',
      description: 'Fast and reliable air transport',
      price: 10000,
    },
  ];

  const handleServiceClick = (serviceType) => {
    console.log(`Selected service: ${serviceType}`);
    setservice(serviceType)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width container */}
      <div className="container mx-auto p-8">
        {/* Flex container for map and services */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section (Left Side) */}
          <div className="lg:w-1/2">
            <img
              src="/images/map.png"
              alt="Map"
              className="w-full rounded-lg"
            />
          </div>

          {/* Service Options Section (Right Side) */}
          <div className="lg:w-1/2 flex flex-col gap-8 w-full">
            <div className="text-5xl font-bold p-10 text-gray-800 self-center">Gathering options</div>
            <div className="space-y-6">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="flex items-center  p-6 rounded-lg shadow-sm hover:shadow-md hover:border-2 transition-shadow duration-300 w-full text-left"
                  style={{
                    backgroundColor: 'white', // White background
                    border: '1px solid transparent', // Transparent border by default
                    transition: 'border-color 0.3s ease', // Smooth transition for border color
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'black'} // Add black border on hover
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'} // Revert to transparent border
                  onClick={() => handleServiceClick(service.type)}
                >
                  {/* Service Icon */}
                  <img src={service.src} alt="Image of service provider" className='w-65' />

                  {/* Service Details */}
                  <div className="flex flex-col gap-5 w-full ">
                    <div className='name_price w-full flex flex-row justify-between'>
                      <div className="text-5xl font-bold text-gray-800">{service.type}</div>
                      <div className="amount flex flex-row items-center">
                        <img src="/src/assets/rupee.svg" alt="rupee svg image" className='h-8' />
                        <div className="text-3xl font-bold text-black">{service.price}</div>
                      </div>
                    </div>

                    <div className='flex flex-row items-center'>
                      <img src="/src/assets/person.svg" alt="Person svg" className='h-10' />
                      <div className="text-xl text-black mt-1">{service.capacity}</div>
                    </div>


                    <div className="text-gray-600 mt-1">{service.time}</div>
                    <div className="text-gray-500 mt-2 italic">{service.description}</div>
                  </div>
                </button>
              ))}
            </div>
            <button>choose {service}</button>
          </div>
        </div>
      </div>
    </div>
  );
};