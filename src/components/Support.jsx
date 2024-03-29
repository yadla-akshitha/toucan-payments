import React from 'react';
import email from "../assets/images/icons/email.svg";
import location from "../assets/images/icons/locations.svg";
import phone from "../assets/images/icons/phone.svg";
import operational_hours from "../assets/images/icons/oprational_hourse.svg";
import end_to_end from "../assets/images/End-to-End_support.png";

function Support() {
  return (
    <div className="bg-bg-lightgrey2 mt-14">
      <div className="px-2 bg-primary2 text-white lg:px-32 xl:px-[25rem]">
        <h1 className="font-extrabold text-[28px] lg:text-[48px] pt-10">Support</h1>
        <p className="text-bg-lightgrey2 text-lg pb-4 pt-3">Got a query on the platform? let us clarify it to you!</p>
      </div>
      <div className="px-3 lg:px-32 xl:px-[25rem]">
        <h2 className="text-[28px] font-bold pt-10 text-primary">Reach Us Here</h2>
        <p className="text-bg-black my-2 pb-4">Dedicated Support team to assist you 24/7</p>
        <div className="w-full bg-white rounded-xl shadow-2xl mb-9 pb-8">
          <div className="lg:flex lg:flex-wrap justify-start lg:px-2">
            <div className="flex lg:w-2/5 items-start m-4 pt-2">
              <img src={email} alt="email" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">Email</p>
                <p className="text-bg-black text-sm">sales@toucanus.com</p>
              </div>
            </div>
            <div className="flex lg:w-2/5 items-start m-4 pt-2">
              <img src={location} alt="location" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">US Office</p>
                <p className="text-bg-black text-sm">805 Savannah Trl, South Lake, TX 76092</p>
              </div>
            </div>
            <div className="flex lg:w-2/5 items-start m-4 pt-2">
              <img src={phone} alt="phone_no" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">Phone no.</p>
                <p className="text-bg-black text-sm">+91 6309701112</p>
              </div>
            </div>
            <div className="flex lg:w-2/5 items-start m-4 pt-2">
              <img src={location} alt="location" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">India Office</p>
                <p className="text-bg-black text-sm">Plot No. 45, Phase 1, Kavuri Hills, Hyderabad-500033, Telangana, India.</p>
              </div>
            </div>
            <div className="flex lg:w-2/5 items-start m-4 pt-2">
              <img src={operational_hours} alt="location" className="w-8" />
              <div className="pl-4">
                <p className="font-bold">Operational Hours</p>
                <p className="text-bg-black text-sm">
                  <span>Mon - Fri : 9AM - 7PM</span><br />
                  <span>Sat : 9AM - 1PM</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-bg-yellow lg:flex lg:flex-row lg:justify-center items-center w-11/12 mx-auto py-2 rounded-2xl border lg:py-6">
            <div className="lg:w-2/5 lg:flex lg:flex-col lg:items-start lg:justify-center lg:mx-6">
              <h2 className="text-[32px] text-text font-bold leading-tight text-left py-8">Dedicated support team to assist you 24/7</h2>
              <div className="text-center">
                <button className="bg-secondary text-white p-2 rounded-md w-52 uppercase lg:mb-5">Request a call back</button>
              </div>
            </div>
            <img src={end_to_end} alt="end_to_end" className="w-8/12 text-center my-4 lg:my-0 lg:mx-6 mx-auto lg:w-2/5" />
          </div>
        </div>
      </div>

      <h2 className=" text-center mx-4 font-extrabold text-[28px]">Frequently Asked Questions</h2>
    </div>
  );
}

export default Support;
