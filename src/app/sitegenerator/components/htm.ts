import { TypeSchool, TypeSocialMediaLinks, TypeWork, dummyPageData } from "@/lib/utils/Types";


// Destructure the values from the dummyData object
const {
  metadescription,
  username,
  professions,
  cover,
  about,
  resumefile,
  works,
  schools,
  email,
  socialmedialinks,
  address,
} = dummyPageData;

const {
  facebook,
  instagram,
  twitter,
  telegram
} = socialmedialinks


export const cssvar = `    /* navbar styling */
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
.f-c{display:flex;align-items:center;}
.active{color:rgb(239,14,14);text-decoration:underline;}
header img{height:110%;}
.header-nav-toggle{display:none;}
header ul{font-size:1.1rem;width:50%;height:100%;}
header ul li{display:inline;}
header ul li a:hover{color:rgb(239,14,14);text-decoration:underline;}
header ul li a{text-decoration:none;}
header{position:fixed;top:0;left:0;display:block;width:100%;padding:0 5px;z-index:99;}
@media (max-width:600px){
/* body{padding:0 2vw;} */
.href-tag{margin-bottom:20vw;height:5vw;}
header ul{transition:all .45s;padding:15px 0px 0px 15px;font-size:1.3rem;height:65vh;width:0px;z-index:9999;}
header ul li{transition:all .45s;display:block;margin-top:1em;}
.header-nav-toggle{height:70%;display:block;position:absolute;right:0;transition:all .45s;}
.nav-show{width:50%;border-right:1px solid #FFFFFF;border-bottom:1px solid #FFFFFF;}
.nav-hide{width:0;border-right-width:0px;border-bottom-width:0px;}
.list-hide{display:none;opacity:0;}
.list-show{opacity:1;display:block;}
.rotateDiv{transform:rotate(90deg);}
}`


export const getMetaData = (metadescription:string,username:string)=>{
  return `    <meta charset="UTF-8">
  <meta name="description" content=${metadescription}>
  <meta name="author" content=${username}>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${username}</title>`
}



export const getHeader= (username:string,works:TypeWork[],schools:TypeSchool[]) => {
  let worklia = '';
  let schoollia = '';

  if (works.length > 0 && works[0].jobdescription && works[0].jobinstitution) {
    worklia = `<li><a href="#work">WORK</a></li>`
  }

  if (schools.length > 0 && schools[0].schoolinstitution && schools[0].schooldescription) {
    schoollia = `<li><a href="#education">EDUCATION</a></li>`
  }

return `  <header
class="flex items-center justify-between border-b border-blue-100 py-2 px-2 sm:px-5 md:px-10 xl:px-40 bg-blue-100">
<h1 class="text-3xl font-bold ">${username}</h1>
<span class="header-nav-toggle pr-2">
<i class="fas fa-bars text-3xl"></i>
</span>
<ul
  class="header-contents nav-hide list-hide font-semibold  absolute sm:static border-black bg-blue-100 top-[3rem] sm:top-0 w-screen h-screen sm:w-auto sm:h-auto left-0 sm:flex sm:space-x-2 md:space-x-4 lg:spaxe-x-8 sm:justify-end">
  <li><a href="" class="active">HOME</a></li>
  <li><a href="#about">ABOUT</a></li>
  ${worklia}
  ${schoollia}
  <li><a href="#contact">CONTACT</a></li>
</ul>
</header>`
}

/*   <li><a href="#gallery">GALLERY</a></li> */


export const getLandingPage = (username: string,cover?:string) =>{
  return `    <section id="home" class="sm:pt-20 w-screen h-max flex flex-col justify-between border-black">
  <div class=' flex flex-col md:flex-row border-black justify-between items-center px-4 sm:px-6 lg:px-40'>
    <div class="w-full md:w-1/2 flex items-center justify-center">
      <div class="text-3xl lg:text-[2.5rem] py-0 lg:py-0 font-bold leading-10 lg:leading-normal">
        Hey friend,<br>
        <h1 class='text-blue-700'>I&apos;m ${username}.</h1>
        <h2>__<span class="moving-text"></span></h2>
      </div>
    </div>
    <div class='pb-10 lg:pb-0 transform scale-125 pt-5'>
    <img class="w-[16rem] mx-auto py-10" width={600} height={500} src=${cover} alt='home pic' />
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" class='' viewBox="0 0 1440 320">
    <path fill="#1e40af" fill-opacity="1"
      d="M0,0L40,5.3C80,11,160,21,240,37.3C320,53,400,75,480,74.7C560,75,640,53,720,85.3C800,117,880,203,960,229.3C1040,256,1120,224,1200,218.7C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
    </path>
  </svg>
  </section>
  `
}



