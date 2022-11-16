

const isValidPhone = function (phone) { 
    return /^(\()?\d{3}(\))?(|\s)?\d{3}(|\s)\d{4}$/.test(phone) 
}


const isValidEmail = function (email) {
     return /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)
}


  module.exports = {
    isValidPhone,
    isValidEmail
  }