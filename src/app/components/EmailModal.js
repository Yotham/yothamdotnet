// EmailModal.js
"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail');
    const keys = await response.json();
    // Ensure the keys are fetched before proceeding
    if (!response.ok) {
      console.error('Failed to fetch the keys');
      return;
    }


    const email = e.target.email.value;
    const message = e.target.message.value;
    const fullMessage = `Email: ${email}\n\n${message}`;

    // Use the fetched keys in the emailjs.send method
    emailjs.send(keys.EMAILJS_SERVICE_ID, keys.EMAILJS_TEMPLATE_ID, {
      message: fullMessage,
    }, keys.EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        onClose()
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
      console.error(error.text);
    });
};
  
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black bg-opacity-75" aria-hidden="true"></div>

        <div className="inline-block px-4 pt-5 pb-4 primary-bg even-shadow rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="primary-bg sm:p-6 sm:pb-4 rounded-lg">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg font-medium leading-6 text-white" id="modal-title">
                  Send a Message
                </h3>
                <div className="mt-2">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white">Your Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md text-black shadow-sm focus:outline-none focus:ring-slate-950 focus:border-slate-950 sm:text-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-3 py-2 mt-1 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-slate-950 focus:border-slate-950 sm:text-sm"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="pt-5 sm:flex sm:flex-row-reverse">
                      <button type="submit" className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-primary-color border border-white rounded-md even-shadow hover:bg-black sm:ml-3 sm:w-auto sm:text-sm">
                        Send
                      </button>
                      <button type="button" onClick={onClose} className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-primary-color border border-white rounded-md even-shadow hover:bg-black sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailModal;
