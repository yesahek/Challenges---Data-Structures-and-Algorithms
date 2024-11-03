// function isValidIPv4(addr){
// addr = addr.split('.')
//     if (addr.length != 4) {
//         return false;
//     } else {
//         for (let i = 0; i < addr.length; i++) {
//             num = parseInt(addr[i]);
//             if (num.toString() !== addr[i]) {
//                 return false;
//             }
//             if (num > 255) {
//                 return false;
//                } 
//          }
//          return true;
//      }
//     }

const isValidIPv4 = (input) => {
    const octets = input.split('.');

    if (octets.length !== 4) {
        return false;
    }

    return octets.every((octet)=>{
        const num = parseInt(octet);
        // console.log(num);
        return num >= 0 && num <= 255 && num.toString() === octet;
    });
}

module.exports = isValidIPv4;