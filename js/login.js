document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault(); //--barbar reload na neyar jonno lekhsi
    console.log('login button clicked');

    const phoneNumber = document.getElementById('phone-number').value;
    console.log('Phone number show');
})