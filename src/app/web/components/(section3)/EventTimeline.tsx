import { Event } from '@/lib/utils/Types';
import React from 'react';

const EventTimeline = ({ events } : {events:Event[]}) => {
  return (
    <div className="w-full">
      {events.map((event, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
          } items-center justify-center py-10`}
        >
          <div className="w-[20%]">
            <div className="bg-gray-300 h-64 rounded-full flex items-center justify-center">
              <img
                src={`/timeline/${event.src}.jpg`}
                alt=""
                className="max-h-full max-w-full rounded-full"
              />
            </div>
          </div>
          <div className="w-[20%] text-center">
            <div className="text-3xl font-bold mb-4">{event.mon}</div>
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 bg-gray-400 w-16"></div>
              <div className="bg-gray-400 h-8 w-8 rounded-full flex items-center justify-center mx-2">
                {event.day}
              </div>
              <div className="h-1 bg-gray-400 w-16"></div>
            </div>
          </div>
          <div className="w-[10%]">
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
              <div className="text-3xl font-bold text-white">{event.yr}</div>
            </div>
          </div>
          <div className="w-[40%] mt-10">
            <div className="bg-gray-100 rounded-lg p-4">
              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600">{event.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventTimeline;
