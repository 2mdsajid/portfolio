import { FaBlog, FaBriefcase, FaGlobe, FaUser } from "react-icons/fa";
import { TypeSingleBlog } from "./Types";


export const BACKEND = 'http://localhost:4004'
export const FRONTEND= 'http://localhost:3000'

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
  }
]

export const terminaldata = [
  {
    t: '--help',
    r: `Welcome<br>This is a simple terminal using some html css and Js !<br>
  I'm just a beginner dev !!<br>
  Use the following commands to explore this website !!!<br><br>about >> To know about me<br>exit >> To exit the terminal<br>bot >> To talk to my ChatBot <br>clear >> To clear the terminal window<br>status >> To know my current status`
  },
  {
    t: 'about',
    r: `I've nothing much to say about myself<br>I'm just a normal boy upgrading myself & looks like it's gonna take me years for that hehe....`
  },
  {
    t: 'status',
    r: `I'm Fine. I'm currently studying MBBS 1st year in MCOMS, Pokhara.`
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
    r: 'hello, im sajid'
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
    r: 'Nothing found'
  },
  {
    t: 'study',
    r: 'Mbbs first year in MCOMS, Pokhara'
  },
  {
    t: 'doing',
    r: 'Mbbs first year in MCOMS, Pokhara'
  },
  {
    t: 'where',
    r: 'Pokhara'
  }
]

export const serviceData = [
  {
    icon: <FaBlog size={24} />,
    title: 'Blog site',
    modelcontent: `
      <div className="">
        <h2 className="text-xl font-bold mb-2">Blog site</h2>
        <h2 className="text-gray-600">Create your first blog website according to your needs.</h2>
        <p className="text-gray-600">
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
        <p className="text-gray-600">
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
        <p className="text-gray-600">
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
        <p className="text-gray-600 text-left">
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
  {
    "_id": "1",
    "title": "Artificial Intelligence: Transforming the Future",
    "url": "ai-blog-1",
    "category": "Technology",
    "subcategory": "AI",
    "author": "Sarah Johnson",
    "intro": "Artificial Intelligence (AI) is revolutionizing various industries and transforming the future. In this blog, we explore the potential of AI and its impact on society.",
    "introimage": "ai-image.jpg",
    "content": "AI has made significant advancements in areas such as healthcare, finance, and transportation. It has the potential to revolutionize how we live, work, and interact with technology. From self-driving cars to personalized healthcare, AI is enhancing efficiency and making complex tasks more accessible.\n\nHowever, AI also poses challenges, including ethical considerations, job displacement, and privacy concerns. It is crucial to strike a balance between technological advancements and ethical guidelines to ensure AI benefits humanity.\n\nAs AI continues to evolve, it opens up endless possibilities and exciting opportunities for innovation. Embracing AI responsibly can lead to a future where intelligent machines work hand in hand with humans to create a better world.",
    "review": true,
    "keywords": ['some'],
    "published": true,
    "readtime": "6 minutes",
    "date": "2023-06-21",
    "views": 500,
    "rating": 4.8
  },
  {
    "_id": "2",
    "title": "The Future of Medicine: Exploring Breakthroughs in Healthcare",
    "url": "medicine-blog-1",
    "category": "Health",
    "subcategory": "Medicine",
    "author": "Dr. Emily Carter",
    "intro": "Advancements in medicine have transformed healthcare. In this blog, we delve into the future of medicine, including genomics, precision medicine, and AI-driven diagnostics.",
    "introimage": "medicine-image.jpg",
    "content": "Medicine is on the brink of a revolution. Genomics and personalized medicine allow for tailored treatments based on an individual's genetic makeup. AI-driven diagnostics aid in early detection and improve patient outcomes.\n\nFurthermore, telemedicine and remote patient monitoring enable access to quality healthcare, regardless of geographical location. From wearable devices to virtual consultations, technology is bridging the gap between doctors and patients.\n\nHowever, as medicine progresses, ethical considerations, data privacy, and equitable access to healthcare must be addressed. It's crucial to harness these breakthroughs responsibly to ensure improved healthcare outcomes for all.\n\nThe future of medicine holds immense potential for enhancing diagnostics, treatments, and overall patient care. As we embrace these advancements, we move closer to a future where precision medicine and technology converge to revolutionize healthcare.",
    "review": true,
    "keywords": ['some2'],
    "published": true,
    "readtime": "7 minutes",
    "date": "2023-06-21",
    "views": 750,
    "rating": 4.6
  },
  {
    "_id": "3",
    "title": "Exploring the Wonders of Space: Unveiling the Cosmos",
    "url": "space-blog-1",
    "category": "Science",
    "subcategory": "Space",
    "author": "Dr. Michael Adams",
    "intro": "The cosmos has always fascinated humanity. In this blog, we embark on a journey to explore the wonders of space, including celestial bodies, space exploration, and the search for extraterrestrial life.",
    "introimage": "space-image.jpg",
    "content": "Space, with its vast expanse and celestial bodies, holds countless mysteries waiting to be unravelled. Space exploration has allowed us to witness breathtaking phenomena and expand our understanding of the universe.\n\nFrom studying distant galaxies to sending missions to other planets, space exploration pushes the boundaries of human knowledge and ignites our curiosity. Additionally, the search for extraterrestrial life captivates the imagination and raises questions about our place in the cosmos.\n\nAs we continue to delve deeper into space, we must also address challenges such as space debris and sustainable space exploration. Preserving the pristine nature of space is crucial for future generations.\n\nThe wonders of space inspire awe and stimulate scientific advancements. By exploring the cosmos, we gain valuable insights into our own existence and the vastness of the universe.",
    "review": true,
    "keywords": ['some3'],
    "published": true,
    "readtime": "8 minutes",
    "date": "2023-06-21",
    "views": 1000,
    "rating": 4.9
  }
]

export const blogsdata = [
  {
    _id: "1",
    noteid: "10 Tips for Better Time Management",
    title: "10 Tips for Better Time Management",
    url: "10-tips-for-better-time-management",
    intro: "In today's fast-paced world, time management has become an essential skill to have...",
    readtime: "5 min read",
    date: "2022-05-01"
  },
  {
    _id: "2",
    noteid: "How to Start a Successful Blog",
    title: "How to Start a Successful Blog",
    url: "how-to-start-a-successful-blog",
    intro: "Blogging has become a popular way to share information, express creativity, and make money...",
    readtime: "8 min read",
    date: "2022-04-25"
  },
  {
    _id: "3",
    noteid: "The Benefits of Regular Exercise",
    title: "The Benefits of Regular Exercise",
    url: "the-benefits-of-regular-exercise",
    intro: "Exercise is an important part of a healthy lifestyle. Not only does it help you maintain a healthy weight...",
    readtime: "6 min read",
    date: "2022-04-19"
  }
];


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
