const age = prompt('Quel âge avez-vous ?');
const majeur = age >= 18 && console.log('Vous êtes majeur');
const pasMajeur = age < 18 && console.log('Bonjour simple user');

const userRole = prompt('Quel est votre rôle dans la société ?');
const isadmin =
  age >= 18 && userRole === 'admin' && console.log('Bienvenue Admin');

const password = prompt('Quel est votre mot de passe ?');
const passwordLength =
  password.length >= 5 &&
  age >= 18 &&
  userRole === 'admin' &&
  console.log('Bienvenue master user');
