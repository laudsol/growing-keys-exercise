function growingKeys(val, num){

  var counter = 1;
  var tempKey = '';
  var obj = {};

  if(typeof val !== 'string' || typeof num !== 'number'){
   return -1;
 }

  while(counter <= num){
    counter += 1;
    tempKey+=val;
    obj[tempKey] = true;
  }
  return obj;
}

module.exports = growingKeys;
