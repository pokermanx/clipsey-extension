const timeout = 350;

const getShaderBlock = () => {
    const $shaderBlock = document.getElementById('shader-block');
    return $shaderBlock  === null ? undefined : $shaderBlock;
};

const controller = () => {
    const $shaderBlock = getShaderBlock();
    $shaderBlock ? shadeBack() : shadeAction();
};

const autoCloseListener = () => {
    const $shaderBlock = getShaderBlock()
    $shaderBlock.addEventListener('click', event => {
        if (event.target.id === 'shader-block') {
            controller()
        }
    });
};

// const finishCleanUp = ecoNode => {
    
// };
const filter = () => {
    const $filterDiv = document.createElement('div');
    $filterDiv.id = "shader-block"
    $filterDiv.className = "shader-block"
    $filterDiv.style.animationName = 'appear'
    chrome.storage.sync.get("opacity", data => {
        const opacity = data.opacity === undefined ? 0.7 : data.opacity/100
        $filterDiv.style.opacity = opacity
    });
    return $filterDiv;
};

const getPlayer = () => {
    const $playerById = document.querySelectorAll('[id*="player"]');
    const $playerByClass = document.querySelectorAll('[class*="player"]');
    return $player = $playerById.length === 0 ? $playerByClass : $playerById;
};

const shadeAction = () => {
    const $body = document.body;
    const $player = getPlayer();

    const indexApply = () => {
        for (const el of $player){
        el.style.zIndex = '1101';
      //el.style.position = 'relative'
        }
    };

    indexApply();
    $body.appendChild(filter());
    autoCloseListener();

    chrome.runtime.sendMessage(true);
};

const shadeBack = () => {
    const $shaderBlock = getShaderBlock()
    const $body = document.body;
    $shaderBlock.style.animationName = 'disappear'
    setTimeout(() => {
        $body.removeChild($shaderBlock);
    }, timeout);
    chrome.runtime.sendMessage(false);
};

chrome.runtime.onMessage.addListener(controller);
