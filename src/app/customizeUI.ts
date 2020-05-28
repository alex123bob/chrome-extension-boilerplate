chrome.storage.sync.get(['color'], result => {
    let css
    let colorCss = ''
    if (result.color) {
        colorCss = `#root .chr-Site .alm-header-container .alm-header, div#footer, .classic .chr-NavDropMenu { background-color: ${result.color}; }
        .classic #root .project-nav-container:hover {background-color: ${result.color + '80'};}
        `
    }
    css = ` ${colorCss}
        .classic #root .chr-QuickDetailAttributeEditorWrapper.is-invalid .smb-Select-trigger {border-width: 2px;}
        .classic #root .chr-QuickDetailAttributeEditorWrapper.is-invalid .smb-TextInput {border-width: 2px;}
        .classic #root .chr-QuickDetailAttributeEditorWrapper.is-invalid .smb-TextInput.is-invalid {border-width: 2px;}`
    // let css = `.classic .chr-QuickDetailQuickDetailEditor, .rng .chr-QuickDetailQuickDetailEditor { background: ${result.color}; }`
    const head = document.head || document.getElementsByTagName('head')[0]
    let style = document.createElement('style')

    head.appendChild(style)

    style.type = 'text/css'
    style.appendChild(document.createTextNode(css))
})