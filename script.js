let nom = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('password-confirmation')
let radioButton = document.getElementById('policy')
let submit = document.querySelector('#send')
const togglePassword = document.querySelectorAll('.toggle-password')

let validity = true

//Function for on Focus input to chage label postion
let onFocusValidation = (element) => {
  element.addEventListener('focus', () => {
    let parent = element.parentNode
    console.log(parent)
    element.parentNode.classList.add('controlled')
  })
}
//Function for validate name

let validateNom = (element) => {
  if (element.value == '') {
    element.parentNode.classList.add('error-input')
    element.parentNode.classList.add('error-label')
    validity = false
    return false
  } else {
    validity = true
    element.parentNode.classList.remove('error-input')
    element.parentNode.classList.remove('error-label')
  }
}
//Function for validate email

let validateEmail = (element) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value)) {
    element.parentNode.classList.remove('error-input')
    element.parentNode.classList.remove('error-label')
    validity = true
  } else {
    validity = false
    element.parentNode.classList.add('error-input')
    element.parentNode.classList.add('error-label')
    return false
  }
}

//Function for validate password

let validatePassword = (element) => {
  console.log(element.value.length)
  if (element.value.length >= 4 && element.value.length <= 6) {
    element.parentNode.classList.remove('error-input')
    element.parentNode.classList.remove('error-label')
    validity = true
  } else {
    element.parentNode.classList.add('error-input')
    element.parentNode.classList.add('error-label')
    validity = false
    return false
  }
}

//Function for test password

let matchPassword = (password, confirmPassword) => {
  if (password.value != confirmPassword.value) {
    alert('Mots de passes differents')
    validity = false
    return null
  } else {
    validity = true
  }
}

//Function for validate radioButton

let checkedRadioButton = (radioButton) => {
  if (!radioButton.checked) {
    alert('Veuillez cocher la case')
    validity = false
    return null
  } else {
    validity = true
  }
}

//Function for showing password

let showHidePassword = (element, password) => {
  element.addEventListener('click', function (e) {
    let type =
      password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', type)
  })
}

onFocusValidation(nom)
onFocusValidation(email)
onFocusValidation(password)
onFocusValidation(confirmPassword)

submit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('click')
  validateNom(nom)
  validateEmail(email)
  validatePassword(password)
  matchPassword(password, confirmPassword)
  checkedRadioButton(policy)
  if (validity) {
    nom.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
    radioButton.checked = false
  }
})

showHidePassword(togglePassword[0], password)
showHidePassword(togglePassword[1], confirmPassword)
