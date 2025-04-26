// components/PackageCard.js
import React from 'react';
import Image from 'next/image';
import { Info } from 'lucide-react';
import Link from 'next/link';

const PackageCard = ({ title, subtitle, price, image, link }) => {
    return (
        <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            {/* Image Section */}
            <div className="relative h-50 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    className="opacity-90 group-hover:opacity-70 transition duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 text-gray-900 download-item-content">
                <a href={link} className="hover:underline">
                    <h5 className="text-xl font-extrabold">{title}</h5>
                </a>
                <p className="text-gray-600 mt-2">{subtitle}</p>

                <ul className="list-none mt-5">
                    <li className="inline-block">
                        <p className="price text-sm text-gray-700">
                            <span className="woocommerce-Price-amount amount font-extrabold">
                                <bdi>{price}&nbsp;</bdi>
                            </span>
                        </p>
                    </li>
                </ul>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-gray-900 backdrop-blur-sm">
                <Link href={`/details/${encodeURIComponent(title)}`}>
                    <button className="flex items-center gap-2 border border-gray-100 cursor-pointer text-gray-100 px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out">
                        <Info className="w-5 h-5" />
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PackageCard;
