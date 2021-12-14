














function addFlashFromFrontEnd(message) {
    let flashMessageDiv = document.createElement('div')
    let innerFlashDiv = document.createElement('div')
    let innerTextNode = document.createTextNode(message)
    innerFlashDiv.appendChild(innerTextNode)
    flashMessageDiv.appendChild(innerFlashDiv)
    flashMessageDiv.setAttribute('id', 'flash-message')
    innerFlashDiv.setAttribute('class', 'alert alert-info')
    document.getElementByTagName('body')[0].appendChild(flashElement)
    setFlashMessageFadeOut(flashMessageDiv)
}



function setFlashMessageFadeOut(flashMessageElement) {
    setTimeout(() => {
        let currentOpacity = 1.0;
        let timer = setInterval(() => {
            if (currentOpacity < 0.05) {
                clearInterval(timer);
                flashMessageElement.remove();

            }
            currentOpacity = currentOpacity - 0.05;
            flashElement.style.opacity = currentOpacity;
        }, 50);
    }, 4000);

}


let flashElement = document.getElementById('flash-message');
if (flashElement) {
    setFlashMessageFadeOut(flashElement);
}



function createCard(postData) {
    return `<div id="post-${postData.id}" class="card">
    <img class = "card-image" src="${postData.thumbnail}" alt="image">
    <div id="photo" class = "card-body">
        <p class = "card-title">${postData.title}</p>
<a href="/post/${postData.id}" class = "anchor-buttons" style = "color: rgb(249, 203, 122">Details</a>
        <p class = "card-text">${postData.description}</p>
    </div>
</div>`;
}



function executeSearch() {
    let searchTerm = document.getElementById('text-info').value;
    if (!searchTerm) {
        location.replace('/home');
        addFlashFromFrontEnd('no search term');
        return;
    }
    let mainContent = document.getElementById('main-content')
    let searchURL = `/posts/search?search=${searchTerm}`
    fetch(searchURL)
        .then((data) => {
            return data.json();
        })
        .then((data_json) => {
            let newMainContentHTML = " ";
            data_json.results.forEach((row) => {
            newMainContentHTML += createCard(row);

        })
    mainContent.innerHTML = newMainContentHTML;
})
            
        }
    

    
let searchButton = document.getElementById('button_search')
searchButton.addEventListener("click", function() {


if (searchButton) {
    executeSearch();
}
})


