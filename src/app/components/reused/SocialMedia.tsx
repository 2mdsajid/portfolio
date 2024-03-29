import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-4 items-center">
      <Link target='_blank' href="https://twitter.com/c0mrad1_">
        <span className=" text-color2 dark:text-dark-color1 font-bold py-1 rounded">
          <FaTwitter size={24} />
        </span>
      </Link>
      <Link target='_blank' href="https://www.facebook.com/c0mrad1/">
        <span className=" text-color2 dark:text-dark-color1 font-bold py-1 rounded">
          <FaFacebook size={24} />
        </span>
      </Link>
      <Link target='_blank' href="https://www.instagram.com/c0mrad1/">
        <span className=" text-color2 dark:text-dark-color1 font-bold py-1 rounded">
          <FaInstagram size={24} />
        </span>
      </Link>
      <Link target='_blank' href="https://github.com/2mdsajid">
        <span className=" text-color2 dark:text-dark-color1 font-bold py-1 rounded">
          <FaGithub size={24} />
        </span>
      </Link>
      <Link target='_blank' href="https://www.linkedin.com/in/c0mrad1/">
        <span className=" text-color2 dark:text-dark-color1 font-bold py-1 rounded">
          <FaLinkedin size={24} />
        </span>
      </Link>
      <div className='w-[0.2rem] h-10 bg-color2 dark:bg-dark-color1 -mt-2'></div>
    </div>
  );
};

export default SocialMediaLinks;
