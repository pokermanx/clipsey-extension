const controller = (message, sender, xsendResponse) => {
    message ? shadeAction() : shadeBack()
    console.log(message, xsendResponse)
}

const shadeAction = () => {
    const $body = document.body;
    const $player = document.querySelectorAll('[id^="player"]')
    const filter = () => {
        const $filterDiv = document.createElement('div');
        $filterDiv.id = 'shader-block'
        $filterDiv.style.width = '100%';
        $filterDiv.style.height = '100%';
        $filterDiv.style.left = '0';
        $filterDiv.style.top = '0';
        $filterDiv.style.position = 'fixed';
        $filterDiv.style.backgroundColor = '#000000';
        $filterDiv.style.opacity = '0.9';
        $filterDiv.style.zIndex = '1000'
    
        return $filterDiv
    }
    
    const indexApply = () => {
        
        for (let el of $player){
            el.style.zIndex = '1001';
        }
        console.log($player)
    }
    
    indexApply();

    //setTimeout(indexApply, 2000)
    
    $body.appendChild(filter())
    // console.log(filter())
    // console.log(message)
} 

const shadeBack = () => {
    $shaderBlock = document.getElementById('shader-block')
    const $body = document.body;
    $body.removeChild($shaderBlock)
    console.log("Off")

}

chrome.runtime.onMessage.addListener(controller)