export const getAboutPage = (about: string, resumefile?: string) => {
  return `
    <section id="about" class='pt-10 h-max -mt-5 bg-gradient-to-b from-[#1e40af] via-blue-700 to-blue-100 px-4 sm:px-6 lg:px-40 border-black'>
      <div class="w-full flex pt-5 pb-10 ">
        <div class='text-center flex flex-col items-center justify-center w-full lg:p-10 md:w-1/2'>
          <p class="text-4xl font-bold mb-8">
            Welcome to my website!
          </p>
          <h1 class="text-xl mb-8">
            ${about}
          </h1>
          ${
            resumefile
              ? `<div class="text-center pb-5">
                   <a href=${resumefile} download>
                     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                       More About Me
                     </button>
                   </a>
                 </div>`
              : ''
          }
        </div>
      </div>
    </section>
  `;
};


export const getWorkSection = (works: TypeWork[]) => {
  let worksection = ``
  works.forEach((work, index) => {
    const { jobinstitution, jobrole,jobyear, jobdescription } = work
    if (index % 2 == 0) {
      worksection = `${worksection}
    <div class="w-full border-black flex justify-end">
    <div class="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4 ">
      <div class="rounded shadow-md bg-blue-200 p-2">
        <h1 class="font-bold text-3xl mb-4">${jobinstitution}</h1>
        <h3 class="text-lg text-blue-800 mb-2">${jobrole} <span class="work-date text-sm">${jobyear}</span>
        </h3>
        <p class="text-sm">${jobdescription}
        </p>
      </div>
    </div>
    <div class="w-[15%] md:w-[10%] flex flex-col items-center">
    <!-- <img src="res\work\seds.jpg" class="w-[50%] rounded-full shadow-md" alt=""> -->
    <i class="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
      <div class="w-1 h-full bg-blue-900"></div>
    </div>
    <div class="w-[5%] md:w-[45%] md:block"></div>
  </div>`
    } else {
      worksection = `${worksection}
    <div class="w-full border-black flex flex-row-reverse md:flex-row">
    <div class="w-[5%] md:w-[45%] md:block"></div>
    <div class="w-[15%] md:w-[10%] flex flex-col items-center">
    <!-- <img src="res\work\seds.jpg" class="w-[50%] rounded-full shadow-md" alt=""> -->
    <i class="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
      <div class="w-1 h-full bg-blue-900"></div>
    </div>
    <div class="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4">
      <div class="rounded shadow-md bg-blue-200 p-2">
        <h1 class="font-bold text-3xl mb-4">${jobinstitution}</h1>
        <h3 class="text-lg text-blue-800 mb-2">${jobrole}<span class="work-date text-sm">${jobyear}</span>
        </h3>
        <p class="text-sm">${jobdescription}
        </p>
      </div>
    </div>
  </div>
    `;
    }
  })

  return `<section id="work" class="sm:pt-20 w-screen max-h px-2 sm:px-5 md:px-10 xl:px-40 py-10">
  <h1 class="text-4xl font-bold mb-5 md:mb-8 lg:mb-10">Work</h1>
  <div class="w-full h-full">
  ${worksection}
  </div>
</section>
  `
}


/*  
export const work = `    <section id="work" class="sm:pt-20 w-screen max-h px-2 sm:px-5 md:px-10 xl:px-40 py-10">
<h1 class="text-4xl font-bold mb-5 md:mb-8 lg:mb-10">Work</h1>
<div class="w-full h-full">
  <!-- left -->
  <div class="w-full border-black flex justify-end">
    <div class="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4 ">
      <div class="rounded shadow-md bg-blue-200 p-2">
        <h1 class="font-bold text-3xl mb-4">${jobinstitution}</h1>
        <h3 class="text-lg text-blue-800 mb-2">${jobrole} <span class="work-date text-sm">${jobyear}</span>
        </h3>
        <p class="text-sm">${jobdescription}
        </p>
      </div>
    </div>
    <div class="w-[15%] md:w-[10%] flex flex-col items-center">
    <!-- <img src="res\work\seds.jpg" class="w-[50%] rounded-full shadow-md" alt=""> -->
    <i class="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
      <div class="w-1 h-full bg-blue-900"></div>
    </div>
    <div class="w-[5%] md:w-[45%] md:block"></div>
  </div>
  <!-- left end -->

  <!-- right -->
  <div class="w-full border-black flex flex-row-reverse md:flex-row">
    <div class="w-[5%] md:w-[45%] md:block"></div>
    <div class="w-[15%] md:w-[10%] flex flex-col items-center">
    <!-- <img src="res\work\seds.jpg" class="w-[50%] rounded-full shadow-md" alt=""> -->
    <i class="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
      <div class="w-1 h-full bg-blue-900"></div>
    </div>
    <div class="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4">
      <div class="rounded shadow-md bg-blue-200 p-2">
        <h1 class="font-bold text-3xl mb-4">${jobinstitution}</h1>
        <h3 class="text-lg text-blue-800 mb-2">${jobrole}<span class="work-date text-sm">${jobyear}</span>
        </h3>
        <p class="text-sm">${jobdescription}
        </p>
      </div>
    </div>
  </div>
  <!-- right end -->
</div>
</section>
`
*/


