import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import img from '../img/img1.jpg'

const Whyus = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div
            data-aos="fade-up"
            className="mt-5 flex flex-col md:flex-row justify-around items-center gap-4 bg-gray-50  p-4 md:p-0"
        >
           
            <div className="w-full md:w-2/3 flex justify-center md:justify-start">
                <img src={img} alt="Pet care" className="max-w-full h-auto rounded-lg shadow" />
            </div>

            
            <section className="w-full md:w-2/3 text-center md:text-left py-8 md:py-16 px-4 md:px-0" data-aos="fade-up">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">🐾 Why Choose Us</h2>
                <p className="max-w-2xl mx-auto md:mx-0 text-gray-600 mb-8">
                    At <span className="font-semibold text-gray-800">PawCare</span>, we treat every pet as part of our family.
                    Our team is passionate about keeping your furry friends healthy, happy, and full of life.
                    We believe that good care starts with love, trust, and attention to every little detail.
                </p>

                <ul className="text-left max-w-md mx-auto md:mx-0 text-gray-700 space-y-3 mb-8">
                    <li>🩺 Experienced and caring professionals</li>
                    <li>✂️ Gentle grooming and safe handling</li>
                    <li>🐕 Personalized health and nutrition advice</li>
                    <li>❤️ A friendly environment your pet will love</li>
                </ul>

                <p className="text-gray-600 italic">
                    Because when your pet feels good, you feel good too.
                </p>
            </section>
        </div>

    );
};

export default Whyus;