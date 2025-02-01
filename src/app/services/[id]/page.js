'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft, FiGlobe } from 'react-icons/fi';
import { services } from './servicesData';

export default function ServiceDetails() {
    const { id } = useParams();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white text-2xl">
                Service not found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-[#1b2a36] to-[#00375e] text-white px-6 py-20 flex flex-col items-center">
            <div className="max-w-4xl w-full bg-slate-800 bg-opacity-80 rounded-xl shadow-lg p-8">
                {/* Breadcrumb Navigation */}
                <div className="mb-4 text-gray-400">
                    <Link href="/services" className="hover:text-blue-400">
                        <FiArrowLeft className="inline mr-2" /> Back to Services
                    </Link>
                </div>
                
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                    <Image src={service.logo} alt={service.company} width={60} height={60} className="rounded-lg shadow-md" />
                    <div>
                        <h1 className="text-3xl font-bold text-blue-300">{service.title}</h1>
                        <h2 className="text-lg text-gray-300">{service.company}</h2>
                    </div>
                </div>
                
                {/* Service Description */}
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.details}</p>
                
                {/* Services Offered */}
                <div className=" bg-gradient-to-l from-[#1b2a36] to-[#00375e] bg-opacity-70 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">Services We Offer</h3>
                    <ol className="list-decimal pl-5 space-y-2">
                        {service.servicesOffered.map((serviceItem, index) => (
                            <li key={index} className="text-gray-400">{serviceItem}</li>
                        ))}
                    </ol>
                </div>

                {/* Visit Website */}
                <div className="mt-6 text-center">
                    <Link href={service.website} target="_blank" className="text-blue-400 hover:underline text-lg">
                        <FiGlobe className="inline mr-2" /> Visit Website
                    </Link>
                </div>
            </div>
        </section>
    );
}
