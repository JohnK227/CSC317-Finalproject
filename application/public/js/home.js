var i = 0;
var number = 0;

function createphotocard(data, containerDiv) {
containerDiv.innerHTML += `<div id="${data.id}">
<img src= "${data.url}" id="${data.id}" width = "200" height = "200"/> 
<div id="${data.id}"> "${data.title}"  </div> </div>`;

}






let mainDiv = document.getElementById('container');
    if(mainDiv) {
    let url = "https://jsonplaceholder.typicode.com/albums/2/photos";



fetch(url)
    .then((data) => data.json())
    .then((photos) => {
        let innerHTML = "";
        photos.forEach((photos) => {
            createphotocard(photos, mainDiv);
            number++;
            document.getElementById('num').innerHTML = number;
        });
    })
}



    document.getElementById('container').addEventListener('click', disappear);
    
    var i = 0;
function disappear(event) {
        let hffhgj = event.target.getAttribute('id');
        let element = document.getElementById('container');
        let op = 1;
        let timer = setInterval(function() {
            if (op <=0.5) {
                element.remove();
                number--;
                clearInterval(timer);
                
            }
            
            op -= 0.1;
        });
    }

    