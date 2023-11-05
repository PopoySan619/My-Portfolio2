AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Service Crew",
    cardImage: "assets/images/experience-page/Burger.png",
    place: "Burger King",
    time: "(Jan, 2023 - present)",
    desp: "<li>Worked to Greets guests with a smile while receiving orders and processing payments.</li> <li>Prepares and packages food and drink products. </li> <li>Responsible for maintaining the cleanliness of the restaurant at all times including dining room, restroom & exterior.</li>",
  },
  {
    title: "Tech Support",
    cardImage: "assets/images/experience-page/Afni.png",
    place: "Afni",
    time: "(Mar - Aug, 2019)",
    desp: "<li>Worked To Identifying hardware and software solutions.</li><liSpeaking to customers to quickly get to the root of their problem.</li><li>Resolving network issues, Diagnosing and repairing faults, Troubleshooting technical issues.</li> <li>Fields support calls, chat, email, and/or other communication from users with inquiries regarding software programming, connectivity, printing, and similar concerns.</li>",
  },
  {
    title: "ByStander",
    cardImage: "assets/images/experience-page/Tambay.jpg",
    place: "Tambay",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Sana naging damit na lang ako… Para kahit minsan.. i-try mo kung bagay ako sayo</li><li>Ang PAG-IBIG ay parang utot. Kahit anong gawin ay napakahirap itagoAt pag-ibinuga mo ang kimkim na damdamin, maaamoy ng lahat kahit hind ka man umamin!</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "w3Schools",
    cardImage: "assets/images/experience-page/w3.jpg",
    description:
      "W3Schools is a freemium educational website for learning coding online.",
  },
  {
    title: "StudentCode",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Code ",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "FreeCodeCamp",
    cardImage: "assets/images/experience-page/freecode.png",
    description:
      "freeCodeCamp is a community of people from all around the world who are learning to code together.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Dota 2",
    subtitle: "Pvp Online Games",
    image: "assets/images/experience-page/Dota.jpg",
    desp: "Dota 2 is a 2013 multiplayer online battle arena video game by Valve. The game is a sequel to Defense of the Ancients, a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos.",
    href: "https://www.dota2.com/home",
  },
  {
    title: "League Of Legends",
    subtitle: "Pvp Online Games",
    image: "assets/images/experience-page/Lol.jpg",
    desp: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games.",
    href: "https://www.leagueoflegends.com/en-ph/",
  },
  {
    title: "CrossFire",
    subtitle: " First-person shooter ",
    image: "assets/images/experience-page/cf.jpg",
    desp: "Crossfire is an online tactical first-person shooter game developed by Smilegate Entertainment for Microsoft Windows.",
    href: "https://crossfire.z8games.com/",
  },
  {
    title: "Warzone",
    subtitle: "FPS-Battle Royale",
    image: "assets/images/experience-page/WZ.png",
    desp: "Call of Duty: Warzone was a free-to-play battle royale video game developed by Raven Software and Infinity Ward, and published by Activision.",
    href: "https://www.callofduty.com/warzone",
  },
  {
    title: "Valorant",
    subtitle: "First-person shooter",
    image: "assets/images/experience-page/valo.png",
    desp: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.",
    href: "https://playvalorant.com/en-sg/",
  },
  {
    title: "Farlight 84",
    subtitle: "Third Person Battle Royale",
    image: "assets/images/experience-page/Far.png",
    desp: "Farlight 84 is a shooter game in a wasteland setting developed using Unreal Engine 4. The game will launch on PC and mobile with HUNT mode, featuring fierce.",
    href: "https://farlight84.farlightgames.com/",
  },
  {
    title: "PUBG: BATTLEGROUNDS",
    subtitle: "Battle Royale",
    image: "assets/images/experience-page/pubg.png",
    desp: "PUBG: BATTLEGROUNDS is a battle royale that pits 100 players against each other. Outplay your opponents to become the lone survivor.",
    href: "https://pubg.com/en-na/main",
  },
  {
    title: "Tom Clancy's Rainbow Six Siege",
    subtitle: "First-person shooter",
    image: "assets/images/experience-page/rainbow.png",
    desp: "Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft.",
    href: "https://www.ubisoft.com/en-gb/game/rainbow-six/siege",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
