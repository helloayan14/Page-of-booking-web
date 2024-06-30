import React from 'react'


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Discover the World with Safar: Your Ultimate Travel Companion
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to Safar, your ultimate travel companion! At Safar, we believe that travel should be easy, enjoyable, and accessible for everyone. Whether you're planning a quick weekend getaway, a family vacation, or an exotic adventure, we've got you covered.

Our mission is to make travel booking seamless and hassle-free. With Safar, you can explore a wide range of destinations, compare prices, and book your flights, hotels, and activities all in one place. We offer personalized recommendations based on your preferences, ensuring you have the best travel experience possible.

Our team of travel experts is dedicated to providing you with the latest travel trends, tips, and insider knowledge to make your journey unforgettable. We pride ourselves on our customer service, offering 24/7 support to assist you every step of the way.

Join us at Safar and embark on a journey filled with unforgettable memories. Let's explore the world together!
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
