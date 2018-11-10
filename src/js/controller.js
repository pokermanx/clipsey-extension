const $log = document.getElementById("log")
const $switch = document.getElementById("clp-switch")
$switch.addEventListener('click', () =>{
    shadeRequest() 
    $log.textContent = String($switch.checked)
})

const shadeRequest = () => {
    const currentTab = tabs => {
        chrome.tabs.sendMessage(tabs[0].id, $switch.checked)
    }

const params = {
    active: true,
    currentWindow: true
}

    chrome.tabs.query(params, currentTab)
}