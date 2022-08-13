// let isAdmin = false;
// let isSabado = true;
// !isAdmin && isSabado && console.log(`nao é admin`)

// ternário
let a = true;
let b = true;

if (a && b) {
  console.log(1);
  console.log(1);
} else {
  console.log(2);
}

a && b ? (a = false) : console.log(2);
a && b ? (a = false) : console.log(2);

console.log(a);

let isAdmin = false;
!isAdmin && console.log(1);
!isAdmin ? console.log(1) : null;
