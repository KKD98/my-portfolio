import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sdorfcn', 'template_qn03dd1', form.current, '094EN_KIr_xyAhMwi')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Email sent successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='w-full pt-12 mb-8 h-screen' id='contact'>
            <p className='text-4xl font-semibold text-center text-black mt-4 mb-6 lg:mb-10'>---Contact---</p>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col w-full lg:w-[50%] mx-auto p-5  bg-opacity-20 rounded-md bg-black'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered w-full" required/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered w-full" required/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <input type="text" name="message" placeholder="Write a message" className="input input-bordered w-full" required/>
                    </div>
                    <input type="submit" value="Send" className="btn bg-gray-400 hover:bg-gray-600 text-black w-[20%] mt-3 mx-auto" />
                </div>
            </form>
        </div>

    );
};

export default Contact;