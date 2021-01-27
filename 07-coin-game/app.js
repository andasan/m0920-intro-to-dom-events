function isTouching(a, b){
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bBrect.top ||
        aRect.top > bRect.top + bBrect.height ||
        aRect.left + aRect.width < bBrect.left ||
        aRect.left > bRect.left + bBrect.width
    )
}

const init = () => {
    //get the avatar
    //get the coin

    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }







        if(isTouching(avatar,coin)) moveCoin();
    });
}

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    // const y = ?
    coin.style.top = `${x}px`;
    // coin.style. ?? = ??
}

init();