import { FaWhatsapp, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socials = [
  { icon: LinkedinIcon, url: 'https://www.linkedin.com/in/faizan-anwar-khan-amu/', label: 'LinkedIn' },
  { icon: GithubIcon, url: 'https://github.com/Faizan6100-amu', label: 'GitHub' },
  { icon: InstagramIcon, url: 'https://www.instagram.com/k_faizan_008', label: 'Instagram' },
  { icon: WhatAppIcon, url: 'https://wa.me/qr/QHRLJBVFDL4VA1', label: 'WhatsApp' },
  { icon: GmailIcon, url: 'mailto:anwarfaizankhan@gmail.com', label: 'Gmail' },
];

export default function SocialIcon() {
  return (
    <div className="group relative flex flex-col md:flex-row items-center gap-4">
      <p className="text-lg font-medium bg-gradient-to-r from-purple-600/90 to-pink-600/90 dark:from-purple-400/90 dark:to-pink-400/90 bg-clip-text text-transparent">
        Connect with me:
      </p>
      <ul className="flex gap-4">
        {socials.map((social, idx) => (
          <li key={idx} className="relative">
            <a 
              href={social.url} 
              aria-label={`Link to ${social.label}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative transition-transform duration-300 hover:scale-110"
            >
              <social.icon />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-0.5 w-0.5 animate-sparkle rounded-full bg-purple-400/80"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
   </div>
  );
}

function IconWrapper({ children, gradient }) {
  return (
    <div className={`
      relative flex items-center justify-center w-9 h-9 rounded-full 
      bg-gradient-to-br ${gradient} shadow-lg 
      transition-all duration-500 hover:shadow-[0_0_20px] hover:shadow-purple-500/30
      before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br ${gradient} 
      before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
      after:absolute after:inset-0 after:rounded-full after:bg-white/5 after:backdrop-blur-sm
    `}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function LinkedinIcon() {
  return (
    <IconWrapper gradient="from-blue-600 to-purple-600">
      <FaLinkedin className="text-white text-xl hover:animate-float" />
    </IconWrapper>
  );
}

function GithubIcon() {
  return (
    <IconWrapper gradient="from-gray-900 to-purple-900">
      <FaGithub className="text-white text-xl hover:animate-float" />
    </IconWrapper>
  );
}

function InstagramIcon() {
  return (
    <IconWrapper gradient="from-pink-500 to-purple-600">
      <FaInstagram className="text-white text-xl hover:animate-float" />
    </IconWrapper>
  );
}

function WhatAppIcon() {
  return (
    <IconWrapper gradient="from-green-500 to-blue-600">
      <FaWhatsapp className="text-white text-xl hover:animate-float" />
    </IconWrapper>
  );
}

function GmailIcon() {
  return (
    <IconWrapper gradient="from-rose-600 to-pink-600">
      <BiLogoGmail className="text-white text-xl hover:animate-float" />
    </IconWrapper>
  );
}