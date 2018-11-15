describe('popupClicked::', () => {
    it('Should send click event with tab.id and boolean', () => {
        chrome = {
            tabs: {
                sendMessage: () => {}
            }
        };
        const message = spyOn(chrome.tabs, 'sendMessage');
        popupClicked(tab = {id: 5});
        expect(message).toHaveBeenCalledWith(5, true);
    });
});

describe('changeIcon::', () => {
    it('Should change extension icon to disabled one', () => {
        chrome = {
            browserAction: {
                setIcon: {
                    addListener: () => {}
                }
            } 
        };
        const setIcon = spyOn(chrome.browserAction, 'setIcon');
        changeIcon(true, {tab: {id: 5}});
        expect(setIcon).toHaveBeenCalledWith({path: {
            "48": 'src/icons/light-bulb-off48.png',
        }, tabId: 5});
    });
});


