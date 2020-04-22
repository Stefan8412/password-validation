// password validator function isValidPassword
//It accepts 2 arguments:password and username
//Password must:
//-be at least 8 character
//-cannot contain  spaces
//-cannot contain username
//If  all requirment are met , return true
//Otherwise:false
//if all of them are true - tak je to valid

/*function isValidPassword(password,username){
 if(password.length < 8){
       return false;
    }
  if(password.indexOf(' ') !==-1) {
        //indexOf nam da -1 ked tam ten character nie je...,takze ked to nie je negative mame problem,!==strict not equal
        return false;
    }
    if(password.indexOf(username)!==-1){
        return false;
    }
    return true;
}*/


/*function isValidPassword(password,username){
    if(password.length < 8 ||password.indexOf(' ') !==-1|| password.indexOf(username)!==-1){
        return false;
    }
    return  true;
}*/

function isValidPassword(password,username){
    const tooShort=password.length < 8;
    const hasSpace=password.indexOf(' ') !==-1;
    const tooSimiliar=password.indexOf(username)!==-1;
       if(tooShort || hasSpace || tooSimiliar) return false;
       return true;
    }
