const buffer1 = Buffer.alloc(100);
const buffer2 = new Buffer("GFG");
const buffer3 = Buffer.from([1, 2, 3, 4]);

buffer1.write("Happy Learning");

const a = buffer1.toString("utf-8");
console.log(a);

console.log(Buffer.isBuffer(buffer1));

console.log(buffer1.length);

const bufferSrc = new Buffer("ABC");
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString("utf-8");
console.log(Data);

const bufferOld = new Buffer("GeeksForGeeks");
const bufferNew = bufferOld.slice(0, 4);
console.log(bufferNew.toString());

const bufferOne = new Buffer("Happy Learning ");
const bufferTwo = new Buffer("With GFG");
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log(bufferThree.toString());
