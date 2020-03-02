function strAllReplace (stringWorkspace,whatReplace) {
    if(typeof (stringWorkspace) =='string' && typeof(whatReplace)=='object')
    {
        for(let i=0; i<stringWorkspace.length;i++)
            for(let x in whatReplace)
            {
                stringWorkspace[i] = stringWorkspace[i].replace(new RegExp(x,'g'),whatReplace[x]);
            }

    }
    else
    {
        throw("Invalid data! This function takes 2 arguments, (String to convert, object {'changeFrom':'changeTo'}");
    }

}

module.exports = {
    strAllReplace
}

