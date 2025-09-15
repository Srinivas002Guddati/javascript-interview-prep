

document.getElementById('conctactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
        document.getElementById('response').textContent = 'Please fill all fields.';
        return;
    }
    // Simulate form submission
    document.getElementById('response').textContent = `Thanks, ${name}! We'll get back to you at ${email}.`;

    //Optionally reset form
    document.getElementById('conctactForm').reset();
});