import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

const Footer1 = () => {
  const iconStyles =
    "flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600";

  const linkClasses =
    "text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 cursor-pointer";

  return (
    <section className="py-10 bg-black sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          {/* Company */}
          <div>
            <p className="text-base text-white">Company</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/about", text: "About CreatoUI" },
                { href: "/features", text: "Features" },
                { href: "/works", text: "Our Work" },
                { href: "/career", text: "Careers" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-base text-white">Help</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/support", text: "Customer Support" },
                { href: "/delivery", text: "Delivery Details" },
                { href: "/terms", text: "Terms & Conditions" },
                { href: "/privacy", text: "Privacy Policy" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-base text-white">Resources</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/ebooks", text: "Free eBooks" },
                { href: "/tutorial", text: "UI Development Tutorial" },
                { href: "/blog", text: "UI Design Blog" },
                { href: "/youtube", text: "YouTube Playlist" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra Links */}
          <div>
            <p className="text-base text-white">Extra Links</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "/contact", text: "Contact Us" },
                { href: "/faq", text: "FAQ" },
                { href: "/blog", text: "UI Design Blog" },
                { href: "/resources", text: "More Resources" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
          {/* <img
            className="h-8 w-auto md:order-1"
            src="https://creatoui.com/logo-dark.png"
            alt="CreatoUI Logo"
          /> */}

          <ul className="flex items-center space-x-3 md:order-3">
            {[
              {
                icon: <FiTwitter className="w-4 h-4" />,
                href: "https://twitter.com/creatoui",
              },
              {
                icon: <FiFacebook className="w-4 h-4" />,
                href: "https://facebook.com/creatoui",
              },
              {
                icon: <FiInstagram className="w-4 h-4" />,
                href: "https://instagram.com/creatoui",
              },
              {
                icon: <FiGithub className="w-4 h-4" />,
                href: "https://github.com/creatoui",
              },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className={iconStyles}>{item.icon}</div>
                </a>
              </li>
            ))}
          </ul>

          <p className="w-full mt-8 text-sm text-center text-white md:mt-0 md:w-auto md:order-2">
            © Copyright 2024, All Rights Reserved by CreatoUI
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer1;
