import React, { useState } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="pb-32 md:pb-44 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradient-bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm">
      {/* Navbar */}
      

      {/* Hero Section */}
      <div className="flex flex-col-reverse gap-10 md:flex-row px-4 md:px-16 lg:px-24 xl:px-32 mt-12 md:mt-32">
        {/* Text */}
        <div className="max-md:text-center">
          <h5 className="text-4xl md:text-6xl/[76px] font-semibold max-w-2xl text-slate-900">
            Grow your network, fuel your journey
          </h5>

          <p className="text-sm md:text-base max-w-md mt-6 max-md:px-2 text-slate-600">
            Meet like-minded people, collaborate on ideas, and grow your personal and professional network.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <button className="active:scale-95 transition-all">
              <img
                className="md:w-40"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
                alt="Apple Store"
              />
            </button>
            <button className="active:scale-95 transition-all">
              <img
                className="md:w-40"
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
                alt="Google Play"
              />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:max-w-xs lg:max-w-lg">
          <img
            className="w-full h-auto"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt="Users"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
