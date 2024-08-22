chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({city: '625144'})
})