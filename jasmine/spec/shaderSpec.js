describe('getShaderBlock::', () => {
    it('Should return undefined if there is no block spotted', () => {
        expect(getShaderBlock()).toBeUndefined();
    });
});

describe('filter::', () => {
    it('Should create and return shader block', () => {
        chrome = {
            storage: {
                sync: {
                    get: () => {}
                }
            }
        };

        expect(filter().id).toBe('shader-block')
        expect(filter().className).toBe('shader-block')
    });
});

describe('shadeAction::', () => {
    it('Should request player', () => {
        chrome = {
            storage: {
                sync: {
                    get: () => {}
                }
            },
            runtime: {
                sendMessage: () => {}
            }
        };
        expect(getPlayer().length).toBe(0);
    });
});