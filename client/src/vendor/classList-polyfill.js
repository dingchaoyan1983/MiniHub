(function () {
    var HTMLNames = [
        "Unknown", "UList", "Title", "TextArea", "TableSection",
        "TableRow", "Table", "TableCol", "TableCell", "TableCaption",
        "Style", "Span", "Select", "Script", "Param", "Paragraph",
        "Option", "Object", "OList", "Meta", "Marquee", "Map", "Link",
        "Legend", "Label", "LI", "Input", "Image", "IFrame", "Html",
        "Heading", "Head", "HR", "FrameSet", "Frame", "Form", "Font",
        "FieldSet", "Embed", "Div", "DList", "Button", "Body",
        "Base", "BR", "Area", "Anchor", "Phrase"    ];

    if (!('classList' in document.createElement('_'))) {
        for (var i = 0; i < HTMLNames.length; i++) {
            Object.defineProperty(window["HTML" + HTMLNames[i] + "Element"].prototype, 'classList', {
                get: function () {
                    return DOMTokenList(this);
                }
            });
        }
    }

    function DOMTokenList(element) {
        var result = {};
        convertToLikeArray(result, element);
        result.contains = function (cname) {
            var classNameList = getClassNameList(element);
            for (var i = 0; i < classNameList.length; i++) {
                if (classNameList[i] == cname) {
                    return true;
                }
            }
            return false;
        };
        result.add = function (a1, a2) {
            for (var i = 0; i < arguments.length; i++) {
                var cname = arguments[i];
                if (!this.contains(cname)) {
                    element.className = element.className + ' ' + cname;
                }
            }
        };
        result.remove = function (a1, a2) {
            var classNameList = getClassNameList(element);
            var newClassNameList = [];
            for (var i = 0; i < classNameList.length; i++) {
                var has = false;
                var cname = classNameList[i];
                for (var j = 0; j < arguments.length; j++) {
                    if (arguments[j] == cname) {
                        has = true;
                    }
                }
                if (has == false) {
                    newClassNameList.push(cname);
                }
            }
            element.className = newClassNameList.join(' ');
        };
        result.toggle = function (cname, opt) {
            if (opt != null) {
                if (opt == true) {
                    this.add(cname);
                } else {
                    this.remove(cname);
                }
            } else {
                if (this.contains(cname)) {
                    this.remove(cname);
                } else {
                    this.add(cname);
                }
            }
        };
        result.item = function (index) {
            var classNameList = getClassNameList(element);
            if (classNameList[index] == null) {
                return null;
            }
            return classNameList[index];
        };
        return result;
    }

    function getClassNameList(element) {
        var classNameList = [];
        var rawClassNameList = element.className.split(' ');
        for (var i = 0; i < rawClassNameList.length; i++) {
            if (rawClassNameList[i] == '') {
                continue;
            }
            classNameList.push(rawClassNameList[i]);
        }
        return classNameList;
    };

    function convertToLikeArray(result, element) {
        var classNameList = getClassNameList(element);
        result.length = classNameList.length;
        for (var i = 0; i < classNameList.length; i++) {
            result[i] = classNameList[i];
        }
    }})();
    