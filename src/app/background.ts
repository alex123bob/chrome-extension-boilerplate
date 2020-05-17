let runtimeStorage: {
    [tabId: string]: { [scriptName: string]: boolean }
} = {}

function customizeUI (runtimeStorage, tabId){
    if (!runtimeStorage[tabId] || !runtimeStorage[tabId]['customizeUI']) {
        chrome.tabs.executeScript(tabId, {
            file: "./js/customizeUI.js",
            runAt: 'document_end',
            allFrames: false
        })
        // chrome.tabs.insertCSS(tabId, {
        //     file: 'css/style.css'
        // })
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {}
        }
        runtimeStorage[tabId]['customizeUI'] = true
    }
}

function createNewDefect(runtimeStorage, tabId) {
    if (!runtimeStorage[tabId] || !runtimeStorage[tabId]['createNewDefect']) {
        chrome.tabs.executeScript(tabId, {
            file: './js/createNewDefect.js',
            runAt: 'document_end',
            allFrames: false
        })
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {}
        }
        runtimeStorage[tabId]['createNewDefect'] = true
    }
}

chrome.runtime.onInstalled.addListener(function (){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { 
                        hostEquals: 'rally1.rallydev.com'
                    },
                })
            ],
            actions: [
                new chrome.declarativeContent.ShowPageAction()
            ]
        }])
    })

    chrome.webNavigation.onCompleted.addListener(function onCompleted(info) {
        // alert(JSON.stringify(info))
    })
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' || !!changeInfo.url) {
        runtimeStorage[tabId] = {}
    }

    if (changeInfo.status === 'complete') {
        if (/rally1\.rallydev\.com/.test(tab.url)) {
            customizeUI(runtimeStorage, tabId)
        }
    }

    if (/rally1\.rallydev\.com.*?defect\/new/.test(tab.url)) {
        createNewDefect(runtimeStorage, tabId)
    }
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Background got a message!")
    sendResponse({})
})