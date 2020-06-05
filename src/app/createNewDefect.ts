import * as $ from "jquery"
import "toastr/toastr.scss"
import * as toastr from "toastr"
import { DefectFields } from "./constants"

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function setValidity(field, isValid: boolean) {
    if (isValid) {
        field.classList.remove('is-invalid')
    }
    else {
        field.classList.add('is-invalid')
        field.scrollIntoView()
    }
}

function inject() {
    let saveBtn = document.querySelector('.chr-QuickDetailEntityFooter-saveButton')
    const pulldownDefaultVal = '-- No Entry --'

    chrome.storage.sync.get(['DefectFields'], res => {
        if (
            res.DefectFields
        ) {
            let dfs = res.DefectFields
            let fields = []
            DefectFields.forEach(field => {
                if (field.configurable === false) {
                    return
                }
                if (true === dfs[field.key]) {
                    setValidity(document.querySelector(field.wrapperCls), false)
                    fields.push(field)
                }
                else if (false === dfs[field.key]) {
                    setValidity(document.querySelector(field.wrapperCls), true)
                }
            })

            saveBtn.addEventListener('click', evt => {
                for (let i = 0; i < fields.length; i++) {
                    let el = document.querySelector(fields[i].wrapperCls).querySelector(fields[i].fieldCls)
                    if (el instanceof HTMLInputElement) {
                        if (!el.value) {
                            evt.stopPropagation()
                            toastr.error(fields[i].key + ' is not filled')
                        }
                        else {
                            // input is filled
                        }
                    }
                    else if (el.innerText === fields[i].defaultValue) {
                        evt.stopPropagation()
                        toastr.error(fields[i].key + 'is not filled')
                    }
                }
            })
        }
    })

    toastr.success('Inject successfully')
}

function observeElement() {
    const targetNode = document.body

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true }

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // observe right column secion in which those fields to be filled will be rendered
                if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].className === 'chr-QuickDetailResponsiveColumnView-rightColumn') {
                    observer.disconnect()
                    inject()
                }
            }
            else if (mutation.type === 'attributes') {
                // console.log('The ' + mutation.attributeName + ' attribute was modified.')
            }
        }
    }
    const observer = new MutationObserver(callback)

    observer.observe(targetNode, config)
}

function execute() {
    // Check owner field loading.
    if (document.querySelector('.chr-QuickDetailAttributeEditorWrapper--owner')) {
        inject()
    }
    else {
        observeElement()
    }
}

// chrome.runtime.sendMessage({
//     taskId: 'checkScriptInjection',
//     scriptName: 'createNewDefect'
// }, (injected) => {
//     if (!injected) {
//         execute()
//     }
// })

execute()