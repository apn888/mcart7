{"version":3,"file":"editor_panel.map.js","names":["BX","namespace","proxy","Landing","Utils","getSelectedElement","UI","Panel","EditorPanel","BaseButtonPanel","apply","this","arguments","layout","classList","add","position","currentElement","outOfFrame","onKeydown","bind","onTabDown","onScroll","instance","getInstance","init","scrollHandler","target","makeDraggable","editor","dragButton","Button","EditorAction","html","attrs","title","Loc","getMessage","onbxdrag","onDrag","onbxdragstop","onDragEnd","jsDD","registerObject","prependButton","offsetCalculates","offsetLeft","offsetTop","topValue","x","y","pos","current_node","Math","max","abs","left","top","DOM","write","remove","PageObject","getEditorWindow","scrollY","style","registerBaseActions","addButton","onClick","adjustButtonsState","CreateLink","rights","Env","getOptions","includes","CreatePage","ColorAction","text","TextBackgroundAction","CreateTable","PasteTable","Main","AiCopilot","onReplace","value","fieldInput","querySelector","innerHTML","onReplaceContext","range","window","getSelection","getRangeAt","deleteContents","insertNode","document","createTextNode","onAddBelow","lastPosition","adjustAbsolutePosition","node","force","nodeRect","getBoundingClientRect","width","rect","height","windowScope","parent","bodyContent","closest","contains","pageYOffset","isControlsExternal","bottom","innerHeight","contextDocument","defaultView","frameElement","innerWidth","hideButtonsPopups","appendToBody","body","appendChild","mouseTarget","onMousedown","event","preventClick","onMouseUp","preventDefault","stopPropagation","closePopup","button","popup","close","menu","buttons","forEach","additionalButtons","Tool","ColorPicker","hideAll","prototype","constructor","__proto__","show","element","isTable","hideButtons","showBaseButtons","length","hideBaseButtons","hideAllBaseButtons","setContextDocument","ownerDocument","insertAfter","prevSibling","insertBefore","nextSibling","isShown","onCustomEvent","addEventListener","setTimeout","call","adjustPosition","onShow","adjustButtonsContextDocument","contextWindow","passive","err","hide","removeEventListener","onHide","key","nodeName","shiftKey","code","execCommand","metaKey","br","create","newRange","createRange","setStartAfter","collapse","sel","removeAllRanges","addRange","TAB_COUNT","isAllowedTab","parentNode","focusNode","tagName","countUlTag","parentsNodeArr","allowedTagName","indexOf","push","previousElement","previousSibling","nodeType","countBlockquote","firstChild","i","childNodes","getAction","get","requestAnimationFrame","format","getFormat","bold","italic","underline","strike","align","getComputedStyle","getPropertyValue","match","isFixed","dataset","id","hidden","copiedTable","isOutOfFrame"],"sources":["editor_panel.js"],"mappings":"CAAC,WACA,aAEAA,GAAGC,UAAU,uBAEb,IAAIC,EAAQF,GAAGG,QAAQC,MAAMF,MAC7B,IAAIG,EAAqBL,GAAGG,QAAQC,MAAMC,mBAc1CL,GAAGG,QAAQG,GAAGC,MAAMC,YAAc,WAEjCR,GAAGG,QAAQG,GAAGC,MAAME,gBAAgBC,MAAMC,KAAMC,WAChDD,KAAKE,OAAOC,UAAUC,IAAI,2BAC1BJ,KAAKK,SAAW,WAChBL,KAAKM,eAAiB,KACtBN,KAAKO,WAAa,KAElBP,KAAKQ,UAAYR,KAAKQ,UAAUC,KAAKT,MACrCA,KAAKU,UAAYV,KAAKU,UAAUD,KAAKT,MACrCA,KAAKW,SAAWX,KAAKW,SAASF,KAAKT,KACpC,EAQAX,GAAGG,QAAQG,GAAGC,MAAMC,YAAYe,SAAW,KAQ3CvB,GAAGG,QAAQG,GAAGC,MAAMC,YAAYgB,YAAc,WAE7C,IAAKxB,GAAGG,QAAQG,GAAGC,MAAMC,YAAYe,SACrC,CACCvB,GAAGG,QAAQG,GAAGC,MAAMC,YAAYe,SAAW,IAAIvB,GAAGG,QAAQG,GAAGC,MAAMC,YACnER,GAAGG,QAAQG,GAAGC,MAAMC,YAAYe,SAASE,MAC1C,CAEA,OAAOzB,GAAGG,QAAQG,GAAGC,MAAMC,YAAYe,QACxC,EAGA,IAAIG,EAAgB,KACpB,IAAIC,EAAS,KAMb,SAASC,EAAcC,GAEtB,IAAIC,EAAa,IAAI9B,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,OAAQ,CAC9DC,KAAM,kDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,0CAG1CP,EAAWjB,OAAOyB,SAAWC,EAAOnB,KAAKT,MACzCmB,EAAWjB,OAAO2B,aAAeC,EAAUrB,KAAKT,MAEhD+B,KAAKC,eAAeb,EAAWjB,QAC/BgB,EAAOe,cAAcd,GAErB,IAAIe,EACJ,IAAIC,EACJ,IAAIC,EACJ,IAAIC,EAEJ,SAAST,EAAOU,EAAGC,GAElB,IAAKL,EACL,CACC,IAAIM,EAAMnD,GAAGmD,IAAIT,KAAKU,cACtBN,EAAaO,KAAKC,IAAID,KAAKE,IAAIN,EAAIE,EAAIK,MAAO,GAC9CT,EAAYM,KAAKC,IAAID,KAAKE,IAAIL,EAAIC,EAAIM,KAAM,GAC5CZ,EAAmB,IACpB,CAEA7C,GAAG0D,IAAIC,MAAM,WACZ9B,EAAOhB,OAAOC,UAAU8C,OAAO,yBAC/B,GAAI5D,GAAGG,QAAQ0D,WAAWC,kBAAkBC,QAAU,EACtD,CACCf,EAAWE,EAAIH,CAChB,KAEA,CACCC,EAAWE,EAAIH,CAChB,CACAlB,EAAOhB,OAAOmD,MAAMP,IAAMT,EAAW,KACrCnB,EAAOhB,OAAOmD,MAAMR,KAAQP,EAAIH,EAAc,IAC/C,EAAE1B,KAAKT,MACR,CAEA,SAAS8B,IAERI,EAAmB,MACnBhB,EAAOhB,OAAOC,UAAUC,IAAI,wBAC7B,CACD,CAOA,SAASkD,EAAoBpC,GAE5BA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,OAAQ,CAC9DC,KAAM,oDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,wCACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,SAAU,CAChEC,KAAM,sDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,0CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,YAAa,CACnEC,KAAM,yDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,6CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,gBAAiB,CACvEC,KAAM,sDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,0CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,cAAe,CACrEC,KAAM,oDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,8CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,gBAAiB,CACvEC,KAAM,sDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,gDACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,eAAgB,CACtEC,KAAM,qDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,+CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,cAAe,CACrEC,KAAM,uDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,iDACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOsC,WAAW,aAAc,CAClEpC,KAAM,oDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,+CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3C,IAAIyC,EAAStE,GAAGG,QAAQoE,IAAI/C,cAAcgD,aAAaF,OACvD,GAAIA,GAAUA,EAAOG,SAAS,QAC9B,CACC5C,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAO2C,WAAW,aAAc,CAClEzC,KAAM,wDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,+CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,KAE5C,CAEAA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,SAAU,CAChEC,KAAM,sDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,0CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,sBAAuB,CAC7EC,KAAM,sCACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,sCACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,oBAAqB,CAC3EC,KAAM,sCACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,sCACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOC,aAAa,eAAgB,CACtEC,KAAM,sDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,yCACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAO4C,YAAY,YAAa,CAClEC,KAAM5E,GAAGG,QAAQiC,IAAIC,WAAW,gCAChCH,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,yCACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAO8C,qBAAqB,cAAe,CAC7E5C,KAAM,+DACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,mDACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAO+C,YAAY,cAAe,CACpE7C,KAAM,qDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,gDACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3CA,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOgD,WAAW,aAAc,CAClE9C,KAAM,oDACNC,MAAO,CAACC,MAAOnC,GAAGG,QAAQiC,IAAIC,WAAW,+CACzC8B,QAASjE,EAAM2B,EAAOuC,mBAAoBvC,MAG3C,GAAI7B,GAAGG,QAAQ6E,KAAKxD,cAAc,WAAW,qBAC7C,CACCK,EAAOqC,UAAU,IAAIlE,GAAGG,QAAQG,GAAGyB,OAAOkD,UAAUzD,YAAY,aAAc,CAC7ES,KAAM,UACNJ,SACAqD,UAAUC,GACT,MAAMC,EAAavD,EAAOZ,eAAeoE,cAAc,2BACvD,GAAID,EACJ,CACCA,EAAWE,UAAY,QAAQH,SAChC,MACK,GAAItD,EAAOZ,eAChB,CACCY,EAAOZ,eAAeqE,UAAY,QAAQH,SAC3C,CACD,EACAI,iBAAiBJ,GAEhB,MAAMK,EAAQC,OAAOC,eAAeC,WAAW,GAC/CH,EAAMI,iBACNJ,EAAMK,WAAWC,SAASC,eAAeZ,GAC1C,EACAa,WAAWb,GACV,MAAMC,EAAavD,EAAOZ,eAAeoE,cAAc,2BACvD,GAAID,EACJ,CACCA,EAAWE,UAAY,GAAGF,EAAWE,iBAAiBH,SACvD,MACK,GAAItD,EAAOZ,eAChB,CACCY,EAAOZ,eAAeqE,UAAY,GAAGzD,EAAOZ,eAAeqE,iBAAiBH,SAC7E,CACD,IAEF,CACD,CAGA,IAAIc,EAAe,CAACxC,IAAK,EAAGD,KAAM,GAClC,SAAS0C,EAAuBrE,EAAQsE,EAAMC,GAE7C,IAAIC,EAAWF,EAAKG,wBAEpB,IAAI9C,EAAO6C,EAAS7C,KAAQ6C,EAASE,MAAQ,EAAM1E,EAAO2E,KAAKD,MAAQ,EACvE,IAAI9C,EAAO4C,EAAS5C,IAAM5B,EAAO2E,KAAKC,OAAS,EAC/C,IAAIzF,EAAW,WACf,IAAI0F,EAAc7E,EAAOX,WACtBuE,OAAOkB,OACPlB,OACH,IAAImB,EAAcT,EAAKU,QAAQ,0CAC/B,GAAID,EACJ,CACC,GAAIT,EAAKrF,UAAUgG,SAAS,oBAC5B,CACCrD,GAAOiD,EAAYK,WACpB,KAEA,CACCtD,EAAMmD,EAAYN,wBAAwB7C,IAAM,EAChDzC,EAAW,OACZ,CACD,MACK,GAAIhB,GAAGG,QAAQ6E,KAAKxD,cAAcwF,qBACvC,CACCvD,GAAO,EACR,KAEA,CACC,GACCA,GAAO,IAEN4C,EAASY,OAASP,EAAYQ,aAC3Bb,EAASI,OAAUC,EAAYQ,YAAc,KAGlD,CACCzD,EAAM,EACNzC,EAAW,OACZ,KAEA,CACC,GAAIyC,EAAM,EACV,CACCA,GAAOiD,EAAYK,YAAc,EAClC,KAEA,CACCtD,EAAM4C,EAASY,OAAS,EAAIP,EAAYK,WACzC,CACD,CACD,CAEA,GACClF,EAAOX,YACJW,EAAOsF,kBAAoB1D,EAAIqC,UAC/BjE,EAAOsF,gBAAgBC,YAAYC,aAEvC,CACC7D,GAAQ3B,EAAOsF,gBAAgBC,YAAYC,aAAaf,wBAAwB9C,IACjF,CAEA,GAAKA,EAAO3B,EAAO2E,KAAKD,MAAUG,EAAYY,WAAa,GAC3D,CACC9D,GAAUA,EAAO3B,EAAO2E,KAAKD,OAAUG,EAAYY,WAAa,GACjE,CAEA9D,EAAOH,KAAKC,IAAI,GAAIE,GAEpB,GAAIyC,EAAaxC,MAAQA,GAAOwC,EAAazC,OAASA,GAAQ4C,EAC9D,CACCpG,GAAG0D,IAAIC,OAAM,WACZ9B,EAAOhB,OAAOmD,MAAMhD,SAAWA,EAC/Ba,EAAOhB,OAAOmD,MAAMP,IAAMA,EAAM,KAChC5B,EAAOhB,OAAOmD,MAAMR,KAAOA,EAAO,IACnC,IAEAyC,EAAaxC,IAAMA,EACnBwC,EAAazC,KAAOA,EAEpB+D,EAAkB1F,EACnB,CACD,CAMA,SAAS2F,EAAa3F,GAErB,GAAIA,EAAOX,WACX,CACCuE,OAAOkB,OAAOb,SAAS2B,KAAKC,YAAY7F,EAAOhB,OAChD,KAEA,CACC4E,OAAOK,SAAS2B,KAAKC,YAAY7F,EAAOhB,OACzC,CACD,CAEA,IAAI8G,EAAc,KAClB,SAASC,EAAYC,GAEpBF,EAAcE,EAAMlG,MACrB,CAEA,IAAImG,EAAe,MACnB,SAASC,EAAUF,GAElBC,EAAeH,IAAgBE,EAAMlG,MACtC,CAEA,SAASwC,EAAQ0D,GAEhB,GAAIC,EACJ,CACCD,EAAMG,iBACNH,EAAMI,iBACP,CACD,CAEA,SAASC,EAAWC,GAEnB,GAAIA,EAAOC,MACX,CACCD,EAAOC,MAAMC,OACd,CAEA,GAAIF,EAAOG,KACX,CACCH,EAAOG,KAAKD,OACb,CACD,CAEA,SAASd,EAAkB1F,GAE1BA,EAAO0G,QAAQC,QAAQN,GAEvB,GAAIrG,EAAO4G,kBACX,CACC5G,EAAO4G,kBAAkBD,QAAQN,EAClC,CAEAlI,GAAGG,QAAQG,GAAGoI,KAAKC,YAAYC,SAChC,CAGA5I,GAAGG,QAAQG,GAAGC,MAAMC,YAAYqI,UAAY,CAC3CC,YAAa9I,GAAGG,QAAQG,GAAGC,MAAMC,YACjCuI,UAAW/I,GAAGG,QAAQG,GAAGC,MAAME,gBAAgBoI,UAK/CpH,KAAM,WAELG,EAAcjB,MACdsD,EAAoBtD,MACpB6G,EAAa7G,MACbA,KAAK6F,KAAO7F,KAAKE,OAAOyF,uBACzB,EAUA0C,KAAM,SACLC,EACAjI,EACAyH,EACAS,EACAC,GAGA,IAAKD,EACL,CACCvI,KAAKyI,iBACN,KAEA,CACC,GAAID,EACJ,CACC,GAAIA,EAAYE,OAAS,EACzB,CACC1I,KAAKyI,kBACLzI,KAAK2I,gBAAgBH,EACtB,KAEA,CACCxI,KAAK4I,oBACN,CACD,KAEA,CACC5I,KAAK4I,oBACN,CACD,CAEA5I,KAAKM,eAAiBgI,EACtBtI,KAAK6I,mBAAmB7I,KAAKM,eAAiBN,KAAKM,eAAewI,cAAgB3D,UAElF,GAAInF,KAAK8H,kBACT,CACC9H,KAAK8H,kBAAkBD,SAAQ,SAASL,GACvCxH,KAAK4H,QAAQ3E,OAAOuE,GACpBD,EAAWC,GACXnI,GAAG4D,OAAOuE,EAAOtH,OAClB,GAAGF,MAEHA,KAAK8H,kBAAoB,IAC1B,CAEA,GAAIA,EACJ,CACC9H,KAAK8H,kBAAoBA,EACzB9H,KAAK8H,kBAAkBD,SAAQ,SAASL,GACvC,GAAIA,EAAOuB,YACX,CACC,IAAIC,EAAchJ,KAAKE,OAAOwE,cAAc,aAAc8C,EAAOuB,YAAY,MAE7E,GAAIC,EACJ,CACC3J,GAAG0J,YAAYvB,EAAOtH,OAAQ8I,GAC9BhJ,KAAK4H,QAAQxH,IAAIoH,EAClB,CACD,KAEA,CACCxH,KAAKuD,UAAUiE,EAChB,CAEA,GAAIA,EAAOyB,aACX,CACC,MAAMC,EAAclJ,KAAKE,OAAOwE,cAAc,aAAa8C,EAAOyB,kBAElE,GAAIC,EACJ,CACC7J,GAAG4J,aAAazB,EAAOtH,OAAQgJ,GAC/BlJ,KAAK4H,QAAQxH,IAAIoH,EAClB,KAEA,CACCxH,KAAKuD,UAAUiE,EAChB,CACD,CACD,GAAGxH,KACJ,CAEA,IAAKA,KAAKmJ,UACV,CACC9J,GAAG+J,cAAc,2BAA4B,CAACd,IAC9CtI,KAAKwG,gBAAgB6C,iBAAiB,YAAapC,EAAa,MAChEjH,KAAKwG,gBAAgB6C,iBAAiB,UAAWjC,EAAW,MAC5DpH,KAAKwG,gBAAgB6C,iBAAiB,QAAS7F,EAAS,MACxDxD,KAAKM,eAAe+I,iBAAiB,QAAS9J,EAAMS,KAAKyD,mBAAoBzD,MAAO,MAEpFsJ,WAAW,WACVtJ,KAAKE,OAAOC,UAAUC,IAAI,wBAC3B,EAAEK,KAAKT,MAAO,IACf,CAEAX,GAAGG,QAAQG,GAAGC,MAAME,gBAAgBoI,UAAUG,KAAKkB,KAAKvJ,KAAMC,WAE9DZ,GAAG0D,IAAIC,MAAM,WACZhD,KAAK6F,KAAO7F,KAAKE,OAAOyF,wBACxB3F,KAAKwJ,eAAelB,EAASjI,EAAU,KACxC,EAAEI,KAAKT,OAEPA,KAAKyJ,OAAOnB,GACZtI,KAAKyD,qBACLzD,KAAK0J,8BACN,EAEAD,OAAQ,SAASjE,GAEhBxE,EAASwE,EACTzE,EAAgBA,GAAiBf,KAAKW,SAASF,KAAK,KAAM+E,GAC1DxF,KAAKwG,gBAAgB6C,iBAAiB,UAAWrJ,KAAKQ,WACtDR,KAAK2J,cAAcN,iBAAiB,SAAUtI,GAE9C,IACCf,KAAKwG,gBAAgB6C,iBAAiB,SAAUtI,EAAe,CAAC6I,QAAS,MAG1E,CAFE,MAAOC,GACR7J,KAAKwG,gBAAgB6C,iBAAiB,SAAUtI,EACjD,CACD,EAEA+I,KAAM,WAEL,GAAI9J,KAAKmJ,UACT,CACC9J,GAAG+J,cAAc,4BAA6B,CAAC,OAC/CpJ,KAAKwG,gBAAgBuD,oBAAoB,YAAa9C,EAAa,MACnEjH,KAAKwG,gBAAgBuD,oBAAoB,UAAW3C,EAAW,MAC/DpH,KAAKwG,gBAAgBuD,oBAAoB,QAASvG,EAAS,MAC3DxD,KAAKM,eAAeyJ,oBAAoB,QAASxK,EAAMS,KAAKyD,mBAAoBzD,MAAO,MAEvFsJ,WAAW,WACVtJ,KAAK6F,KAAO7F,KAAKE,OAAOyF,wBACxB3F,KAAKE,OAAOC,UAAU8C,OAAO,wBAC9B,EAAExC,KAAKT,MAAO,IACf,CAEAX,GAAGG,QAAQG,GAAGC,MAAME,gBAAgBoI,UAAU4B,KAAKP,KAAKvJ,KAAMC,WAC9DD,KAAKgK,QACN,EAEAA,OAAQ,WAEPhK,KAAKwG,gBAAgBuD,oBAAoB,UAAW/J,KAAKQ,WACzDR,KAAK2J,cAAcI,oBAAoB,SAAUhJ,GAEjD,IACCf,KAAKwG,gBAAgBuD,oBAAoB,SAAUhJ,EAAe,CAAC6I,QAAS,MAG7E,CAFE,MAAOC,GACR7J,KAAKwG,gBAAgBuD,oBAAoB,SAAUhJ,EACpD,CACD,EAEAP,UAAW,SAAS0G,GAGnB,GACCA,EAAM+C,MAAQ,OACX/C,EAAMlG,OAAOkJ,WAAa,KAE9B,CACChD,EAAMG,iBAEN,IAAKH,EAAMiD,SACX,CACC,GAAIjD,EAAMkD,OAAS,MACnB,CACCpK,KAAKU,WACN,KAEA,CACCV,KAAKwG,gBAAgB6D,YAAY,SAClC,CACD,KAEA,CACCrK,KAAKwG,gBAAgB6D,YAAY,UAClC,CACD,CAGA,GACCnD,EAAM+C,MAAQ,SACX/C,EAAMlG,OAAOkJ,WAAa,MAC1BhD,EAAMlG,OAAOkJ,WAAa,MAC1BhD,EAAMoD,UAAY,KAEtB,CACCpD,EAAMG,iBACN,MAAMxC,EAAQ7E,KAAK2J,cAAc5E,eAAeC,WAAW,GAC3D,MAAMuF,EAAKlL,GAAGmL,OAAO,MACrB3F,EAAMI,iBACNJ,EAAMK,WAAWqF,GAEjB,MAAME,EAAWzK,KAAKwG,gBAAgBkE,cACtCD,EAASE,cAAcJ,GACvBE,EAASG,SAAS,MAElB,MAAMC,EAAM7K,KAAK2J,cAAc5E,eAC/B8F,EAAIC,kBACJD,EAAIE,SAASN,EACd,CAEAnB,YAAW,WACVjK,GAAGG,QAAQG,GAAGC,MAAMC,YAAYgB,cAAc2I,eAAexI,EAC9D,GAAG,GACJ,EAEAN,UAAW,WAEV,IAAIsK,EAAY,GAChB,IAAIC,EAAe,KACnB,IAAIC,EAAalL,KAAK2J,cAAc5E,eAAeoG,UAAUD,WAAWA,WACxE,MAAOA,EAAWE,UAAY,MAC9B,CACCF,EAAaA,EAAWA,UACzB,CACA,IAAIG,EAAa,EACjB,IAAIC,EAAiB,GACrB,IAAIC,EAAiB,CAAC,KAAM,KAAM,aAAc,OAChD,MAAOA,EAAeC,QAAQN,EAAWE,YAAc,EACvD,CACC,GAAIF,EAAWE,UAAY,MAC3B,CACCC,IACAC,EAAeG,KAAKP,EACrB,CACAA,EAAaA,EAAWA,UACzB,CACA,GAAIG,EAAaL,EACjB,CACC,GAAIM,EAAeA,EAAe5C,OAAS,GAAG0C,UAAY,aAC1D,CACC,IAAIM,EAAkBJ,EAAeA,EAAe5C,OAAS,GAAGiD,gBAChE,MAAQD,IAAoB,MAAUA,EAAgBE,WAAa,EACnE,CACCF,EAAkBA,EAAgBC,eACnC,CACA,IAAIE,EAAkB,EACtB,MAAOH,GAAmBA,EAAgBN,UAAY,aACtD,CACCM,EAAkBA,EAAgBI,WAClCD,GACD,CACA,GAAKR,EAAaQ,EAAmB,EACrC,CACCZ,EAAe,KAChB,CACD,KAEA,CACC,IAAK,IAAIc,EAAI,EAAGA,EAAIT,EAAe5C,OAAQqD,IAAK,CAC/C,GAAIT,EAAeS,GAAGC,WAAWtD,OAAS,EAC1C,CACCuC,EAAe,MACf,KACD,CACD,CACA,GAAIK,EAAe,GAAGQ,WAAW5C,cAAgB,KACjD,CACC+B,EAAe,KAChB,CACD,CACD,CACA,GAAIA,EACJ,CACCjL,KAAKwG,gBAAgB6D,YAAY,SAClC,CACD,EAEA1J,SAAU,WAETtB,GAAGG,QAAQG,GAAGC,MAAMC,YAAYgB,cAAc2I,eAAexI,EAC9D,EAEAyC,mBAAoB,WAEnB,IAAIwI,EAAY,SAASzH,GACxB,QAASA,EAAQ,KAAO,IAAM,UAC/B,EAEA,IAAIgD,EAAS,SAASyC,GACrB,OAAOjK,KAAK4H,QAAQsE,IAAIjC,EACzB,EAAExJ,KAAKT,MAEPmM,sBAAsB,WACrB,IAAIC,EAASpM,KAAKqM,iBACZ7E,EAAO,SAAWA,EAAO,QAAQyE,EAAUG,EAAOE,eAClD9E,EAAO,WAAaA,EAAO,UAAUyE,EAAUG,EAAOG,iBACtD/E,EAAO,cAAgBA,EAAO,aAAayE,EAAUG,EAAOI,oBAC5DhF,EAAO,kBAAoBA,EAAO,iBAAiByE,EAAUG,EAAOK,iBACpEjF,EAAO,gBAAkBA,EAAO,eAAeyE,EAAUG,EAAOM,QAAU,iBAC1ElF,EAAO,kBAAoBA,EAAO,iBAAiByE,EAAUG,EAAOM,QAAU,mBAC9ElF,EAAO,iBAAmBA,EAAO,gBAAgByE,EAAUG,EAAOM,QAAU,kBAC5ElF,EAAO,gBAAkBA,EAAO,eAAeyE,EAAUG,EAAOM,QAAU,cACjF,EAAEjM,KAAKT,MACR,EAEA0J,6BAA8B,WAE7B1J,KAAK4H,QAAQC,SAAQL,IACpB,GAAI,uBAAwBA,EAC5B,CACCA,EAAOqB,mBAAmB7I,KAAKwG,gBAChC,IAEF,EAEA6F,UAAW,WAEV,IAAI/D,EAAU5I,EAAmBM,KAAKwG,iBACtC,IAAI4F,EAAS,CAAC,EAEd,GAAI9D,EACJ,CACC,IAAIjF,EAAQsJ,iBAAiBrE,GAE7B,OAAQjF,EAAMuJ,iBAAiB,gBAE9B,IAAK,OACL,IAAK,SACL,IAAK,MACL,IAAK,MACL,IAAK,MACL,IAAK,MACL,IAAK,MACJR,EAAO,QAAU,KACjB,MAGF,GAAI9D,EAAQ8C,UAAY,IACxB,CACCgB,EAAO,QAAU,IAClB,CAEA,GAAI/I,EAAMuJ,iBAAiB,gBAAkB,SAC7C,CACCR,EAAO,UAAY,IACpB,CAEA,GAAI/I,EAAMuJ,iBAAiB,mBAAmB9I,SAAS,cACtDT,EAAMuJ,iBAAiB,wBAAwB9I,SAAS,aACzD,CACCsI,EAAO,aAAe,IACvB,CAEA,GAAI/I,EAAMuJ,iBAAiB,mBAAmB9I,SAAS,iBACtDT,EAAMuJ,iBAAiB,wBAAwB9I,SAAS,gBACzD,CACCsI,EAAO,UAAY,IACpB,CAEA,IAAIM,EAAQrJ,EAAMuJ,iBAAiB,eAAiB,OACpD,GAAIF,EAAMG,MAAM,gCAChB,CACCT,EAAO,SAAWM,CACnB,CAEA,GAAI1M,KAAKM,eAAe4J,WAAa,KAAOlK,KAAKM,eAAe4F,QAAQ,KACxE,CACCkG,EAAO,QAAU,IAClB,CACD,CAEA,OAAOA,CACR,EAEA5C,eAAgB,SAAShE,EAAMnF,EAAUoF,GAExCF,EAAuBvF,KAAMwF,EAAMC,EACpC,EAEAqH,QAAS,WAER,OAAO9M,KAAKK,WAAa,aAAeL,KAAKK,WAAa,aAC3D,EAEAuI,mBAAoB,WAEnB5I,KAAKE,OAAO8L,WAAWnE,SAAQ,SAASL,GACvC,GAAIA,EAAOuF,QAAQC,KAAO,OAC1B,CACCxF,EAAOyF,OAAS,IACjB,CACD,GACD,EAEAtE,gBAAiB,SAASH,GAEzBxI,KAAKE,OAAO8L,WAAWnE,SAAQ,SAASL,GACvC,GAAIgB,EAAYgD,QAAQhE,EAAOuF,QAAQC,OAAS,EAChD,CACCxF,EAAOyF,OAAS,IACjB,CACD,GACD,EAEAxE,gBAAiB,WAEhBzI,KAAKE,OAAO8L,WAAWnE,SAAQL,IAC9B,GAAIA,EAAOuF,QAAQC,KAAO,aAC1B,CACC,GAAIlK,IAAIgC,OAAOoI,YACf,CACC1F,EAAOyF,OAAS,KACjB,KAEA,CACCzF,EAAOyF,OAAS,IACjB,CACD,KAEA,CACCzF,EAAOyF,OAAS,KACjB,IAEF,EAEAE,aAAc,WAEb,OAAOnN,KAAKO,UACb,EAED,EAn2BA"}