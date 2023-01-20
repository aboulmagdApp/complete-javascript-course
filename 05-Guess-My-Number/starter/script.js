'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number 🏆')
// );

// const Ids = [
//   '2371263522',
//   '9541257415',
//   '5846574598',
//   '632541222212122',
//   '785424596585555',
//   '45462123158',
// ];

// for (let i = 0; i < Ids.length; i++) {
//   console.log(Ids[i].slice(-4).padStart(Ids[i].length, '*'));
// }

// const inventory = [
//   {
//     transactionType: 'Add',
//     Quantity: 250,
//     date: '',
//   },
// ];

// // const calcDaysPassed = function(date2, date1){
// //   return Math.round(Math.abs(new Date(date2) - new Date(date1))/(1000*60*60*24));
// // }

// const calcDaysPassed = function (date2, date1) {
//   const days = Math.round(
//     Math.abs(new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24)
//   );
//   if (days === 0) return 'today';
//   if (days === 1) return 'yesterday';
//   if (days <= 7) return `${days} days ago`;
// };

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,

//   movementsDates: [
//     '2019-11-18T21:31:17.178Z',
//     '2019-12-23T07:42:02.383Z',
//     '2020-01-28T09:15:04.904Z',
//     '2020-04-01T10:17:24.185Z',
//     '2020-05-08T14:11:59.604Z',
//     '2020-05-27T17:01:17.194Z',
//     '2020-07-11T23:36:17.929Z',
//     '2020-07-12T10:51:36.790Z',
//   ],
//   currency: 'EUR',
//   locale: 'pt-PT', // de-DE
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,

//   movementsDates: [
//     '2019-11-01T13:15:33.035Z',
//     '2019-11-30T09:48:16.867Z',
//     '2019-12-25T06:04:23.907Z',
//     '2020-01-25T14:18:46.235Z',
//     '2020-02-05T16:33:06.386Z',
//     '2020-04-10T14:43:26.374Z',
//     '2020-06-25T18:49:59.371Z',
//     '2020-07-26T12:01:20.894Z',
//   ],
//   currency: 'USD',
//   locale: 'en-US',
// };

// const accounts = [account1, account2];

const timerCountner = document.getElementById('timer-div');

const startTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    timerCountner.textContent = `${min}:${sec}`;
    console.log(time);

    if (time === 0) {
      clearInterval(timer);
      setTimeout(() => {
        timerCountner.textContent = 'time is finished try later thanks';
      }, 1000);
    }

    time--;
  };
  let time = 10;
  const timer = setInterval(tick, 1000);
};

const inventoryData = [
  {
    type: 'Add',
    date: '2022-11-01T13:15:33.035Z',
    Quantity: 1500,
  },
  {
    type: 'out',
    date: '2022-11-15T18:00:33.035Z',
    Quantity: -65,
  },
  {
    type: 'out',
    date: '2022-11-15T18:15:21.035Z',
    Quantity: -250,
  },
  {
    type: 'Add',
    date: '2022-11-15T18:10:01.035Z',
    Quantity: 900,
  },
  {
    type: 'out',
    date: '2022-11-16T13:15:33.035Z',
    Quantity: -35,
  },
];

const inventoryTransactions = function (inventory) {
  let newInv = [];
  const sortedDate = inventory
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const dataItem = sortedDate.map(el => {
    newInv.push(el.Quantity);
    const date = new Date('2022-11-16T13:15:33.035Z')
      .toISOString()
      .slice(0, 10);
    return {
      type: el.type,
      date: `${new Date(el.date).toISOString().slice(0, 10)} ${new Date(el.date)
        .toISOString()
        .slice(11, 16)}`,
      transactionType: el.Quantity > 0 ? 'addition' : 'Withdrawal',
      incoming: el.Quantity > 0 ? el.Quantity : 0,
      outgoing: el.Quantity < 0 ? Math.abs(el.Quantity) : 0,
      balance: newInv.reduce((a, b) => a + b, 0),
    };
  });
  return dataItem;
};

console.log(inventoryTransactions(inventoryData));
