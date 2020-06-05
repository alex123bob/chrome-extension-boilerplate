export const DefectFields = [
    {
        key: 'COLOR',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--displayColor',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-DropdownItem-text',
        type: 'Dropdown',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'OWNER',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--owner',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-DropdownItem-text',
        type: 'Dropdown',
        defaultValue: '-- No Owner --',
        required: false,
        configurable: true,
    },
    {
        key: 'PROJECT',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--project',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: undefined,
        required: true,
        configurable: false,
    },
    {
        key: 'STATE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--state',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'Open',
        required: true,
        configurable: false,
    },
    {
        key: 'SCHEDULE_STATE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--scheduleState',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'Open',
        required: true,
        configurable: false,
    },
    {
        key: 'PLAN_ESTIMATE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--planEstimate',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'USER_STORY',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--requirement',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsWorkItemEditor-linkSpan',
        type: 'Popover',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'TEST_CASE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--testCase',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsWorkItemEditor-linkSpan',
        type: 'Popover',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'TAGS',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--tags',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsWorkItemEditor-linkSpan',
        type: 'Popover',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'RELEASE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--release',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'Unscheduled',
        required: false,
        configurable: true,
    },
    {
        key: 'ITERATION',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--iteration',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'Unscheduled',
        required: false,
        configurable: true,
    },
    {
        key: 'MILESTONES',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--milestones',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsWorkItemEditor-linkSpan',
        type: 'Popover',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'EXPEDITE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--expedite',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Checkbox',
        type: 'Checkbox',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'PRIORITY',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--priority',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'None',
        required: true,
        configurable: false,
    },
    {
        key: 'SEVERITY',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--severity',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'None',
        required: false,
        configurable: true,
    },
    {
        key: 'SUBMITTED_BY',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--submittedBy',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'FOUND_IN_BUILD',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--foundInBuild',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'FIXED_IN_BUILD',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--fixedInBuild',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'RESOLUTION',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--resolution',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-text',
        type: 'Select',
        defaultValue: 'None',
        required: false,
        configurable: true,
    },
    {
        key: 'AT_REVIEWED',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cATReviewed',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Checkbox',
        type: 'Checkbox',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'DATE_INTRODUCED',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cDateIntroduced',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'DEV_ETA',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cDevETA',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'FINDING_SOURCE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cFindingSource',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: true,
        configurable: false,
    },
    {
        key: 'FOUND_IN_RELEASE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cFoundInRelease',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'HOTFIX',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cHotfix',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'ISSUE_CATEGORY',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cIssueCategory',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: true,
        configurable: false,
    },
    {
        key: 'MAP_PERSONA',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cMapPersona',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsMultiItemEditor-pills .chr-Pill--tags',
        type: 'Pill',
        defaultValue: null,
        required: false,
        configurable: true,
    },
    {
        key: 'MSTR_PRODUCT',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cMSTRProduct',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'NUMBER_OF_TS_CASES',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cNumberofTSCases',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'PATCH',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cPatch',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'PRODUCTION_RELEASE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cProductionRelease',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'REGRESSION',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cRegression',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: true,
        configurable: false,
    },
    {
        key: 'SALESFORCE_CASE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cSalesforceCase',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsWebLinkEditor-label',
        type: 'Popover',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'TEST_ETA',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cTestETA',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-TextInput-input',
        type: 'Input',
        defaultValue: '',
        required: false,
        configurable: true,
    },
    {
        key: 'TRIAGE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cTriaged',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Checkbox',
        type: 'Checkbox',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'TS_ACTION_REQUIRED',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cTSActionRequired',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Checkbox',
        type: 'Checkbox',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'TS_CASE_LINK',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cTSCaselink',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .chr-EditorsWebLinkEditor-label',
        type: 'Popover',
        defaultValue: null,
        required: false,
        configurable: false,
    },
    {
        key: 'UC_PRODUCT',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cUCProduct',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'UPC_COMPONENT',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cUPCComponent',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'UPC_FEATURE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cUPCFeature',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
    {
        key: 'UPC_MODULE',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cUPCModule',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: true,
        configurable: false,
    },
    {
        key: 'UPDATE_DECISION',
        wrapperCls: '.chr-QuickDetailAttributeEditorWrapper--cUpdateDecision',
        fieldCls: '.chr-QuickDetailAttributeEditorWrapper-editorContainer .smb-Select-selectedValue',
        type: 'Select',
        defaultValue: '-- No Entry --',
        required: false,
        configurable: true,
    },
]