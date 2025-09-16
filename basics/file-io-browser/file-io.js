
//Reading file in browser 

document.getElementById("fileInput").addEventListener('change', (event)=>{
    const file= event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(){
        document.getElementById('fileContent').textContent = reader.result;
    };
    reader.readAsText(file);
});

//Write file in browser

// const data = "Hello Srinivas, this is a file created in pure JS!";
// const blob = new Blob([data], {type: 'text/plain'});
// const link = document.createElement('a');

// link.href = URL.createObjectURL(blob);
// link.download = 'srinivas-notes.txt';
// link.click();