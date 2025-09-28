function setCookie(name, value, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000)); // ✅ Fixed: added missing 60
    const expire = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expire + "; path=/"; // ✅ Added path for visibility
    console.log(name + " cookie created");
}

function getCookie(name) {
    console.log('my cookie', document.cookie);
    const decodeCookie = decodeURIComponent(document.cookie);
    const cookie = decodeCookie.split(';');
    for (let i = 0; i < cookie.length; i++) {
        let cook = cookie[i].trim();
        if (cook.indexOf(name + '=') === 0) {
            return cook.substring(name.length + 1);
        }
    }
    return null;
}

setCookie("username", "Srinivas", 1);
console.log("Retrieved cookie:", getCookie("username"));