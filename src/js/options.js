//const $slider = document.getElementById('clp-range');
const $range = document.getElementById('clp-range__range');
const $value = document.getElementById('clp-range__value');
const $btn = document.getElementById('btn-grey');
const $saveLog = document.getElementById('save-log');
const defaultOpacity = 70;

$range.addEventListener('change', () => {
    $value.textContent = $range.value;
});

const saveOptions = () => {
    chrome.storage.sync.set({
        opacity: $range.value
    });

    $saveLog.style.display = 'block'
    setTimeout(() => {
        $saveLog.style.display = 'none'
    }, 2000)
};

$btn.addEventListener('click', () => {
    saveOptions();
});

const getOptions = () => {
    chrome.storage.sync.get("opacity", data => {
        if (data.opacity === undefined) {
            $value.textContent = defaultOpacity;
            $range.value = defaultOpacity;
        } else {
            $value.textContent = data.opacity;
            $range.value = data.opacity;
        };
    });
};

getOptions()