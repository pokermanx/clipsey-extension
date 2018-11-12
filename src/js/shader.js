const controller = () => {
  $shaderBlock = document.getElementById('shader-block');
  $shaderBlock ? shadeBack($shaderBlock) : shadeAction();
};

// const finishCleanUp = ecoNode => {
    
// };


const getUserOptions = $div => {
    chrome.storage.sync.get("opacity", data => {
        return (data.opacity/100)
    });
};


const filter = () => {
  const $filterDiv = document.createElement('div');
    
  $filterDiv.id = 'shader-block'; 
  $filterDiv.style.width = '100%';
  $filterDiv.style.height = '100%';   
  $filterDiv.style.left = '0';
  $filterDiv.style.top = '0';
  $filterDiv.style.position = 'fixed';
  $filterDiv.style.backgroundColor = '#000000';
  $filterDiv.style.zIndex = '1100';
  chrome.storage.sync.get("opacity", data => {
    $filterDiv.style.opacity = data.opacity/100
  });
  console.log($filterDiv)
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
  chrome.runtime.sendMessage(true);
};

const shadeBack = $shaderBlock => {
  const $body = document.body;
  $body.removeChild($shaderBlock);
  chrome.runtime.sendMessage(false);
};

chrome.runtime.onMessage.addListener(controller);