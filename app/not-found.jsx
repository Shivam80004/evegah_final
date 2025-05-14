import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = ({
  title = "Uh Oh! 404, Page not found",
  description = "We could not find the page you're looking for. Explore our menu or",
  buttonText = "Go To Homepage",
}) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[rgba(250,236,255,0.77)] via-[rgba(250,236,255,1)] to-[rgba(250,236,255,0)] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 container">
        <div className="flex flex-col items-start max-w-[543px] text-left">
          <h1 className="lg:text-5xl text-4xl font-bold text-black leading-[120%] mb-4">
            {title}
          </h1>
          <p className="text-lg text-[#4d4c4c] leading-[140%] mb-8">
            {description}
          </p>
          <Link href="/">
            <button
              // onClick={onHomeClick}
              className="px-8 py-3 bg-[#0f0f0f] text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              {buttonText}
            </button>
          </Link>
        </div>

        <div className="w-full max-w-[482px]">
          <Image
            src="/images/frame.png"
            alt="404 Illustration"
            width={482}
            height={486}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
