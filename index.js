// write a function that 
//      takes two arguments (name and email)
//      makes a POST request to /users with the name and email
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: `${userName}`,
            email: `${userEmail}`,
        }),
    })
    .then(response => response.json())
    .then(object => {
        renderObjId(object)
    })
    .catch(error => {
        renderError(error)
    })
}

// handles the POST request response, retrieves the new id value and appends it to the DOM
function renderObjId(obj){
    const newElm = document.createElement('p');
    newElm.innerHTML = obj.id;
    document.querySelector('body').appendChild(newElm);
}

// handles a failed POST request using catch, appends the error message to the DOM
function renderError(errObj){
    const newElm = document.createElement('p');
    newElm.innerHTML = errObj.message;
    document.querySelector('body').appendChild(newElm);
}