

let cart="5038806337378157"
function CartValid(cart){
  cart=[...cart].reverse().map((item)=> +item)
  let sum= 0;
  for(let x= 0; x < cart.length; x++){
  if(x % 2 == 0){
    sum= sum + cart[x]
  }else{
    let el=cart[x] * 2
    sum= sum + (el> 9 ? el- 9: el)
  }
  }
if(sum % 10 == 0){
  return sum 
}else{ console.log('Неподдерживаемая платежная система')}
throw new SyntaxError();
}

let f=CartValid(cart)

let cot=cart.split('')

 let num ="visa";
if(cot[[0]]==4){
console.log(num)
}
let cet=cart.substring(0,2)
for(let i=51; i<= 55;i++)
if(cet == i){
console.log('mastercard')
}
cet=cart.substring(0,4)
for(let j=2221;j<=2720;j++)
if(cet == j){
  console.log('mastercard')
}
let cut=cart.substring(0,4)

let estro=[5018,5020,5038,5893,6304,6759,6761,6762,6763];

for (let l = 0; l < estro.length;l++) 
if(cut == estro[l]){
console.log('maestro')
 }
