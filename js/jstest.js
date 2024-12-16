document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('complete').style.display = 'block';
});
