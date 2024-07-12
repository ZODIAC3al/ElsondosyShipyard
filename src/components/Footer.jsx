import { tiktok } from "../main";
const Footer = () => {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-center">
          <div className="flex justify-center gap-4 hover:cursor-pointer">
            <a href="https://www.facebook.com/SALAH554?mibextid=LQQJ4d">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
            </a>

            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <a
              href="https://www.tiktok.com/@elkaramayachtsand?_t=8ny8yOBpCeS&_r=1"
              alt="tiktok icon"
            >
              <img src={tiktok} width="30" height="30" alt="in" />
            </a>
          </div>
        </div>
        <p className="font-sans p-8 text-center md:text-center text-xs md:p-4 text-white">
          © 2024 El Sondosy Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
