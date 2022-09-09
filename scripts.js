
const paragraph = document.getElementById('fortune');
const button = document.getElementById('btn');

const randomMessage = () => {
    /* Your future is.....*/
    let messages1 = ['uncertain', 'bright', 'starting now', 'a pathway to success', 'a winding road', 'full of possibility'];

    /*You will do best to......*/
    let messages2 = ['act now', 'have patience', 'proceed with caution', 'find a companion', 'make a plan'];

    /*to ensure that you may.........*/
    let messages3= ['fully succeed', 'follow your dreams', 'fulfill your potential', 'take the most direct path forward', 'find true happiness'];

    let randNum1 = Math.floor(Math.random() * messages1.length);
    let randNum2 = Math.floor(Math.random() * messages2.length);
    let randNum3 = Math.floor(Math.random() * messages3.length);

    fortune = `Your future is ${messages1[randNum1]}. You will do best to ${messages2[randNum2]} to ensure that you may ${messages3[randNum3]}. Good luck!`;
    paragraph.innerHTML = fortune;
}

console.log(randomMessage());

function showFortune(e) {
    e.preventDefault();
    randomMessage();
}

button.addEventListener('click', showFortune);
button.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        showFortune();
    }
});  