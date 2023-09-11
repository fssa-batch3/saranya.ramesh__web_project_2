class User{
    name
    email
    mobilenumber
    password
    confirmpassword

    validatename(name){
        const  pattern = new Regexp ("[a-zA-Z]+")
        return pattern.test(name) 
    }
    validateEmail(email){
        const pattern = new Regexp ("^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$")
        return pattern.test(email)
    }
    validatemobilenumber(mobilenumber){
        const pattern = new Regexp("")
    }
}
