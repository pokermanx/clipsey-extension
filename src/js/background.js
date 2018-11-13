const popupClicked = tab => {
  chrome.tabs.sendMessage(tab.id, true);
};

const changeIcon = (message, sender) => {
  if (message) {
    chrome.browserAction.setIcon({
      path: 'src/icons/light-bulb-off48.png',
      tabId: sender.tab.id
    });
  } else {
    chrome.browserAction.setIcon({
      path: 'src/icons/light-bulb-on48.png',
      tabId: sender.tab.id
    });
  }
};

chrome.browserAction.onClicked.addListener(popupClicked);
chrome.runtime.onMessage.addListener(changeIcon);

