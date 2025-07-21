'use client';


import Image from 'next/image';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row">
      {/* Left Side Login Form (Bottom in desktop, top in mobile) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="flex flex-col items-center">
            <div className=" text-white rounded-full p-2 mb-4">
          
               <img src="/signIn/idesk_sm.png" alt="" width='60px'/>


            </div>
            <h2 className="text-2xl font-bold">Welcome to iDesk360</h2>
            <p className="text-gray-500 mb-6">More than a business tool</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">2025 © iDesk360.com</p>
        </div>
      </div>

      {/* Right Side Image (Top in mobile, right in desktop) */}
      <div className="w-full md:w-1/2 bg-[#041551] text-white flex flex-col items-center justify-center p-6">
        <Image
          src="/signIn/agency.png"
          alt="Welcome Illustration"
          width={500}
          height={400}
        />
        <h1 className="text-2xl md:text-4xl font-bold mt-4">Welcome to iDesk360</h1>
      </div>
    </div>
  );
}
