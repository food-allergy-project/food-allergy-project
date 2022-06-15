import React from "react";
import '../App.css';


export function AboutPageBanner () {
    return (
        <div className='p-5 my-5 ourBackground'>
            <div className='container'>
                <div className='row p-2 mb-4'>
                    <h1 className="mb-5"><strong>About Our Page</strong></h1>
                    <div className='fs-5'>
                        <p className='text-start'>
                            Researchers estimated that 32 million Americans are living with potentially life-threatening food allergies. This includes 5.6 million children under 18 years of age, which is one in every 13 children.</p>
                        <p className='text-start'>
                            In addition, about 40 percent of people with food allergies are allergic to more than one food. Living with food allergies is not easy, and it can be a hassle and time-consuming trying to find recipes that are free of your specific allergens.</p>
                        <p className='text-start'>
                            We are here to fix that problem! Allergic Foodies offer a way for anyone with food allergies to find recipes that are free from their allergens quickly and easily! Just take our quick little quiz to tell us about the thing(s) you’re allergic to and we’ll generate YOUR  personalized homepage that is filled with lots of delicious recipes that you can have!</p>

                    </div>
                </div>
            </div>
        </div>
    )
}