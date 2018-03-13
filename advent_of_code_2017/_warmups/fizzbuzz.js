// less good, first pass
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz ');
  else if (i % 5 === 0) console.log('buzz ');
  else if (i % 3 === 0) console.log('fizz ');
  else console.log(i);
}
// better
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log('fizzbuzz ');
  else if (i % 5 === 0) console.log('buzz ');
  else if (i % 3 === 0) console.log('fizz ');
  else console.log(i);
}
// best
for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
