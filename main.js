const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

// callback
const alice1 = document.querySelector("#alice1");
// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// animation1.onfinish = function() {
//   const animation2 = alice2.animate(aliceTumbling, aliceTiming);
//   animation2.onfinish = function() {
//     const animation3 = alice3.animate(aliceTumbling, aliceTiming);
//   }
// }


// promise
const alice2 = document.querySelector("#alice2");
// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// animation1.finished.then(function() {
//   const animation2 = alice2.animate(aliceTumbling, aliceTiming);
//   return animation2.finished;
// }).then (function() {
//   const animation3 = alice3.animate(aliceTumbling, aliceTiming);
//   return animation3.finished;
// });


const alice3 = document.querySelector("#alice3");

// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// animation1.onfinish (async function() {
//   const animation2 = await alice2.animate(aliceTumbling, aliceTiming);
//   return animation2.finished;
// }) (async function() {
//   const animation3 = await alice3.animate(aliceTumbling, aliceTiming);
//   return animation3.finished;
// });

async function anime(){
  const animation1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
  
  const animation2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
  
  const animation3 = await alice3.animate(aliceTumbling, aliceTiming).finished;
}
anime();

//   const animation2 = await alice2.animate(aliceTumbling, aliceTiming);
//   animation2.onfinish = function() {
//     const animation3 = alice3.animate(aliceTumbling, aliceTiming);
//   }
// }


// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// console.log(animation1);