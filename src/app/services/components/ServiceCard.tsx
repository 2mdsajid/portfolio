import React, { ReactElement } from 'react';
import ServiceModel from './ServiceModel';
import { TypeServiceCard } from '@/lib/utils/Types';



const ServiceCard = ({ icon, title, description,modelcontent }: TypeServiceCard) => {
    return (
        <div className="bg-bgPrimary p-6 flex flex-col justify-between rounded-lg shadow-md border">
            <div className='w-full'>
                {icon}
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="mb-4">{description}</p>
            </div>
            {/* <button className="w-max bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Request
            </button> */}
            <ServiceModel modelContent={modelcontent} />
        </div>
    );
};

export default ServiceCard;
