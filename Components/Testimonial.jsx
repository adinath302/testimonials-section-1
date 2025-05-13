import React from 'react'
import { FaDribbble, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'

const Testimonial = () => {
    return (
        <div className='px-24 py-24'>
            <div className='flex justify-center flex-col '>
                {/* header section  */}
                <div className='text-start !space-y-4 mb-5'>
                    <h1 className='text-3xl font-bold'>Our Team</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error atque vel autem, quo placeat ipsa.</p>
                </div>
                {/* Testimonials section  */}
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className='!space-y-4'>
                        <h1>Bonnie Green</h1>
                        <p>Senior Front-end developer</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iste possimus in. Quae consequatur libero error aliquam, nam dolorem nulla quo illo eaque?</p>
                        <div className='flex items-center gap-4'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaDribbble />
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial