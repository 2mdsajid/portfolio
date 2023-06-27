
export const generateFinalPageHtml = (
  metadata: string,
  header: string,
  aboutpage: string,
  contact: string,
  footer: string,
  jsvar: string,
  work: string,
  landingpage: string,
  education: string
): string => {
  const htmlpage = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
  ${metadata}
    <script src="https://kit.fontawesome.com/5d28e6dccc.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/react-icons@4.9.0/fa/index.esm.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script>
    <style>*{margin:0;padding:0;box-sizing:border-box;}
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
    }</style>
  </head>
  
  <body class="w-screen min-h-screen bg-blue-100">
  
  ${header}
  
  <div class="pt-20 w-screen border border-black mx-auto">
  ${landingpage}
  ${aboutpage}
  ${work}
  ${education}
  ${contact}
  ${footer}
  </div>
  ${jsvar}
  </body></html>
  `
  return htmlpage
}
