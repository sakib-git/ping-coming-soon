const inputF = document.getElementById('inputF')
const btn = document.getElementById('btn')
const notValid = document.getElementById('err1')
const empty = document.getElementById('err2')


btn.addEventListener('click', () => {

    const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if (inputF.value == '') {
        empty.classList.add('show')
        inputF.focus()
        return;
    }

    if (!inputF.value.match(emailRegex)) {
        notValid.classList.add('show')
    }
    else {
        inputF.value = '';
    }

})


inputF.addEventListener('keyup', () => {

    empty.classList.remove('show')
    notValid.classList.remove('show')
})

