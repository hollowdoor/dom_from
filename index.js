var domify = require('domify');

/*
git remote add origin https://github.com/hollowdoor/dom_from.git
git push -u origin master
*/

module.exports = function(el, doc){
    var frag, type, i;

    if(!doc){
        doc = document;
    }

    if(typeof el === 'string'){
        return domify(el, doc);
    }else{
        if(!isNaN(el.nodeType) && el.nodeType > 0){
            return el;
        }
        type = Object.prototype.toString.call(el);
        if(type === '[object Object]'){
            if(el.root && !isNaN(el.root.nodeType) && el.nodeType > 0)
                return el.root;
            if(el.length){
                frag = doc.createDocumentFragment();
                for(i=0; i<el.length; i++){
                    frag.appendChild(el[i].cloneNode(true));
                }
                return frag;
            }
        }else if(type === '[object Array]'){
            frag = doc.createDocumentFragment();
            for(i=0; i<el.length; i++){
                frag.appendChild(el[i]);
            }
            return frag;
        }
    }

    return domify(el+'', doc);
};
