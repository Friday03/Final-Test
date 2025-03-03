// Question 3: User Authentication

function authenticateUser(username, password) {
  const validUsername = 'user123';
  const validPassword = 'securepass';
  let msgReturn = "";
  // เริ่มเขียนโค้ดตรงนี้
  //If Else Case
  // if(username === validUsername && password === validPassword) {
  //   console.log('Login successful.')
  //   msgReturn = 'Login successful.' ;
  // } else {
  //   console.log('Login failed. Please check your username and password.');
  //   msgReturn = 'Login failed. Please check your username and password.';
  // }

  //Ternary Operator Case :
  username === validUsername && password === validPassword
    // ? console.log('Login successful.')
     ? msgReturn = 'Login successful.'
    // : console.log('Login failed. Please check your username and password.');
    : msgReturn ='Login failed. Please check your username and password.';
    return msgReturn;
}

// ตัวอย่างการใช้งาน
const username1 = 'user123';
const password1 = 'securepass';

const username2 = 'guest';
const password2 = 'password123';
authenticateUser(username1, password1);
console.log(authenticateUser(username1, password1))