export const getEducationSection = (schools:TypeSchool[]) =>{
  let schoolsection = ``
  schools.forEach((school,indexedDB) =>{
    const {schoolinstitution,classof,schoollevel,schooldescription} = school
    schoolsection = `${schoolsection}
    <div
    class="school w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] mx-auto bg-blue-200 rounded shadow-md relative my-10">
    <div class="school-icon circle icons w-12 h-12 absolute -top-6 left-5 ">
    <i class="fas fa-graduation-cap w-full rounded-full p-4 bg-blue-200 border"></i>
    </div>
    <div class="school-info p-2">
      <div class="school-info-title flex items-end mt-10">
        <p class="school-title text-3xl font-bold">${schoolinstitution}</p>
        <p class="batch-date text-sm text-red-900">${classof}</p>
      </div>
      <p class="school-level text-xl font-semibold my-3">${schoollevel}</p>
      <p class="school-experience py-1 text-blue-700">${schooldescription}</p>
    </div>
  </div>
    `
  })

  return `<section id="education" class="sm:pt-20 w-screen px-2 sm:px-5 md:px-10 xl:px-40 py-10">
  <h1 class="text-4xl font-bold mb-5 md:mb-20 lg:mb-26">Education</h1>
  <div class="w-full h-full">
  ${schoolsection}
  <div>
  </section>
  `
}

/* 
export const education = `    <section id="education" class="sm:pt-20 w-screen px-2 sm:px-5 md:px-10 xl:px-40 py-10">
<h1 class="text-4xl font-bold mb-5 md:mb-20 lg:mb-26">Education</h1>
<div class="w-full h-full">
  <!-- school start -->
  <div
    class="school w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] mx-auto bg-blue-200 rounded shadow-md relative my-10">
    <div class="school-icon circle icons w-12 h-12 absolute -top-6 left-5 ">
    <i class="fas fa-graduation-cap w-full rounded-full p-4 bg-blue-200 border"></i>
    </div>
    <div class="school-info p-2">
      <div class="school-info-title flex items-end mt-10">
        <p class="school-title text-3xl font-bold">${schoolinstitution}</p>
        <p class="batch-date text-sm text-red-900">${classof}</p>
      </div>
      <p class="school-level text-xl font-semibold my-3">${schoollevel}</p>
      <p class="school-experience py-1 text-blue-700">${schooldescription}</p>
    </div>
  </div>
  <!-- school ends -->
  <div>
</section>
`
 */

