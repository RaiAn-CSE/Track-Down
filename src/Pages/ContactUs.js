import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <section className="text-gray-600 body-font relative min-h-screen pt-8 inset-y-0">

            <div className="absolute inset-0 bg-gray-300">
                {<iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Daffodil%20International%20University%20Campus,%20Dhaka,%20Ashulia&ie=UTF8&t=&z=14&iwloc=B&output=embed" /*style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}*/></iframe>}
            </div>

            <div className="container px-5 py-24 mx-auto flex lg:absolute relative lg:top-auto top-[40px] bottom-5 left-0">
                <div className="bg-white flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <Link to='https://mail.google.com/mail/u/1/?pli=1#inbox?compose=new' className="text-indigo-500 leading-relaxed">ami.robirai@gmail.com</Link>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">01731-346372</p>
                    </div>
                </div>
            </div>

            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-36 md:mt-0 relative z-10 shadow-md my-5">

                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>

                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" autoFocus id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>

                    <button className="text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 focus:ring focus:ring-emerald-200 rounded text-lg">Button</button>

                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>

                </div>
            </div>

        </section>
    );
};

export default ContactUs;