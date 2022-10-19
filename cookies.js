function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}

function isCookieSet(name) {
    var cookie = getCookie(name);
    
    // checking whether webauthnstatus is null or not
    if (cookie) {
        // the cookie is set
        return true;
    }
    // the cookie does not exist
    else {
        return false;
    }
}

function setCookie(name, value, days) {
    const d = new Date();
    
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Strict";
}

function sendInfo(url, value) {
    var request = new XMLHttpRequest();

    request.open('get', url + '?' + value, true);
    request.send();
}