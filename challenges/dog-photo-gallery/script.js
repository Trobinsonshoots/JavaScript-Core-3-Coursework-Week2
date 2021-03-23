const api = `https://dog.ceo/api/breeds/image/random`;

// https://images.dog.ceo/breeds/pyrenees/n02111500_2051.jpg

const list = document.getElementById('list');
const listItem = document.createElement('li');
const dogImg = document.createElement('img');
const deleteBtn = document.getElementById('delete');
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', getDogFetch);


function getDogFetch() {
  fetch(api)
    .then((response) => {
      if (!response.ok){
         throw Error(`Error Status:` + response.status)
      } 
      return response.json();
    })
    .then((data) => {
      let list = document.getElementById('list');
      let listItemDiv = document.createElement('div');
      let listItem = document.createElement('li');
      let listImgDiv = document.createElement('div');
      let dogImg = document.createElement('img');
      let listBody = document.createElement('div');
      let listTitle = document.createElement('h5');
      let listParagraph = document.createElement('p');
      let listFooter = document.createElement('div');
      let listCheck = document.createElement('input');
      listCheck.setAttribute("type", "checkbox");

      listFooter.append(listCheck);
      listItemDiv.className = "col";
      listItem.className = "card h-100";
      listImgDiv.className = "card-img-div align-items-center";
      dogImg.className = "card-img-top";
      listBody.className = "card-body";
      listTitle.className = "card-title";
      listFooter.className = "card-footer";

      let getUrlforDogBreed = data.message;
      let splitDogBreed = getUrlforDogBreed.split('breeds/')[1].split('/');
      let dogBreed = splitDogBreed[0].replace('-', ' ');
      console.log(dogBreed);

      listTitle.innerText = `Breed `;
      listParagraph.innerText = dogBreed;
      listParagraph.style.textTransform = "capitalize";
      dogImg.src = data.message;
      listItemDiv.append(listItem);
      listImgDiv.append(dogImg);
      listItem.append(listImgDiv);
      listBody.append(listTitle);
      listBody.append(listParagraph);
      listItem.append(listBody);
      listItem.append(listFooter);
      list.append(listItemDiv);

      deleteBtn.addEventListener('click', () => {
        let checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

        // let parentOfChecked = checkedBoxes[0].parentElement.parentElement.parentElement;

        // checkedBoxes.map((item) => item);

        if (checkedBoxes.length > 0) {
          for (let i=0; i<checkedBoxes.length; i++) {
            let parentOfChecked = checkedBoxes[i].parentElement.parentElement.parentElement;
            parentOfChecked.remove();
          }
          i--
        }
    });
  })
    .catch((error) => console.log(error));
}
