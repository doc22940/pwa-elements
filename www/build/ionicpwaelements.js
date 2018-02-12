/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, appNamespace, urlNamespace, publicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    x = doc.scripts[doc.scripts.length - 1];
    if (x && x.src) {
        y = x.src.split('/').slice(0, -1);
        publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + ((!urlContainsFlag(win) && supportsCustomElements(win) && supportsEsModules(x) && supportsFetch(win) && supportsCssVariables(win)) ? appCore : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function urlContainsFlag(win) {
    return win.location.search.indexOf('core=es5') > -1;
}
function supportsEsModules(scriptElm) {
    // detect static ES module support
    const staticModule = 'noModule' in scriptElm;
    if (!staticModule) {
        return false;
    }
    // detect dynamic import support
    try {
        new Function('import("")');
        return true;
    }
    catch (err) {
        return false;
    }
}
function supportsCustomElements(win) {
    return win.customElements;
}
function supportsFetch(win) {
    return win.fetch;
}
function supportsCssVariables(win) {
    return (win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}


init(win, doc, appNamespace, urlNamespace, publicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "ionicpwaelements","ionicpwaelements","/build/ionicpwaelements/","ionicpwaelements.core.js","ionicpwaelements.core.pf.js","hydrated",[["ion-action-sheet",{"ios":"ion-action-sheet.ios","md":"ion-action-sheet.md"},1,[["animationCtrl",4,0,0,"ion-animation-controller"],["buttons",1],["config",3,0,0,"config"],["cssClass",1,1,2],["dismiss",6],["dom",3,0,0,"dom"],["el",7],["enableBackdropDismiss",1,1,3],["enterAnimation",1],["leaveAnimation",1],["present",6],["subTitle",1,1,2],["title",1,1,2],["translucent",1,1,3],["willAnimate",1,1,3]],0,[["ionDismiss","onDismiss"]]],["ion-action-sheet-controller",{"ios":"ion-action-sheet.ios","md":"ion-action-sheet.md"},0,[["create",6],["dismiss",6],["getTop",6]],0,[["body:ionActionSheetDidUnload","actionSheetWillDismiss"],["body:ionActionSheetWillDismiss","actionSheetWillDismiss"],["body:ionActionSheetWillPresent","actionSheetWillPresent"],["body:keyup.escape","escapeKeyUp"]]],["ion-camera","ion-camera",1,[["el",7],["facingMode",1,"facing-mode",2],["flashIndex",5],["isServer",3,0,0,"isServer"],["photo",5],["photoSrc",5],["publicPath",3,0,0,"publicPath"],["showShutterOverlay",5]],1],["ion-icon",{"ios":"ion-action-sheet.ios","md":"ion-action-sheet.md"},1,[["ariaLabel",1,1,2],["ios",1,1,2],["isServer",3,0,0,"isServer"],["md",1,1,2],["mode",3,0,0,"mode"],["name",1,1,2],["publicPath",3,0,0,"publicPath"],["svgContent",5]]],["ion-modal",{"ios":"ion-action-sheet.ios","md":"ion-action-sheet.md"},1,[["animationCtrl",4,0,0,"ion-animation-controller"],["color",1,1,2],["component",1,1,1],["config",3,0,0,"config"],["cssClass",1,1,2],["data",1,1,1],["delegate",2],["dismiss",6],["dom",3,0,0,"dom"],["el",7],["enableBackdropDismiss",1,1,3],["enterAnimation",1],["getUserComponentContainer",6],["leaveAnimation",1],["modalId",1,1,4],["mode",1],["present",6],["showBackdrop",1,1,3],["willAnimate",1,1,3]],0,[["ionDismiss","onDismiss"]]],["ion-modal-controller",{"ios":"ion-action-sheet.ios","md":"ion-action-sheet.md"},0,[["create",6],["dismiss",6],["getTop",6]],0,[["body:ionModalDidUnload","modalWillDismiss"],["body:ionModalWillDismiss","modalWillDismiss"],["body:ionModalWillPresent","modalWillPresent"],["body:keyup.escape","escapeKeyUp"]]]]);