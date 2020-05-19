import * as $ from "jquery"
import "toastr/toastr.scss"
import * as toastr from "toastr"

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

function setValidity (field, isValid){
    if (isValid) {
        field.classList.remove('is-invalid')
    }
    else {
        field.classList.add('is-invalid')
        field.scrollIntoView()
    }
}

function inject (){
    let saveBtn = document.querySelector('.chr-QuickDetailEntityFooter-saveButton')
    const pulldownDefaultVal = '-- No Entry --'

    saveBtn.addEventListener('click', function(evt) {
        let foundInBuildWrapper = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--foundInBuild')
        let foundInBuild: HTMLInputElement = foundInBuildWrapper.querySelector('.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input')
        let ucProductWrapper = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--cUCProduct')
        let ucProduct: HTMLLIElement = ucProductWrapper.querySelector('.chr-QuickDetailAttributeEditorWrapper-editorContainer  .smb-Select-text')
        let upcModuleWrapper = document.querySelector('.chr-QuickDetailAttributeEditorWrapper--cUPCComponent')
        let upcModule: HTMLLIElement = upcModuleWrapper.querySelector('.chr-QuickDetailAttributeEditorWrapper-editorContainer  .smb-Select-text')
        if (!foundInBuild.value) {
            setValidity(foundInBuildWrapper, false)
            evt.stopPropagation()
            toastr.error('Found in build is not filled!')
        }
        else if (ucProduct.innerText === pulldownDefaultVal) {
            setValidity(foundInBuildWrapper, true)
            setValidity(ucProductWrapper, false)
            evt.stopPropagation()
            toastr.error('UC Product is not filled!')
        }
        else if (upcModule.innerText === pulldownDefaultVal) {
            setValidity(foundInBuildWrapper, true)
            setValidity(ucProductWrapper, true)
            setValidity(upcModuleWrapper, false)
            evt.stopPropagation()
            toastr.error('UPC Module is not filled!')
        }
        else {
            setValidity(foundInBuildWrapper, true)
            setValidity(ucProductWrapper, true)
            setValidity(upcModuleWrapper, true)
        }
    })
    toastr.success('Inject successfully')
}

function observeElement (){
    const targetNode = document.body

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true }

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // Use traditional 'for loops' for IE 11
        for(let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (mutation.addedNodes.length > 0 && mutation.addedNodes[0].className === 'chr-QuickDetailActionsMenu') {
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
    if (document.querySelector('.chr-QuickDetailEntityFooter-saveButton')) {
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