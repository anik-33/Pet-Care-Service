import React, { useEffect } from 'react';
import care from '../img/safety.avif'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Wintercare = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div data-aos="fade-up" className=" mt-20">
            <h1 className="text-center font-bold text-4xl my-5">Winter Care Tips for Pets</h1>

            <div className="flex flex-col md:flex-row justify-between gap-7 items-start">


                <div className="w-full md:w-1/2">
                    <img src={care} alt="Winter Pet Care" className="w-full h-auto rounded-lg shadow" />
                    <p className="mt-4 p-2 text-gray-700">
                        Exposure to winter’s dry, cold air and chilly rain, sleet, and snow can cause chapped paws and itchy, flaking skin, but these aren’t the only discomforts pets can suffer. Winter walks can become downright dangerous if chemicals from ice-melting agents are licked off bare paws. To help prevent cold weather dangers from affecting your pet’s health, check out our top 10 cold weather safety tips from our experts at the ASPCA Animal Poison Control Center (APCC).
                    </p>
                </div>


                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <ol className="list-decimal p-3 space-y-4 text-gray-700">
                        <li>
                            <strong>Remember, if it’s too cold for you, it’s probably too cold for your pet, so keep your animals inside.</strong> If left outdoors, pets can freeze, become disoriented, lost, stolen, injured, or killed. In addition, don’t leave pets alone in a car during cold weather, as cars can act as refrigerators that hold in the cold and cause animals to freeze to death.
                        </li>
                        <li>
                            <strong>Keep your home humidified and be sure to towel dry your pet as soon as they come inside.</strong> Repeatedly going into the cold and then coming back into a warm home can cause itchy, flaking skin. Pay close attention to their feet and in-between their toes and remove any snowballs from between their foot pads to prevent and treat skin irritation in the winter.
                        </li>
                        <li>
                            <strong>Massage petroleum jelly or other vet-approved paw protectants into paw pads before going outside to protect from salt and chemical agents.</strong> Booties can provide even more coverage and can also prevent sand and salt from getting lodged between bare toes and causing irritation. Use pet-friendly ice melts whenever possible.
                        </li>
                        <li>
                            <strong>Never shave your dog down to the skin in winter.</strong> A longer coat will provide more warmth. If your dog is long-haired, simply trim them to minimize the clinging ice balls, salt crystals, and de-icing chemicals that can dry their skin, and don’t neglect the hair between their toes. If your dog is short-haired, consider getting them a coat or sweater with a high collar or turtleneck with coverage from the base of the tail to the belly.
                        </li>
                    </ol>
                </div>

            </div>
        </div>

    );
};

export default Wintercare;