export const getContact = (email: string,socialmedialinks:TypeSocialMediaLinks,uniqueid:string) => {
  const {instagram,facebook,twitter,youtube} = socialmedialinks

  return `    <section id="contact" class="sm:pt-20 w-screen px-2 sm:px-5 md:px-10 xl:px-40 py-10 pb-0">
  <h1 class="text-4xl font-bold mb-5 md:mb-20 lg:mb-26">Contact</h1>
  <div class="w-full h-full">
    <div class="contact lg:w-[80%] lg:mx-auto border-black p-2 flex flex-col sm:flex-row">
    <form class="contact-form flex flex-col sm:w-1/2 sm:pr-8"
    action="https://formsubmit.co/livingasrb007@email.com" method="post">
    <div class="response-msg"></div>
    <input class="n mb-4 p-2 rounded" type="text" placeholder="Your name" name="name" required>
    <input class="e mb-4 p-2 rounded" type="text" placeholder="Your email" name="email" required>
    <textarea class="m mb-4 p-2 rounded" placeholder="Message" name="message" required></textarea>
    <input class="send p-2 rounded bg-blue-500 text-white hover:bg-blue-700 cursor-pointer" type="button"
      value="Send">
  </form>
      <div class="block sm:hidden w-full h-1 my-5 bg-blue-900"></div>
      <div
      class="contact-right lg:pl-[5rem] flex flex-col justify-between mt-2 sm:mt-0 sm:w-1/2 sm:pl-8 sm:border-l-4 border-blue-900 ">
      <h1 class="mb-10 text-4xl font-bold">FOLLOW ME</h1>
      <div class="contact-social flex flex-col text-2xl font-semibold">
        <p class="mb-4">LET US BE SOCIAL</p>
        <div class="contact-social-icons flex">
          <a href=${instagram} class="mr-2"><i class="fab fa-instagram"></i></a>
          <a href=${facebook} class="mr-2"><i class="fab fa-facebook"></i></a>
            ${twitter && `<a href=${twitter} class="mr-2"><i class="fab fa-twitter"></i></a>`}
            ${youtube && `<a href=${youtube} class="mr-2"><i class="fab fa-youtube"></i></a> `}
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>



  <script>

  let buttonClicked = null;

  $('.warn').css({ 'display': 'none' })

  $('.send').on('click', (e) => {
    e.preventDefault()
    console.log("🚀 ~ file: index.html:212 ~ $ ~ preventDefault:", 'preventDefault')

    $('.send').val('sending..')


    const name = $('.n').val()
    const email = $('.e').val()
    const message = $('.m').val()

    if (message && email) {
      const payload = {
        sendername: name,
        senderemail: email,
        sendermessage: message
      }
      console.log(payload)
      // https://sajidportfolio.adaptable.app
      fetch('https://sajidportfolio.adaptable.app/sendformmessage/${uniqueid}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(response => {
          if (response.ok) {
            $('.send').val('send')
            buttonClicked = 'success';
            $('.response-msg').css({ 'display': 'block', 'color': 'green' })
            $('.response-msg').text('Feedback sent successfully!')
            $('.n').val('')
            $('.e').val('')
            $('.m').val('')
          } else {
            $('.send').val('send')
            buttonClicked = 'failed';
            console.error('Failed to send feedback:', response);
            $('.response-msg').css({ 'display': 'block', 'color': 'red' })
            $('.response-msg').text('Failed to send feedback. Please try again.')
          }
        })
        .catch(error => {
          $('.send').val('send')
          buttonClicked = 'failed';
          console.error('An error occurred while sending feedback:', error);
          $('.response-msg').css({ 'display': 'block', 'color': 'red' })
          $('.response-msg').text('An error occurred while sending feedback. Please try again.')
        });
        
      } else {
      $('.send').val('send')
      $('.response-msg').css({ 'display': 'block', 'color': 'red' })
      $('.response-msg').text('Email and message are required fields')
    }

  })
</script>



  `
}


/* Student, MBBS 2nd year<br>
    Rauttahat-09, Madhesh Province, Nepal<br>
    +977-9866558908 */

/*         <a href=${youtube} class="mr-2"><i class="fab fa-youtube"></i></a> */

export const getFooter = (username: string,address: string) =>{
  return `    <footer class="">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,74.7C274.3,75,343,85,411,106.7C480,128,549,160,617,192C685.7,224,754,256,823,240C891.4,224,960,160,1029,144C1097.1,128,1166,160,1234,170.7C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg><div class="bg-[#0099ff] text-lg sm:flex sm:justify-between px-2 sm:px-5 md:px-10 xl:px-40 py-10">
  <div class="foot-info ">
    <h1>${username}</h1>
    <address>${address}</address>
    </div>
    <div class="block sm:hidden w-full h-1 my-5 bg-blue-900"></div>
    <div class="foot-copyright f-c sm:border-l-4 border-blue-900 sm:pl-8 sm:w-[50%]">
      <p>©2023 ${username} all rights reserved</p>
    </div>
  </div>
  </footer>`
}




export const getJsVar = (professions:string[]) =>{


  const getProfessions = (professions:string[]) =>{
    let prof = [] as string[]
    
    professions.forEach((pro)=>{
      prof.push(`'${pro}'`)
    })
    
    return prof
    }
    
    const professionarray = getProfessions(professions)


  return `  <script>
  function navbarToggle() {
    var headerContents = document.querySelector('.header-contents');
    var headerNavToggle = document.querySelector('.header-nav-toggle');
  
    headerContents.classList.toggle('nav-show');
    headerContents.classList.toggle('list-show');
    headerContents.classList.toggle('nav-hide');
    headerContents.classList.toggle('list-hide');
    headerNavToggle.classList.toggle('rotateDiv');
  }
  
  document.querySelector('.header-nav-toggle').addEventListener('click', function () {
    navbarToggle();
  });
  
  var headerLinks = document.querySelectorAll('.header-contents li a');
  headerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navbarToggle();
    });
  });


  
   const nameMoving = [${professionarray}];
  let vari_i = 0;
  let vari_j = 0;
  let text = '';
  let fore = true;
  setInterval(() => {
    if (vari_j > nameMoving.length - 1) vari_j = 0;
    const names = nameMoving[vari_j] + ' ';
    if (fore) {
      text += names[vari_i++];
      if (vari_i > names.length - 1) fore = false;
    } else {
      text = text.substring(0, text.length - 1);
      vari_i--;
      if (vari_i <= 0) {
        fore = true;
        text = '';
        vari_j++;
      }
    }
    document.querySelector('.moving-text').textContent = text;
  }, 150);
  </script>`
}
