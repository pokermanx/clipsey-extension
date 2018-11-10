const $body = document.body;


const filter = () => {
    const $filterDiv = document.createElement('div');
    $filterDiv.style.width = '100%';
    $filterDiv.style.height = '100%';
    $filterDiv.style.left = '0';
    $filterDiv.style.top = '0';
    $filterDiv.style.position = 'fixed';
    $filterDiv.style.backgroundColor = '#000000';
    $filterDiv.style.opacity = '0.7';
    $filterDiv.style.zIndex = '1000'

    return $filterDiv
}

const indexApply = () => {
    const $player = document.querySelectorAll('[id^="player"]');
    for (let el of $player){
        el.style.zIndex = '1001';
    }
    console.log($player)
}

setTimeout(indexApply, 2000)

$body.appendChild(filter())
console.log(filter())
