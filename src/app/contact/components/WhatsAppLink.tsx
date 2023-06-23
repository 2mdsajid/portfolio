
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink = () => {
    const phoneNumber = '+9779866541236';
    const message = 'Hello, I want to chat with you!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className='flex flex-col'>
            <p>Text me on WhatsApp</p>
            <FaWhatsapp />+977-9866558908
        </Link>
    );
};

export default WhatsAppLink;
