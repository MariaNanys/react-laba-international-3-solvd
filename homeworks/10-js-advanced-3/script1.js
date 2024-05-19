let sectionPictures = document.querySelector(".section_pics");
let apiAddress = "https://randomuser.me/api/?gender=female&results=10";

// fetch --------------------------------------------

async function picsFemale(url) {
  const address = await fetch(url);
  const datas = await address.json();

  const arrDatas = datas.results;

  let arrayMap = arrDatas.map((e, id) => {
    let str = `<figure class=${id} style="display: flex; justify-content: center; flex-direction: column; width: 150px">
                    <img src=${e.picture.large} alt="Picture of ${e.gender}" />
                    <figcaption style="text-align: center;">${e.name.first} ${e.name.last}</figcaption>
                </figure>`;
    return str;
  });
  let listItem = "";
  arrayMap.forEach((element) => {
    listItem += element;
  });
  sectionPictures.innerHTML = listItem;
}
picsFemale(apiAddress);

// XMLHttpRequest()----------------------------------

// const request = new XMLHttpRequest();
// request.open("get", apiAddress);
// request.send();
// request.onreadystatechange = () => {

//   if (request.readyState == 4) {
//     let arrDatas = JSON.parse(request.response).results;
//     let arrayMap = arrDatas.map((e, id) => {
//       let str = `<figure class=${id} style="display: flex; justify-content: center; flex-direction: column; width: 150px">
//                     <img src=${e.picture.large} alt="Picture of ${e.gender}" />
//                     <figcaption style="text-align: center;">${e.name.first} ${e.name.last}</figcaption>
//                 </figure>`;
//       return str;
//     });
//     let listItem = "";
//     arrayMap.forEach((element) => {
//       listItem += element;
//     });
//     sectionPictures.innerHTML = listItem;
//   }
// };
