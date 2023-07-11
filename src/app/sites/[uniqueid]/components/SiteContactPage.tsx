'use client'
import React, { FC, useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BACKEND } from "@/lib/utils/Constants";


interface SocialMediaLinks {
  instagram: string;
  facebook: string;
  twitter?: string;
  youtube?: string;
}

interface ContactProps {
  email: string;
  socialMediaLinks: SocialMediaLinks;
  uniqueid:string
}



const SiteContactPage: FC<ContactProps> = ({ email, socialMediaLinks,uniqueid }) => {
  const { instagram, facebook, twitter, youtube } = socialMediaLinks;

  const [sendername, setSenderName] = useState('');
  const [senderemail, setSenderEmail] = useState('');
  const [sendermessage, setSenderMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setButtonText('Sending...');

    // Perform your form submission logic here, e.g., using fetch or axios
    try {
      const response = await fetch(BACKEND + `/sendformmessage/${uniqueid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sendername,senderemail,sendermessage
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResponse('Form submitted successfully!');
        setSenderEmail('')
        setSenderMessage('')
        setSenderName('')
      } else {
        setResponse('Failed to submit the form.');
      }
    } catch (error) {
      setResponse('An error occurred while submitting the form.');
    }

    setButtonText('Send');
    setTimeout(() => {
      setResponse('')
    }, 2000);
  };


  return (
    <section id="contact" className="pt-20 w-screen px-2 sm:px-5 md:px-10 xl:px-40 py-10 pb-0">
      <h1 className="text-4xl font-bold mb-5 md:mb-20 lg:mb-26">Contact</h1>
      <div className="w-full h-full">
        <div className="contact lg:w-[80%] lg:mx-auto border-black p-2 flex flex-col sm:flex-row">
          <form
            className="contact-form flex flex-col sm:w-1/2 sm:pr-8"
            onSubmit={handleSubmit}
          >
            <input
              className="n mb-4 p-2 rounded border"
              type="text"
              placeholder="Your name"
              name="name"
              value={sendername}
              onChange={(event) => setSenderName(event.target.value)}
              required
            />
            <input
              className="e mb-4 p-2 rounded border"
              type="text"
              placeholder="Your email"
              name="email"
              value={senderemail}
              onChange={(event) => setSenderEmail(event.target.value)}
              required
            />
            <textarea
              className="m mb-4 p-2 rounded border"
              placeholder="Message"
              name="message"
              value={sendermessage}
              onChange={(event) => setSenderMessage(event.target.value)}
              required
            ></textarea>
            <input
              className="send p-2 rounded bg-blue-500 text-white"
              type="submit"
              value={buttonText}
            />
            {response && <p>{response}</p>}
          </form>
          <div className="block sm:hidden w-full h-1 my-5 bg-blue-900"></div>
          <div className="contact-right lg:pl-[5rem] flex flex-col justify-between mt-2 sm:mt-0 sm:w-1/2 sm:pl-8 sm:border-l-4 border-blue-900 ">
            <h1 className="mb-10 text-4xl font-bold">FOLLOW ME</h1>
            <div className="contact-social flex flex-col text-2xl font-semibold">
              <p className="mb-4">LET US BE SOCIAL</p>
              <div className="contact-social-icons flex">
                <a href={instagram} className="mr-2">
                  <FaInstagram />
                </a>
                <a href={facebook} className="mr-2">
                  <FaFacebook />
                </a>
                {twitter && (
                  <a href={twitter} className="mr-2">
                    <FaTwitter />
                  </a>
                )}
                {youtube && (
                  <a href={youtube} className="mr-2">
                    <FaYoutube />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteContactPage