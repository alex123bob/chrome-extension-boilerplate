/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/background.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/background.ts":
/*!*******************************!*\
  !*** ./src/app/background.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let runtimeStorage = {};
function customizeUI(runtimeStorage, tabId) {
    if (!runtimeStorage[tabId] || !runtimeStorage[tabId]['customizeUI']) {
        chrome.tabs.executeScript(tabId, {
            file: "./js/customizeUI.js",
            runAt: 'document_end',
            allFrames: false
        });
        // chrome.tabs.insertCSS(tabId, {
        //     file: 'css/style.css'
        // })
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {};
        }
        runtimeStorage[tabId]['customizeUI'] = true;
    }
}
function createNewDefect(runtimeStorage, tabId) {
    if (!runtimeStorage[tabId] || !runtimeStorage[tabId]['createNewDefect']) {
        chrome.tabs.executeScript(tabId, {
            file: './js/createNewDefect.js',
            runAt: 'document_end',
            allFrames: false
        });
        if (!runtimeStorage[tabId]) {
            runtimeStorage[tabId] = {};
        }
        runtimeStorage[tabId]['createNewDefect'] = true;
    }
}
chrome.runtime.onInstalled.addListener(function () {
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
            }]);
    });
    chrome.webNavigation.onCompleted.addListener(function onCompleted(info) {
        // alert(JSON.stringify(info))
    });
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'loading' || !!changeInfo.url) {
        runtimeStorage[tabId] = {};
    }
    if (changeInfo.status === 'complete') {
        if (/rally1\.rallydev\.com/.test(tab.url)) {
            customizeUI(runtimeStorage, tabId);
        }
    }
    if (/rally1\.rallydev\.com.*?defect\/new/.test(tab.url)) {
        createNewDefect(runtimeStorage, tabId);
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Background got a message!");
    sendResponse({});
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9iYWNrZ3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJLGNBQWMsR0FFZCxFQUFFO0FBRU4sU0FBUyxXQUFXLENBQUUsY0FBYyxFQUFFLEtBQUs7SUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxFQUFFLHFCQUFxQjtZQUMzQixLQUFLLEVBQUUsY0FBYztZQUNyQixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDO1FBQ0YsaUNBQWlDO1FBQ2pDLDRCQUE0QjtRQUM1QixLQUFLO1FBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtTQUM3QjtRQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxJQUFJO0tBQzlDO0FBQ0wsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLGNBQWMsRUFBRSxLQUFLO0lBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxFQUFFLHlCQUF5QjtZQUMvQixLQUFLLEVBQUUsY0FBYztZQUNyQixTQUFTLEVBQUUsS0FBSztTQUNuQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtTQUM3QjtRQUNELGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLElBQUk7S0FDbEQ7QUFDTCxDQUFDO0FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtRQUMzRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7d0JBQzNDLE9BQU8sRUFBRTs0QkFDTCxVQUFVLEVBQUUscUJBQXFCO3lCQUNwQztxQkFDSixDQUFDO2lCQUNMO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUU7aUJBQ2pEO2FBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsV0FBVyxDQUFDLElBQUk7UUFDbEUsOEJBQThCO0lBQ2xDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekQsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNyRCxjQUFjLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtLQUM3QjtJQUVELElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7UUFDbEMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO1NBQ3JDO0tBQ0o7SUFFRCxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckQsZUFBZSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUM7S0FDekM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxFQUFFO0lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7SUFDeEMsWUFBWSxDQUFDLEVBQUUsQ0FBQztBQUNwQixDQUFDLENBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FwcC9iYWNrZ3JvdW5kLnRzXCIpO1xuIiwibGV0IHJ1bnRpbWVTdG9yYWdlOiB7XG4gICAgW3RhYklkOiBzdHJpbmddOiB7IFtzY3JpcHROYW1lOiBzdHJpbmddOiBib29sZWFuIH1cbn0gPSB7fVxuXG5mdW5jdGlvbiBjdXN0b21pemVVSSAocnVudGltZVN0b3JhZ2UsIHRhYklkKXtcbiAgICBpZiAoIXJ1bnRpbWVTdG9yYWdlW3RhYklkXSB8fCAhcnVudGltZVN0b3JhZ2VbdGFiSWRdWydjdXN0b21pemVVSSddKSB7XG4gICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtcbiAgICAgICAgICAgIGZpbGU6IFwiLi9qcy9jdXN0b21pemVVSS5qc1wiLFxuICAgICAgICAgICAgcnVuQXQ6ICdkb2N1bWVudF9lbmQnLFxuICAgICAgICAgICAgYWxsRnJhbWVzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICAvLyBjaHJvbWUudGFicy5pbnNlcnRDU1ModGFiSWQsIHtcbiAgICAgICAgLy8gICAgIGZpbGU6ICdjc3Mvc3R5bGUuY3NzJ1xuICAgICAgICAvLyB9KVxuICAgICAgICBpZiAoIXJ1bnRpbWVTdG9yYWdlW3RhYklkXSkge1xuICAgICAgICAgICAgcnVudGltZVN0b3JhZ2VbdGFiSWRdID0ge31cbiAgICAgICAgfVxuICAgICAgICBydW50aW1lU3RvcmFnZVt0YWJJZF1bJ2N1c3RvbWl6ZVVJJ10gPSB0cnVlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdEZWZlY3QocnVudGltZVN0b3JhZ2UsIHRhYklkKSB7XG4gICAgaWYgKCFydW50aW1lU3RvcmFnZVt0YWJJZF0gfHwgIXJ1bnRpbWVTdG9yYWdlW3RhYklkXVsnY3JlYXRlTmV3RGVmZWN0J10pIHtcbiAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWJJZCwge1xuICAgICAgICAgICAgZmlsZTogJy4vanMvY3JlYXRlTmV3RGVmZWN0LmpzJyxcbiAgICAgICAgICAgIHJ1bkF0OiAnZG9jdW1lbnRfZW5kJyxcbiAgICAgICAgICAgIGFsbEZyYW1lczogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKCFydW50aW1lU3RvcmFnZVt0YWJJZF0pIHtcbiAgICAgICAgICAgIHJ1bnRpbWVTdG9yYWdlW3RhYklkXSA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgcnVudGltZVN0b3JhZ2VbdGFiSWRdWydjcmVhdGVOZXdEZWZlY3QnXSA9IHRydWVcbiAgICB9XG59XG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpe1xuICAgIGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQub25QYWdlQ2hhbmdlZC5yZW1vdmVSdWxlcyh1bmRlZmluZWQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5vblBhZ2VDaGFuZ2VkLmFkZFJ1bGVzKFt7XG4gICAgICAgICAgICBjb25kaXRpb25zOiBbXG4gICAgICAgICAgICAgICAgbmV3IGNocm9tZS5kZWNsYXJhdGl2ZUNvbnRlbnQuUGFnZVN0YXRlTWF0Y2hlcih7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VVcmw6IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0RXF1YWxzOiAncmFsbHkxLnJhbGx5ZGV2LmNvbSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICBuZXcgY2hyb21lLmRlY2xhcmF0aXZlQ29udGVudC5TaG93UGFnZUFjdGlvbigpXG4gICAgICAgICAgICBdXG4gICAgICAgIH1dKVxuICAgIH0pXG5cbiAgICBjaHJvbWUud2ViTmF2aWdhdGlvbi5vbkNvbXBsZXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiBvbkNvbXBsZXRlZChpbmZvKSB7XG4gICAgICAgIC8vIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGluZm8pKVxuICAgIH0pXG59KVxuXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICBpZiAoY2hhbmdlSW5mby5zdGF0dXMgPT09ICdsb2FkaW5nJyB8fCAhIWNoYW5nZUluZm8udXJsKSB7XG4gICAgICAgIHJ1bnRpbWVTdG9yYWdlW3RhYklkXSA9IHt9XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZUluZm8uc3RhdHVzID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIGlmICgvcmFsbHkxXFwucmFsbHlkZXZcXC5jb20vLnRlc3QodGFiLnVybCkpIHtcbiAgICAgICAgICAgIGN1c3RvbWl6ZVVJKHJ1bnRpbWVTdG9yYWdlLCB0YWJJZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgvcmFsbHkxXFwucmFsbHlkZXZcXC5jb20uKj9kZWZlY3RcXC9uZXcvLnRlc3QodGFiLnVybCkpIHtcbiAgICAgICAgY3JlYXRlTmV3RGVmZWN0KHJ1bnRpbWVTdG9yYWdlLCB0YWJJZClcbiAgICB9XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kIGdvdCBhIG1lc3NhZ2UhXCIpXG4gICAgc2VuZFJlc3BvbnNlKHt9KVxufSkiXSwic291cmNlUm9vdCI6IiJ9