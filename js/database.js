//FORM SUBMISSON/DATA CONTROL
const form = document.querySelector('form');
const modal = document.querySelector('.modal');
const modalClose = [document.querySelector('.modal-content h3'), modal];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const date = new Date();
    const contact = {
        date: date,
        email: form.email.value,
        name: form.name.value,
        number: form.number.value,
        message: form.message.value
    }
    
    //Light frontend validation 
    const numberPattern = /^[0-9]{11}$/;
    let numResult = numberPattern.test(contact.number);
    const num = document.querySelector('#number');
    if(!numResult){
        num.style.border = '3px solid red';
        return false;
    }
    
    //Sending information to NOSQL DB
    db.collection('Contacts').add(contact)
    .then(() => {
        console.log('item-added');
    })
    .catch(err => console.log(err));

    if(modal.classList.contains('non-visible')){
        modal.classList.remove('non-visible')
        modal.classList.add('visible')
    }

    form.reset();
});

modalClose.forEach((close) => {
    close.addEventListener('click' , (e) => {
        if(e.target.classList.contains('close')){
            modal.classList.remove('visible')
            modal.classList.add('non-visible')
        }
    });
});
