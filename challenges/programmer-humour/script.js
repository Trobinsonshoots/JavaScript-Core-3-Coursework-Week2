let url = `https://xkcd.now.sh/?comic=latest`;

let img = document.getElementById('img');

function fetchImg(){
    fetch(url)
    .then((res) => {
        if(!res.ok){
            throw error(`Error Status:`+ res.status)
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        img.src = data.img;
    })
}

window.onload = fetchImg;
