const timeout = 350;

const getShaderBlock = () => {
    const $shaderBlock = document.getElementById('shader-block');
    return $shaderBlock  === null ? undefined : $shaderBlock;
};

const controller = () => {
  $shaderBlock = getShaderBlock();
  $shaderBlock ? shadeBack($shaderBlock) : shadeAction();
};

const autoCloseListener = async () => {
    const $shaderBlock = await getShaderBlock()
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
        $filterDiv.style.opacity = data.opacity/100
    });
    return $filterDiv;
};

const shadeAction = () => {
    const $body = document.body;
    const $playerById = document.querySelectorAll('[id*="player"]');
    const $playerByClass = document.querySelectorAll('[class*="player"]');
    const $player = $playerById.length === 0 ? $playerByClass : $playerById;
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

const shadeBack = $shaderBlock => {
    const $body = document.body;
    $shaderBlock.style.animationName = 'disappear'
    setTimeout(() => {
        $body.removeChild($shaderBlock);
    }, timeout);
    chrome.runtime.sendMessage(false);
};

chrome.runtime.onMessage.addListener(controller);