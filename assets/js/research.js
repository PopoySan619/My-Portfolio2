/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Data Warehousing",
    authors:
      "Popoy",
    conferences:
      "A data warehouse is a type of data management system that is designed to enable and support business intelligence (BI) activities, especially analytics.",
    researchYr: 2023,
    image: "assets/images/research-page/data.png",
  },

  {
    title: "Internet of thing (IOT)",
    authors:
      "Popoy",
    conferences:
      "The Internet of things describes devices with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks.",
    researchYr: 2023,
    image: "assets/images/research-page/iot.jpg",
  },

  {
    title:
      "Big data",
    authors: "Popoy",
    conferences:
      "Big data primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. Data with many entries offer greater statistical power, while data with higher complexity may lead to a higher false discovery rate.",
    researchYr: 2023,
    image: "assets/images/research-page/big.png",
  },

  {
    title:
      "Cloud computing",
    authors:
      "Popoy",
    conferences:
      "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.",
    researchYr: 2023,
    image: "assets/images/research-page/cloud.png",
  },

  {
    title: "Semantic Web",
    authors: "Popoy",
    conferences:
      "The Semantic Web, sometimes known as Web 3.0, is an extension of the World Wide Web through standards set by the World Wide Web Consortium. The goal of the Semantic Web is to make Internet data machine-readable.",
    researchYr: 2023,
    image: "assets/images/research-page/sem.png",
  },

  {
    title: "Artificial intelligence",
    authors: "Popoy",
    conferences:
      "Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. (AI) may also refer to the machines themselves.",
    researchYr: 2023,
    image: "assets/images/research-page/ai.jpg",
  },

  {
    title:
      "Data Mining",
    authors: "Popoy",
    conferences:
      "Data mining is the process of extracting and discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems",
    researchYr: 2023,
    image: "assets/images/research-page/mine.jpg",
  },
  {
    title:
      "Digital image processing",
    authors:
      "Popoy",
    conferences:
      "Digital image processing is the use of a digital computer to process digital images through an algorithm. As a subcategory or field of digital signal processing, digital image processing has many advantages over analog image processing.",
    researchYr: 2023,
    image: "assets/images/research-page/dip.png",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
