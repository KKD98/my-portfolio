
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sdorfcn', 'template_qn03dd1', form.current, '094EN_KIr_xyAhMwi')
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Email sent successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full pt-16 mb-8 min-h-screen" id="contact">
      <div className="ml-8">
        <p className="text-xl font-semibold text-pink-700 mb-4">Contact Me</p>
        <p className="text-4xl font-bold text-black mb-4">
          For contact you can <span className="text-pink-700">Message Me</span>
        </p>
        <div className="divider w-16 bg-pink-700 h-1 mb-0"></div>
        <div className="divider w-16 bg-pink-700 h-1 ml-4"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <div className="w-full p-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="p-3 flex flex-col w-full mx-auto bg-opacity-20 rounded-md bg-black">
              <p className="text-2xl text-black font-semibold">Get In Touch</p>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input type="text" name="message" placeholder="Write a message" className="input input-bordered w-full" required />
              </div>
              <input type="submit" value="Send" className="btn bg-pink-700 hover:bg-pink-800 text-black w-full md:w-auto mx-auto mt-3" />
            </div>
          </form>
        </div>
        <div className="w-full p-4 flex flex-col gap-2">
          <p className="text-2xl text-black font-semibold">Contact Info</p>
          <div className="flex gap-3 items-center">
            <FaMapMarkerAlt className="text-pink-700 text-2xl" />
            <div>
              <p className="text-xl font-semibold text-black">Address</p>
              <p className="text-md font-semibold text-gray-800">Sylhet, Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt className="text-pink-700 text-2xl" />
            <div>
              <p className="text-xl font-semibold text-black">Phone</p>
              <p className="text-md font-semibold text-gray-800">+8801766715566</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaEnvelope className="text-pink-700 text-2xl" />
            <div>
              <p className="text-xl font-semibold text-black">Email</p>
              <p className="text-md font-semibold text-gray-800">kajolkona98@gmail.com</p>
            </div>
          </div>
          <div className="divider text-2xl text-black font-semibold">Let's Connect</div>
          <div className="flex gap-5 text-3xl justify-center mb-2">
            <a href="https://www.linkedin.com/in/kajol-kona-datta/">
              <FaLinkedin className="text-black" />
            </a>
            <a href="https://github.com/kkd98">
              <FaGithub className="text-black" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009853148114&mibextid=LQQJ4d">
              <FaFacebook className="bg-blue-700 text-white rounded-full border-none" />
            </a>
            <a href="https://instagram.com/kajol_kona?igshid=OGQ5ZDc2ODk2ZA==">
              <FaInstagram className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;





// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';
// import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow, FaMapMarkedAlt, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa';


// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_sdorfcn', 'template_qn03dd1', form.current, '094EN_KIr_xyAhMwi')
//             .then((result) => {
//                 console.log(result.text);
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'Email sent successfully',
//                     showConfirmButton: false,
//                     timer: 1500
//                   })
//                 form.current.reset();
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };
//     return (
//         <div className='w-full py-16 mb-8 h-screen' id='contact'>
//             <div className='ml-8'>
//                         <p className='text-xl font-semibold text-pink-700 mb-4'>Contact Me</p>
//                         <p className='text-4xl font-bold text-black mb-4'>For contact you can <span className='text-pink-700'>Message Me</span></p>
//                         <div className="divider w-16 bg-pink-700 h-1 mb-0"></div>
//                         <div className="divider w-16 bg-pink-700 h-1 ml-4"></div>
//                     </div>
//           <div className='flex flex-col md:flex-row gap-2 w-full'>
//          <div className='w-full p-4'>
//          <form ref={form} onSubmit={sendEmail}>
//                 <div className='p-3 flex flex-col w-full mx-auto bg-opacity-20 rounded-md bg-black'>
//                 <p className='text-2xl text-black font-semibold'>Get In Touch</p>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Name</span>
//                         </label>
//                         <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered w-full" required/>
//                     </div>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Email</span>
//                         </label>
//                         <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered w-full" required/>
//                     </div>
//                     <div className="form-control w-full">
//                         <label className="label">
//                             <span className="label-text">Message</span>
//                         </label>
//                         <input type="text" name="message" placeholder="Write a message" className="input input-bordered w-full" required/>
//                     </div>
//                     <input type="submit" value="Send" className="btn bg-pink-700 hover:bg-pink-800 text-black w-[20%] mt-3 mx-auto" />
//                 </div>
//             </form>
//          </div>
//             <div className='w-full p-4 flex flex-col gap-2'>
//                 <p className='text-2xl text-black font-semibold'>Contact Info</p>
//                 <div className='flex gap-3 items-center'>
//                     <FaMapMarkerAlt className='text-pink-700 text-2xl'></FaMapMarkerAlt>
//                     <div>
//                         <p className='text-xl font-semibold text-black'>Address</p>
//                         <p className='text-md font-semibold text-gray-800'>Sylhet, Bangladesh</p>
//                     </div>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                     <FaPhoneAlt className='text-pink-700 text-2xl'></FaPhoneAlt>
//                     <div>
//                         <p className='text-xl font-semibold text-black'>Phone</p>
//                         <p className='text-md font-semibold text-gray-800'>+8801766715566</p>
//                     </div>
//                 </div>
//                 <div className='flex gap-2 items-center'>
//                     <FaEnvelope className='text-pink-700 text-2xl'></FaEnvelope>
//                     <div>
//                         <p className='text-xl font-semibold text-black'>Email</p>
//                         <p className='text-md font-semibold text-gray-800'>kajolkona98@gmail.com</p>
//                     </div>
//                 </div>
//                 <div className="divider text-2xl text-black font-semibold">Let's Conntect</div>
//                 <div className='flex gap-5 text-3xl justify-center mb-2'>
//                 <a href="https://www.linkedin.com/in/kajol-kona-datta/"><FaLinkedin className='text-black'></FaLinkedin></a>
//                     <a href="https://github.com/kkd98"><FaGithub className='text-black'></FaGithub></a>
//                     <a href='https://www.facebook.com/profile.php?id=100009853148114&mibextid=LQQJ4d'><FaFacebook className='bg-blue-700 text-white rounded-full border-none'></FaFacebook></a>
//                     <a href='https://instagram.com/kajol_kona?igshid=OGQ5ZDc2ODk2ZA=='><FaInstagram className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-lg'></FaInstagram></a>
//                 </div>
//             </div>
//           </div>
//         </div>

//     );
// };

// export default Contact;