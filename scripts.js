/* Your future is.....*/
const messages1 = ['uncertain', 'bright', 'starting now', 'a pathway to success', 'a winding road', 'full of possibility'];

/*You will do best to......*/
const messages2 = ['act now', 'have patience', 'proceed with caution', 'find a companion', 'make a plan'];

/*to ensure that you may.........*/
const messages3= ['fully succeed', 'follow your dreams', 'fulfill your potential', 'take the most direct path forward', 'find true happiness'];

let randNum1 = Math.floor(Math.random() * 6);
let randNum2 = Math.floor(Math.random() * 5);
let randNum3 = Math.floor(Math.random() * 5);

const randomMessage = (arr1, arr2, arr3) => {
    return `Your future is ${messages1[randNum1]}. You will do best to ${messages2[randNum2]} to ensure that you may ${messages3[randNum3]}. Good luck!`;
}

console.log(randomMessage(messages1, messages2, messages3));