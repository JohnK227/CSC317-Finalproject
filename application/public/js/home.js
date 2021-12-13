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



    
    


document.body.addEventListener("mousedown", function(e) {
    num = num - 1;

        setTimeout(() => {
            
            let currentOpacity = 1.0;
            let timer = setInterval(() => {
                 id = e.target.id;
                if (currentOpacity < 0.05){
                    clearInterval(timer);
                    
                        console.log(e.target.id)
                        
                        if (e.target.id == 'container' || e.target.id == 'num') {
                
                        } else {
                            document.getElementById(e.target.id).outerHTML = ""
                        }
                  
                }
                currentOpacity = currentOpacity - 0.05;
                e.target.id.style.opacity = currentOpacity;
            }, 5);
        },4000);

    }, false)
        