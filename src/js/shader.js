// const $views = chrome.extension.getViews({ type: "popup" });

// if ($views != []) {
//     const data = sessionStorage.getItem('clipseyState')
//     if (data) {
//         chrome.runtime.sendMessage(data)
//         console.log(data)
//     }
// }

const controller = (message, sender) => {
    $shaderBlock = document.getElementById('shader-block')
    $shaderBlock ? shadeBack($shaderBlock) : shadeAction()
    console.log(message, sender)
}

const shadeAction = () => {
    const $body = document.body;
    const $playerById = document.querySelectorAll('[id*="player"]');
    const $playerByClass = document.querySelectorAll('[class*="player"]');
    const $player = $playerById.length === 0 ? $playerByClass : $playerById;

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
        $filterDiv.style.zIndex = '1100'

        return $filterDiv
    }
    
    const indexApply = () => {
        
        for (let el of $player){
            el.style.zIndex = '1101';
        }
        console.log($player)
    }
    
    indexApply();
    //setTimeout(indexApply, 2000)
    
    $body.appendChild(filter())

    // console.log(filter())s
    // console.log(message)
    // sessionStorage.setItem("clipseyState", "true")
    chrome.runtime.sendMessage(true)
} 

const shadeBack = $shaderBlock => {
    const $body = document.body;
    $body.removeChild($shaderBlock)

    console.log("Lights on")
    chrome.runtime.sendMessage(false)
    // sessionStorage.setItem("clipseyState", "false")
}

chrome.runtime.onMessage.addListener(controller)

// chrome.storage.sync.get('[clipseyState]', data => {
//     chrome.runtime.sendMessage(data)
//     console.log(data)
// })
