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


const alice2 = document.querySelector("#alice2");



const alice3 = document.querySelector("#alice3");



// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// console.log(animation1);