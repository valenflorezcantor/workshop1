// Ejercicio tres
const pTrue = true;
const qTrue = true;
const pFalse = false;
const qFalse = false;

const notPTrue = !pTrue;
const notPFalse = !pFalse;

const notQTrue = !qTrue;
const notQFalse = !qFalse;

const notPAndQTrueTrue = notPTrue && qTrue;
const notPAndQTrueFalse = notPTrue && qFalse;
const notPAndQFalseTrue = notPFalse && qTrue;
const notPAndQFalseFalse = notPFalse && qFalse;

console.log(" a.   -----------------------------------------------------------");

console.log(`${pTrue}   ${qTrue}    ${notPTrue}       ${notPAndQTrueTrue}`);
console.log(`${pTrue}   ${qFalse}   ${notPTrue}       ${notPAndQTrueFalse}`);
console.log(`${pFalse}   ${qTrue}   ${notPFalse}       ${notPAndQFalseTrue}`);
console.log(`${pFalse}   ${qFalse}  ${notPFalse}       ${notPAndQFalseFalse}`);

