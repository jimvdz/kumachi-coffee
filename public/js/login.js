if (document.location.pathname == '/admin') {
    const queryString = window.location.search;
    let errorMsgElement = document.getElementById('errormsg');
    if (queryString === '?incorrect') {
        errorMsgElement.innerHTML = 'Incorrect username or password';
    }
    else if (queryString === '?invalid') {
        errorMsgElement.innerHTML = 'You must be logged in to access that page!';
    }
}