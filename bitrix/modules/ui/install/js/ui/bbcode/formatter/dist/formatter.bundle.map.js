{"version":3,"file":"formatter.bundle.map.js","names":["this","BX","UI","exports","ui_bbcode_parser","main_core","ui_bbcode_model","nameSymbol","Symbol","groupSymbol","validateSymbol","beforeSymbol","convertSymbol","forChildSymbol","afterSymbol","defaultValidator","defaultNodeConverter","node","defaultElementConverter","element","NodeFormatter","constructor","options","Type","isArray","name","setName","setValidate","validate","setBefore","before","setConvert","convert","setForChild","forChild","setAfter","after","isStringFilled","TypeError","getName","callback","isFunction","result","isBoolean","runBefore","BBCodeNode","isNull","runConvert","isDomNode","runForChild","runAfter","formattersSymbol","onUnknownSymbol","Formatter","Map","setNodeFormatters","formatters","isNil","onUnknown","setOnUnknown","getDefaultUnknownNodeCallback","static","source","isString","BBCodeParser","parse","isArrayFilled","forEach","formatter","setNodeFormatter","set","scheme","getScheme","isVoid","createFragment","children","createText","getOpeningTag","getChildren","getClosingTag","document","createDocumentFragment","runOnUnknown","getNodeFormatter","get","format","isPlainObject","data","isUndefined","sourceNode","prepareSourceNode","nodeFormatter","isValidNode","preparedNode","convertedElement","childNode","childElement","convertedChildElement","appendChild","BBCode"],"sources":["formatter.bundle.js"],"mappings":"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"}