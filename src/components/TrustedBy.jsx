import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SiGoogle, SiAmazon, SiNetflix, SiSpotify, SiAdobe, SiSlack, SiPaypal, SiFacebook, SiLinkedin, SiYoutube, SiDropbox, SiTwitch, SiReddit, SiTesla, SiAirbnb, SiUber, SiApple, SiInstagram } from "react-icons/si";

const brands = [
    { icon: SiGoogle, color: "#4285F4" },
    { icon: SiAmazon, color: "#FF9900" },
    { icon: SiNetflix, color: "#E50914" },
    { icon: SiSpotify, color: "#1DB954" },
    { icon: SiGoogle, color: "#4285F4" },
    { icon: SiAmazon, color: "#FF9900" },
    { icon: SiNetflix, color: "#E50914" },
    { icon: SiAdobe, color: "#FF0000" },
    { icon: SiSlack, color: "#4A154B" },
    { icon: SiPaypal, color: "#00457C" },
    { icon: SiFacebook, color: "#1877F2" },
    { icon: SiLinkedin, color: "#0077B5" },
    { icon: SiYoutube, color: "#FF0000" },
    { icon: SiDropbox, color: "#0061FF" },
    { icon: SiTwitch, color: "#6441A5" },
    { icon: SiReddit, color: "#FF4500" },
    { icon: SiTesla, color: "#CC0000" },
    { icon: SiAirbnb, color: "#FF5A5F" },
    { icon: SiUber, color: "#000000" },
    { icon: SiApple, color: "#A3AAAE" },
    { icon: SiInstagram, color: "#E4405F" },
];

const TrustedBy = () => {
  return (
    <section className="mx-auto px-8 py-16 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
        Trusted by leading organizations worldwide
      </h2>

      
      <Swiper
        slidesPerView={3}
        breakpoints={{ 640: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } }}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="flex justify-center items-center"
      >
            {brands.map((brand, index) => {
                const IconComponent = brand.icon;
                return (
                <SwiperSlide key={index} className="text-center">
                    <IconComponent className={`text-[${brand.color}] text-5xl block mx-auto`} />
                </SwiperSlide>
                );
            })}
      </Swiper>
    </section>
  );
};

export default TrustedBy;
