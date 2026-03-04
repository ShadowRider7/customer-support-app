import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-300 mx-auto">
        <footer className="flex flex-col md:flex-row  text-white py-5 ">
          <div className="flex-1 mx-5 mb-3">
            <h2 className="text-2xl">CS — Ticket System</h2>
            <p className="text-sm text-gray-300">
              Empowering support teams to resolve issues faster. We provide the
              tools you need to streamline communication and deliver exceptional
              customer service.
            </p>
          </div>
          <div className=" flex-4 ml-5 space-x-3 grid grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Company</h6>
              <a className="link link-hover text-gray-400">About Us</a>
              <a className="link link-hover text-gray-400">Our Mission</a>
              <a className="link link-hover text-gray-400">Contact</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Services</h6>
              <a className="link link-hover text-gray-400">Product & Service</a>
              <a className="link link-hover text-gray-400">Customer Stories</a>
              <a className="link link-hover text-gray-400">Download Apps</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Information</h6>
              <a className="link link-hover text-gray-400">Privacy Policy</a>
              <a className="link link-hover text-gray-400">
                Terms & Conditions
              </a>
              <a className="link link-hover text-gray-400">Join Us</a>
            </div>
            <div className="flex flex-col space-y-2">
              <h6 className="text-xl">Social Links</h6>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/xKCWDbLz/Group.jpg"
                  alt=""
                />
                @CS — Ticket System
              </a>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/sv728FsJ/fi-145807.png"
                  alt=""
                />
                @CS — Ticket System
              </a>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/chLtfM4D/fi-5968764.png"
                  alt=""
                />
                @CS — Ticket System
              </a>
              <a className="link link-hover flex items-center text-gray-400">
                <img
                  className="w-5 h-5 mr-1"
                  src="https://i.ibb.co.com/wZqDTQv2/Vectormail.png"
                  alt=""
                />{" "}
                support@cst.com
              </a>
            </div>
          </div>
        </footer>
        <hr className="border-t border-gray-500 " />

        <footer className="footer sm:footer-horizontal footer-center text-white p-4 ">
          <aside>
            <p>
              © {new Date().getFullYear()} CS — Ticket System. All rights
              reserved.
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
