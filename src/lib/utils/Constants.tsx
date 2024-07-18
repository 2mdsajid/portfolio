import { FaBlog, FaBrain, FaBriefcase, FaGlobe, FaUser, FaWalking } from "react-icons/fa";
import { TypeBotReqRes, TypeFriendCard, TypeHtmlPageData, TypeProject, TypeSingleBlog, TypeTalent } from "./Types";
import { BsPhone } from "react-icons/bs";
import { GiNoseFront, GiPublicSpeaker, GiDiscussion } from "react-icons/gi";
import { Metadata } from "next";


export const BACKEND = 'https://sajidportfolio.adaptable.app'
export const FRONTEND = 'https://sajidaalam.com.np'

export function constructMetadata({
  title = "Sajid | c0mrad1",
  description = "Portfolio Website of Sajid Aalam aka c0mrad1. Sajid aalam or comrad1 or c0mrad1 is a student at Manipal college of Medical sciences pokhara. He studies mbbs.",
  image = "/c0mradlogo.jpg",
  icons = "/favicon.ico",
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@c0mrad1_"
    },
    icons,
    metadataBase: new URL('https://sajidaalam.com.np'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}

// export const BACKEND = 'http://localhost:4004'
// export const FRONTEND = 'http://localhost:3000'

type TypeSmallProjects = {
  title: string;
  desc: string;
  github: string;
  lang: string;
};

export const dummySmallProject: TypeSmallProjects[] = [
  {
    title: 'First Portfolio Website',
    desc: 'My first portfolio website showcasing my projects and skills.',
    github: 'https://github.com/2mdsajid/First-Portfolio-Website',
    lang: 'HTML, CSS, JavaScript',
  },
  {
    title: 'Equalizer - Hawking\'s Voice Maker Prototype',
    lang: 'Javascript',
    desc: 'This is the replica of the program used by Stephen Hawking to generate his voice based on the sensor attached to his cheeks.',
    github: 'https://github.com/2mdsajid/Equalizer-The-Program-Behind-Stephen-Hawking-Voice'
  },
  {
    title: 'Shop Entries Talliers',
    desc: 'This is a program which can be used to tally entries and sellings of my shop. It has a backend and a database (MySQL).',
    github: 'https://github.com/2mdsajid/Shop-Receipt-Generator',
    lang: 'PHP, Javascript'
  },
  {
    title: 'Space Invader Game',
    desc: 'A space invader game inspired by Star Wars.',
    github: 'https://github.com/2mdsajid/space-invaders-star-wars-based',
    lang: 'JavaScript',
  },
  {
    title: 'ML Chatbot',
    desc: 'An ML-powered chatbot developed using your conversation data.',
    github: 'https://github.com/2mdsajid/ML_CHATBOT',
    lang: 'Python',
  },
  {
    title: 'Viva Sharing',
    desc: 'A platform for sharing viva experiences and tips.',
    github: 'https://github.com/2mdsajid/viva-client',
    lang: 'JavaScript',
  },


]

export const events = [
  {
    yr: 2006,
    mon: 'May',
    day: 10,
    num: 2,
    src: '200610',
    title: 'Learned Alphabet',
    desc: 'It was a great day indeed. I fled to home for the first two days and it was my 3rd day at school'
  },
  {
    yr: 2008,
    mon: 'Mar',
    day: 28,
    num: 3,
    src: '200828',
    title: 'Learned Bicycle',
    desc: 'Yeah I remember the struggles and wounds during those days! Some scars still on my legs'
  },
  {
    yr: 2010,
    mon: 'Jun',
    day: 17,
    num: 4,
    src: '201017',
    title: 'Delhi Holiday',
    desc: 'Went to Delhi during summer holidays. Luckily, my parents found me when I got lost then..'
  },
  {
    yr: 2011,
    mon: 'Jan',
    day: 23,
    num: 5,
    src: '201123',
    title: 'First Photo',
    desc: 'It was Roshan\'s mobile. We gathered after Friday class and took the group photo.'
  },
  {
    yr: 2011,
    mon: 'May',
    day: 9,
    num: 6,
    src: '200909',
    title: 'First Computer',
    desc: 'It was a local cyber nearby our school. It was just for playing GTA VC '
  },
  {
    yr: 2012,
    mon: 'Jan',
    day: 6,
    num: 7,
    src: '201206',
    title: 'First Facebook Account',
    desc: 'I would visit cyber everyday for it & I would also take money from friends to make their account..First business'
  },
  {
    yr: 2013,
    mon: 'Jan',
    day: 25,
    num: 8,
    src: '201325',
    title: 'Sir Stephen Hawking',
    desc: 'In class 6, I watched his documentary about God and I was amazed the way he proved there\'s is no God'
  },
  {
    yr: 2014,
    mon: 'Mar',
    day: 17,
    num: 9,
    src: '201417',
    title: 'First Smart Phone',
    desc: 'It was a second hand micromax-a117 model given to me by my brother. I loved it. Tech<3'
  },
  {
    yr: 2014,
    mon: 'July',
    day: 10,
    num: 10,
    src: '201410',
    title: 'EINSTEIN & NEWTON',
    desc: 'In class 7, I first learned about E=MC² and about Einstein and Newton. I got soo much curious about science and later physics'
  },
  {
    yr: 2014,
    mon: 'Oct',
    day: 16,
    num: 11,
    src: 'unk',
    title: 'Avinash Einstein',
    desc: 'He was such a great physics enthusiastic person. Later he would inspire me to write my first Book on Time'
  },
  {
    yr: 2014,
    mon: 'Nov',
    day: 5,
    num: 12,
    src: '201405',
    title: 'Internet Curiosity',
    desc: 'That year I got connected to Internet. My rooted phone which I used to hack, crack wps wifi for internet... Interesting everything was'
  },
  {
    yr: 2016,
    mon: 'Mar',
    day: 11,
    num: 1,
    src: '201611',
    title: 'Math Tution',
    desc: 'Nagendra sir is great person & a Math teacher. I was a back bencherin his tution and used to do a lots of fun'
  },
  {
    yr: 2016,
    mon: 'Apr',
    day: 8,
    num: 2,
    src: '201608',
    title: 'Anmol Zha',
    desc: 'He was a physics enthusiasm guy. We would together read physics stuffs, ask questions, and visit different places..'
  },
  {
    yr: 2016,
    mon: 'Jun',
    day: 9,
    num: 1,
    src: '201609',
    title: 'QBASIC Program',
    desc: 'It was class 9. I managed to write my first program, PRINT "HELLO WORLD", in a QBASIC Emulator app in my phone. Awesome it was'
  },
  {
    yr: 2017,
    mon: 'Aug',
    day: 25,
    num: 1,
    src: '',
    title: 'Santosh Sir',
    desc: 'He is a very inspiring Science Teacher. I used to ask him a lots of questions in school and in his tution classs'
  },
  {
    yr: 2018,
    mon: 'Mar',
    day: 16,
    num: 2,
    src: '201816',
    title: 'Passed SEE',
    desc: 'Finally I attempted class 10. I was a lot excited to go to KTM and for 3 months holiday onwards to enjoy'
  },
  {
    yr: 2018,
    mon: 'Apr',
    day: 8,
    num: 0,
    src: '201808',
    title: 'Intel Bridge Course',
    desc: 'I finally arrived KTM but this time for study. I joined Intel Institute where I made a lots of new friends and learned new things'
  },
  {
    yr: 2018,
    mon: 'Aug',
    day: 10,
    num: 0,
    src: '201810',
    title: 'St. Xavier\'s College',
    desc: 'Luckily got admission in most reputed college of the country. I was excited. Euphoric'
  },
  {
    yr: 2018,
    mon: 'Nov',
    day: 15,
    num: 0,
    src: '201815',
    title: 'Roman Shrestha',
    desc: 'Accidently though, I met Roman on Facebook. Later he became my mentor and a great friend & also taught me programming'
  },
  {
    yr: 2020,
    mon: 'Oct',
    day: 11,
    num: 0,
    src: '202011',
    title: 'Python for AI',
    desc: 'With aim of learning AI and Machine Learning, I started learning python language. Roman helped me a lot'
  },
  {
    yr: 2020,
    mon: 'Dec',
    day: 9,
    num: 0,
    src: '202009',
    title: 'Spine Surgery',
    desc: 'That day I became IRON MAN with 2 rods and 4 Screws in my back. They were some worse days literally..'
  },
  {
    yr: 2021,
    mon: 'May',
    day: 10,
    num: 0,
    src: '202110',
    title: 'Solved Rubik\'s Cube',
    desc: 'Anyone can do it. There are algorithms on internet and all one needs is to remember and practice them hehe..'
  },
  {
    yr: 2021,
    mon: 'May',
    day: 28,
    num: 0,
    src: '202128',
    title: 'Javascript & HTML',
    desc: 'Starting from a YouTube tutorial and then Eloquent JavaScript I finally managed to write this program named TIMELINE..'
  },
  {
    yr: 2021,
    mon: 'Aug',
    day: 8,
    num: 0,
    src: '202108',
    title: 'Cracked CEE',
    desc: 'It was an exciting moment. Hadn\'t expected scholarship. First I cheered on terrace and then told my father and brothers.'
  },
  {
    yr: 2021,
    mon: 'Dec',
    day: 5,
    num: 0,
    src: 'mcoms',
    title: 'Joined MCOMS',
    desc: 'Frankly speaking, the unexpected MBBS journey started. And the unexpected turn was about to happen in the life. Let\'s see where it takes me '
  },
  {
    yr: 2023,
    mon: 'July',
    day: 18,
    num: 0,
    src: 'website',
    title: 'Made This Website',
    desc: 'So finally, after 3 years, I fulfilled my dream of having my personal website. And luckily I made this.'
  }
]

export const terminaldata = [
  {
    t: '--help',
    r: `Welcome<br>This is a simple terminal made with ReactJS !<br>
  Use the following commands to explore this website !!!<br><br>about >> To know about me<br>exit >> To exit the terminal<br>bot >> To talk to my ChatBot Saara <br>clear >> To clear the terminal window<br>status >> To know my current status`
  },
  {
    t: 'about',
    r: `I've nothing much to say about myself<br>I'm just a normal boy upgrading myself & looks like it's gonna take me years for that hehe....`
  },
  {
    t: 'status',
    r: `I'm Fine. I'm currently studying MBBS 2nd year in MCOMS, Pokhara.`
  },
  {
    t: 'image',
    r: 'oh yeah! Here comes the ugly one'
  },
  {
    t: 'ok',
    r: 'No Command'
  }
]

export const botdata = [
  {
    t: 'hi',
    r: 'Hi how are you doing?'
  },
  {
    t: 'hey',
    r: 'hello, im saara'
  },
  {
    t: 'bot',
    r: 'Im still a prototype'
  },
  {
    t: 'who',
    r: 'im terminal'
  },
  {
    t: 'intro',
    r: 'Im terminal created by sajid'
  },
  {
    t: 'nice',
    r: 'pleasure'
  },
  {
    t: '',
    r: 'ooops I\'m not ChatGPT haha !'
  },
  {
    t: 'study',
    r: 'Mbbs first year in MCOMS, Pokhara'
  },
  {
    t: 'doing',
    r: 'Mbbs first year in MCOMS, Pokhara, Mbbs first year in MCOMS, Pokhara, Mbbs first year in MCOMS, Pokhara'
  },
  {
    t: 'where',
    r: 'Pokhara'
  },
  {
    t: 'weather',
    r: 'I\'m sorry, I don\'t have access to real-time weather information.',
  },
  {
    t: 'time',
    r: `The current time is ${new Date().toLocaleTimeString()}.`,
  },
  {
    t: 'music',
    r: 'I enjoy listening to a wide variety of music genres.',
  },
  {
    t: 'food',
    r: 'I like trying different cuisines and exploring new flavors.',
  },
  {
    t: 'hobbies',
    r: 'Some of my hobbies include reading, coding, and playing video games.',
  },
  {
    t: 'movies',
    r: 'I enjoy watching movies from various genres, including action, comedy, and sci-fi.',
  },
  {
    t: 'help',
    r: 'I\m here to assist you with any questions or information you need.',
  },
  {
    t: 'bye',
    r: 'Goodbye! Have a great day!',
  },
]

export const serviceData = [
  {
    icon: <FaBlog size={24} />,
    title: 'Blog site',
    modelcontent: `
      <div className="">
        <h2 className="text-xl font-bold mb-2">Blog site</h2>
        <h2 className="">Create your first blog website according to your needs.</h2>
        <p className="">
          Easily operable and manageable with free maintenance. Made with the latest technology. Features include:
          <br>
          - Customizable blog templates
          <br>
          - User-friendly content management system
          <br>
          - SEO optimization
          <br>
          - Responsive design
        </p>
      </div>
    `,
    description: 'Create your first blog website according to your needs.',
  },
  {
    icon: <FaGlobe size={24} />,
    title: 'Personal Website',
    modelcontent: `
      <div className="">
        <h2 className="text-xl font-bold mb-2">Personal Website</h2>
        <p className="">
          Get a custom website designed and developed based on your specific needs. Features include:
          <br>
          - Personalized design and layout
          <br>
          - Interactive portfolio showcase
          <br>
          - Integration with social media profiles
          <br>
          - Contact form for easy communication
        </p>
      </div>
    `,
    description: 'Get a custom website designed and developed based on your specific needs.',
  },
  {
    icon: <FaBriefcase size={24} />,
    title: 'Business Website',
    modelcontent: `
      <div className="">
        <h2 className="text-xl font-bold mb-2">Business Website</h2>
        <p className="">
          Build a professional business website tailored to your requirements. Features include:
          <br>
          - Corporate design and branding
          <br>
          - Clear call-to-action sections
          <br>
          - Integration with e-commerce platforms
          <br>
          - Mobile-responsive layout
        </p>
      </div>
    `,
    description: 'Build a professional business website tailored to your requirements.',
  },
  {
    icon: <FaUser size={24} />,
    title: 'Website On Demand',
    modelcontent: `
      <div className="">
        <h2 className="text-xl font-bold mb-2">Website On Demand</h2>
        <p className=" text-left">
          Create any type of website as needed. Features include:
          <br>
          - Custom design and functionality
          <br>
          - Integration with third-party services
          <br>
          - Scalable architecture
          <br>
          - Easy content management system
        </p>
      </div>
    `,
    description: 'Create any type of website as needed.',
  },
];

export const blogs: TypeSingleBlog[] = [
  // {
  //   "_id": "999",
  //   "title": "How To Host Your Website Made By MY Website",
  //   "url": "hostwebsite-1",
  //   "category": "web",
  //   "subcategory": "web",
  //   "author": "Dr. Michael Adams",
  //   "intro": "Learn how to host the website you generated in my website generator tool. This will also help you host your own created website on Netlify for free. You can even get your custom domain there.",
  //   "introimage": "space-image.jpg",
  //   "content": `<div>
  //   <div>
  //   Bro i recommend you watching this 5 minutes tutorial on youtube<br/>
  //   <a className="text-blue-500 underline" href="https://www.youtube.com/watch?v=qAcOhFdC0-k" target="_blank" >How To Host Your Website</a>
  //   </div>
  // <h1 className="my-3 mb-5">or<h1/>
  //   <h1>For Hosting a Website on Netlify with Custom Domain Follow These Steps :</h1>
  //   <h2>Step 1: Set up your React project</h2>
  //   <p>
  //     Before hosting your website on Netlify, make sure you have the index.html downloaded.
  //   </p>
  //   <br />

  //   <h2>Step 2: Sign up on Netlify</h2>
  //   <p>
  //     Go to the Netlify website (https://www.netlify.com/) and sign up for an account. It's free to get started, and you can upgrade to a paid plan if needed.
  //   </p>
  //   <br />

  //   <h2>Step 3: Deploy your React project on Netlify</h2>
  //   <p>
  //     Once you're logged in to Netlify, click on the "New site from Git" button to connect your project repository. Follow the instructions to authorize Netlify's access to your repository and choose the branch you want to deploy.
  //   </p>
  //   <p>
  //     Configure the build settings as needed (e.g., set the build command to "npm run build" for a Create React App project). Netlify will automatically trigger a new deployment whenever you push changes to your repository.
  //   </p>
  //   <br />

  //   <h2>Step 4: Set up a custom domain</h2>
  //   <p>
  //     In Netlify, navigate to your site's settings and click on the "Domain Management" section. Click the "Add custom domain" button and follow the steps to configure your custom domain.
  //   </p>
  //   <p>
  //     You'll need to set up DNS records with your domain provider to point your custom domain to Netlify. Netlify provides detailed instructions specific to your DNS provider, so follow those instructions carefully.
  //   </p>
  //   <br />

  //   <h2>Step 5: Verify and wait for DNS propagation</h2>
  //   <p>
  //     After setting up the DNS records, Netlify will verify the domain configuration. Once the verification is successful, you'll need to wait for DNS propagation, which can take some time (usually a few hours or up to 48 hours).
  //   </p>
  //   <p>
  //     During this waiting period, your website will still be accessible via the Netlify subdomain (e.g., https://your-site-name.netlify.app/).
  //   </p>
  //   <br />

  //   <h2>Step 6: Enjoy your hosted website with a custom domain</h2>
  //   <p>
  //     Once DNS propagation is complete, your website will be accessible using your custom domain (e.g., https://www.your-domain.com/). You've successfully hosted your React website on Netlify with a custom domain!
  //   </p>
  //   <br />

  //   <h2>Conclusion</h2>
  //   <p>
  //     Hosting a website on Netlify and setting up a custom domain is a straightforward process. By following these steps, you can deploy and share your React projects with the world using your own domain name. Happy hosting!
  //   </p>
  // </div>
  // `,
  //   "review": true,
  //   "keywords": ['some3'],
  //   "published": true,
  //   "readtime": "8 minutes",
  //   "date": "2023-06-21",
  //   "views": 1000,
  //   "rating": 4.9
  // },
  {
    "_id": "5th-semester-the-honeymoon-semester",
    "title": "5th Semester : Honeymoon semester they say, what I enjoyed !",
    "url": "5th-semester-the-honeymoon-semester",
    "category": "Life",
    "subcategory": "MBBS",
    "author": "c0mrad1",
    "intro": "Unlike other semesters, I found myself immersed in a very different life experiences in 5th semester. From partying, to making new connections to learning balance in life I enjoyed this semester truly.",
    "introimage": "https://res.cloudinary.com/dww0rxb4q/image/upload/v1721224274/px5e9fwayuo2o3533mkr.jpg",
    "content": `
This is a short journey of how I enjoyed my 5th semester, often called the "honeymoon semester." This rock-'n'-roll journey of mine started when I moved to Stupa, room number 209, a residential building near our Manipal Teaching Hospital, from Deep, as my basic science courses were about to end.

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721215695/uermxexggutgpkgmfwuo.png" alt="Stupa Building" />
    <p class="responsive-image-caption"><em>Stupa Building</em></p>
</div>

It was my second day at Stupa and I met Sangam dai. He asked me about one of my friends and I, a little afraid to speak, replied promptly. Soon I also met Tej dai, Sangya didi.

As I was trying to adjust myself slowly to the new environment, which was quite difficult for me because of my introverted nature, I met many seniors who used to come to Stupa for their lunch, breakfast. I came to know Adhish dai, Prakash dai, and Ashbin dai and many others

Things got spicy when I met Kushal Bhatta dai and Rahul Goit dai. I remember the first interaction with them. They were sitting for lunch, and I came from my examination and sat in front of them. They realized I was from Manipal as I was in my college uniform. Rahul dai said, "Oh hello, don't you know who we are? Can't you greet your seniors?" I got a little afraid. I said, "Sorry, dai.". Later on, dai asked me about my name and other things.

One day, I went to Rahul dai's room on the top floor of Stupa. I had to take a lot of courage to do that. I often used to go to the terrace but never went to their room. Guess what? They welcomed me so well. I felt so loved by their attitude and behavior toward me. They have got a playstation in which they used to play FIFA. I played Uncharted 3, which was the first time I played a game in console with a controller. Next day again I went there and I met Dr. Niroz dai, PG anaesthesia. After talking for a while, they realized I was an introvert. They advised me to start playing football, stop playing video games too much.

Then MPL started, a football tournament held every year. This year, I also gave my name and got into Bhatta dai's team. It was Team Anaesthesia aka Team Mahakaal, owned by Dr. Santosh Dhakal, a very generous and kind-hearted person. I gave my jersey name as 'c0mrad1' and jersey number '404'. My name and number were unique and drew a lot of attention during the MPL season. 

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721216291/yvxmscadhpy0701frpn9.jpg" alt="Team Mahakaal" />
    <p class="responsive-image-caption"><em>Team Mahakaal & Me & Runner up medal</em></p>
</div>


Things got spiced up when we won our first game. We had a great party. I never drink, so they brought Coca-Cola for me. This was my first party after coming to Stupa. Guess what happened next? We had a party every day at Stupa. Whether winning or losing the game, we used to have a party. Sometimes for team meetings, we were partying. It became a daily routine. I used to sit and listen to their talks patiently. They used to give me advice. "Comrade, do this, you should talk to other people, try to be social, don't be too introverted, you should enjoy your life." From those parties, I got to know a lot of people, especially PGs and interns from Manipal. They all knew me by the name 'Comrade'. 

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721216562/ls1erq6cgkqxxwvjouma.jpg" alt="Halaal Cocktail" />
    <p class="responsive-image-caption"><em>Special halaal cocktail for me</em></p>
</div>

Soon, the MPL ended. I started learning football. Bhatta dai then suggested I play enough to make my body fit and not injure myself as I have rods in my back. Following that, I also started going to the gym and having a high-protein diet like meat every alternate day and two eggs every day. I loved that new way of life.

Soon I got the opportunity to visit OT. It was all a coincidence that I met Dr. Santosh sir on the way after our classes ended. He gave me his scrubs and took me in OT with him. It was a really an amazing experience to visit OT with him. I was lucky as nobody else from my batch visited OT before me. Hehe. After that I visited OT so many times, even when i had my postings in other departments. Sometimes during night surgeries also.

Soon, Bhatta dai and Goit dai left Stupa after completing their internship. For a few days, I literally missed them, the parties on the top floor of Stupa. After that, Sangam dai came back from his exam, and I started going to his room. Guess what? The void got filled. Sangam dai is the person who has a very big connection in Manipal. He was also like a motivator who always used to tell me, "Comrade, you have to meet new people, make new friends, make connections. In life, at some point, you'll need them." Amid all these, our parties never stopped in Stupa. We literally had a party every day, every other day, sometimes in Bastola, sometimes in Almond café.

More adventure awaited me before I met Dr. Manish dai. He lives in the room next to me. I used to go to his room and have some talks. He is a very cheerful person. Together, we would go to Kahu Dada at 2 am, sometimes at 12, sometimes in rain. He taught me driving. After that, I was the one driving and taking him up the hill. I remember he said, "Let's go to Lakeside," and I was like, "OK." But then he said, "You won't learn much driving on plain roads. Let's go to Kahu Dada. Think big so you learn big." That night, around 1 am, I took him up to Kahu Dada on his Bullet bike. That was literally my first time driving a bike, Bullet,  uphill.

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721216562/cigvhb5wfjfkyke4o2hu.jpg" alt="Mid-night boating & Hike on Bullet" />
    <p class="responsive-image-caption"><em>Mid-night boating & Hike to Kahu dada on Bullet</em></p>
</div>

After that, together we visited Lakesides, had so many parties, and yes clubs. He took me to the club for the first time. I danced a little in the club and had a lots of fun. After that, it became a regular routine to go to the club. Every now and then, I would go to the club, sometimes with Manish dai, sometimes with Sangam dai, sometimes alone.

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721216562/xf1jqoqvws0acjc7nqqt.jpg" alt="Clubbing" />
    <p class="responsive-image-caption"><em>Club-16 & Catwalk</em></p>
</div>

Amid all these, I got the opportunity to visit IOM to participate in National Pharmacology Quiz. There i met some amazing people like Aayushma, my old friend, Neetika, Ashik,  and made some good memories. Few days later, I got my 2nd year result, and guess what ? Again party with my friends, with seniors.

My partying craze wasn't just limited in Stupa. I even went to picnics with other groups during their community visits, bunking my own posting classes.

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721216562/ol3w3almmr69tlxjhhyz.jpg" alt="In a picnic after bunking my posting classes" />
    <p class="responsive-image-caption"><em>In a picnic after bunking my posting classes</em></p>
</div>

Amid all these parties, clubs, and enjoyment, My end semester arrived. I hadn't studied anything, like literally anything, and I was like, "Oh shit, what have I done to myself? I was once a topper of my class. Now I don't even know what has been taught in the class. It's the biggest academic downfall of my life." I got just pass marks in my EOP exams because I couldn't answer a single question in the viva. My attendance was so low—60% in pedia, 65% in gyne, and 79-80% in med and surgery. I always used to play 'BrickMania' in my classroom, at last bench. I was so worried about failing the semester exam. I expressed this to Manish dai, and he said, "The way you were dancing in the club, now start studying the same way. You'll pass the exams." I started studying a week prior. And guess what? I completed almost all the topics and appeared in the exam. I did very well and am expecting to pass in all the subjects. I have promised to give a party if I pass all the subjects.

Lastly, we got a 5-day vacation. With a lot of things to do, I spent all of it sleeping day and night. On the last day of vacation, I went kayaking with some friends. It was a very unreal experience swimming in fewa lake.

<div class="responsive-image-container">
    <img class="responsive-image" src="https://res.cloudinary.com/dww0rxb4q/image/upload/v1721216562/mqo05nernmqvxolp9nhi.jpg" alt="Ended the semester with Kayaking" />
    <p class="responsive-image-caption"><em>Ended the semester with Kayaking</em></p>
</div>


In short, This semester, filled with friendships, parties, clubs, and personal growth, taught me to balance fun with responsibilities and the significance of forming meaningful connections, truly lived up to its "honeymoon" reputation.

Someday in the future, looking back, I will remember this semester as **"GOOD OLD DAYS"** !!
    `,
    "review": true,
    "keywords": ['some'],
    "published": true,
    "readtime": "6 minutes",
    "date": "2024-07-17",
    "views": 500,
    "rating": 4.8
  },

]


export const dummyResData = {
  "uniqueid": "sajid6e9659fd85bf4b41aae1c050dc4edc0f",
  "metadescription": "Lorem ipsum dolor sit amet",
  "username": "sajid aalam",
  "professions": [
    "Developer",
    "Designer"
  ],
  "cover": "https://utfs.io/f/1b7e54cc-7949-4548-8e52-e728eee6f52a_galimg_9.jpg",
  "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "address": "123 Main Street, City",
  "resumefile": "https://example.com/resume.pdf",
  "works": [
    {
      "jobinstitution": "ABC Company",
      "jobrole": "Software Developer",
      "jobyear": "2022-2023",
      "jobdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "jobimage": "https://example.com/job-image1.jpg",
      "_id": "6496842a29d07029d1cf86f3"
    },
    {
      "jobinstitution": "XYZ Corporation",
      "jobrole": "Graphic Designer",
      "jobyear": "2020-2022",
      "jobdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "jobimage": "https://example.com/job-image2.jpg",
      "_id": "6496842a29d07029d1cf86f4"
    }
  ],
  "schools": [
    {
      "schoolinstitution": "ABC High School",
      "schoollevel": "High School",
      "classof": "2018",
      "schooldescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "schoolimage": "https://example.com/school-image1.jpg",
      "_id": "6496842a29d07029d1cf86f5"
    },
    {
      "schoolinstitution": "XYZ University",
      "schoollevel": "Bachelor's Degree",
      "classof": "2022",
      "schooldescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "schoolimage": "https://example.com/school-image2.jpg",
      "_id": "6496842a29d07029d1cf86f6"
    }
  ],
  "email": "example@example.com",
  "socialmedialinks": {
    "facebook": "https://facebook.com/example",
    "instagram": "https://instagram.com/example",
    "twitter": "https://twitter.com/example",
    "youtube": "https://youtube.com/example",
    "telegram": "https://t.me/example"
  },
  "_id": "6496842a29d07029d1cf86f2",
  "__v": 0
}


export const dummyTalents: TypeTalent[] = [
  {
    icon: <GiNoseFront />,
    title: 'Allergic Rhinitis',
    desc: 'God gave me Allergic Rhinitis. I do not blame myself for that as it is god-gifted. i have to take Lukast Plus ( a medicine for allergies ) every 3 days because on the 3rd day i get the rhinitis.'
  },
  {
    icon: <FaBrain />,
    title: 'Distractibility Disorder',
    desc: 'a reduced ability to maintain attention on a specific task or stimuli due to the presence of external or internal distractions. It is exaggerated by notifications.'
  },
  {
    icon: <BsPhone />,
    title: 'Infomania',
    desc: 'a condition characterized by an excessive and compulsive need to constantly consume or seek out information, particularly through digital devices and technologies.'
  },
  {
    icon: <FaWalking />,
    title: 'Dance',
    desc: 'LOL! I don\'t know dancing. tbh I hate it. Last time I danced and the results were quite awkward. Don\'t know about the future. But I don\'t like being forced to dance! '
  },
  {
    icon: <GiPublicSpeaker />,
    title: 'Public Speaking',
    desc: 'In the name public speaking, I have given some speeches in my school. But it is something I literally envy others for!'
  },
  {
    icon: <GiDiscussion />,
    title: 'Social Skills',
    desc: 'I am the INTROVERT GUY. I can not start a conversation. I can not keep one either. It\'s all Up to You. Sometimes I may not talk to you at all or Only talk to you.'
  },
]


export const dummyPageData: TypeHtmlPageData = {
  metadescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  username: "John Doe",
  professions: ["Web Developer", "Graphic Designer"],
  cover: "https://res.cloudinary.com/dww0rxb4q/image/upload/v1686937083/landingpagenobg_z9ay8r.png",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eleifend metus in dapibus.",
  resumefile: "https://example.com/resume.pdf",
  works: [
    {
      jobinstitution: "ABC Company",
      jobrole: "Front-end Developer",
      jobyear: "2019-2021",
      jobdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      jobimage: "https://example.com/images/work1.jpg",
    },
    {
      jobinstitution: "XYZ Agency",
      jobrole: "Graphic Designer",
      jobyear: "2018-2019",
      jobdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      jobimage: "https://example.com/images/work2.jpg",
    },
  ],
  schools: [
    {
      schoolinstitution: "ABC School",
      schoollevel: "High School",
      classof: "2015",
      schooldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      schoolimage: "https://example.com/images/school1.jpg",
    },
    {
      schoolinstitution: "XYZ College",
      schoollevel: "Bachelor's Degree",
      classof: "2019",
      schooldescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      schoolimage: "https://example.com/images/school2.jpg",
    },
  ],
  email: "johndoe@example.com",
  socialmedialinks: {
    facebook: "https://facebook.com/johndoe",
    instagram: "https://instagram.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    telegram: "https://telegram.me/johndoe",
  },
  address: "123 Street, City, Country",
};

export const dummyData = [
  {
    image: "nodejs",
    name: "QBASIC",
    desc: "I wrote my first 'Hello World! in class 10 and then played around logics, loops and callbacks and made some games, quizzes. Everything in my android phone.",
    date: "2002 Dec 25" // Original date format
  },
  {
    image: "Python",
    name: "Python",
    desc: "It was corona lockdown and I was watching some AI videos on yt and thought to learn about AI. I asked Roman, and he suggested me to learn Python.\nI still had my phone. No PC or Laptop",
    date: "2010 Nov 12" // Original date format
  },
  {
    image: "JavaScript",
    name: "JavaScript",
    desc: "As I was learning the python, I found out Roman's website and then realized I should have also one. so started HTML & CSS then moved to Javascript. Only after joining MBBS, in 2nd year i got Laptop and then made this all",
    date: "2021 Aug 31" // Original date format
  }
];

export const dummyProjects: TypeProject[] = [
  {
    image: "/projects/medlocus.png",
    name: "Medlocus Website",
    desc: "This website helps students attend online tests and is designed especially for CEE appearing students",
    websitelink: "https://medlocusweb.com",
    techstacks: ['nextjs', 'tailwind', 'typescript', 'nodejs', 'expressjs', 'mongodb'],
    githublink: "",
  },
  {
    image: "/projects/kafleblog.png",
    name: "Aayushma's Blog Website",
    desc: "This is the personal blog website for my friend Aayushma Kafle (@aayushm_19). She writes her personal experiences in the medical field along with tips, guidance regarding her field. ",
    websitelink: "https://aayushmakafle.com.np",
    techstacks: ['nextjs', 'tailwind', 'typescript', 'nodejs', 'expressjs', 'mongodb'],
    githublink: "https://github.com/2mdsajid/kafleblog-client2",
  },
  {
    image: "/projects/bdaycounter.png",
    name: "MCOMS Bdays Reminder",
    desc: "This is the official birthdays counter website for the students of MCOMS, Pokhara. This will send birthday reminders to the students on someone's birthday.",
    websitelink: "https://birthdays.rajbasel.com.np/",
    techstacks: ['react', 'nextjs', 'tailwind', 'typescript', 'nodejs', 'expressjs', 'mongodb'],
    githublink: "https://github.com/2mdsajid/bday-client",
  },
  {
    image: "/projects/muk.png",
    name: "Mukunda's Website",
    desc: "so i made this website ot help my friend write his personal experience and journey in medicine field and his views on different aspects of life",
    websitelink: "https://www.mukundarajjoshi.com.np/",
    techstacks: ['react', 'nextjs', 'tailwind', 'typescript', 'nodejs', 'expressjs', 'mongodb'],
    githublink: "",
  },
  {
    image: "/projects/rajwebsite.png",
    name: "Raj Portfolio",
    desc: "This is a simple portfolio website for my friend Raj Basel (@livingasrb007).",
    websitelink: "https://rajbasel.com.np/",
    techstacks: ['html', 'css', 'javascript'],
    githublink: "https://github.com/2mdsajid/rajbasel",
  },
  // Add more dummy projects as needed
];


