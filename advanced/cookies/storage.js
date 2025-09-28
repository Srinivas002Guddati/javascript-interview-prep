
//LocalStorage handlers

function saveLocal(){
    const value = document.getElementById("localInput").value;
    localStorage.setItem('localData', value);
    console.log('saved to localStorage: ', value);
};

function loadLocal(){
    const value = localStorage.getItem('localData');
    document.getElementById("localInput").textContent = value || "No data found";
}

function clearLocal(){
    localStorage.removeItem('localData');
    document.getElementById("localInput").textContent = "";
}

//SessionStorage handlers

function saveSession(){
    const value = document.getElementById('sessionInput').value;
    sessionStorage.setItem('sessionData', value);
    console.log('saved to sessionStorage: ', value);
}

function loadSession(){
    const value = sessionStorage.getItem('sessionData');
    document.getElementById("sessionOutput").textContent =value || 'No data found';
};

function clearSession(){
    sessionStorage.removeItem('sessionData');
    document.getElementById('sessionOutput').textContent = "";
}