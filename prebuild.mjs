import regexReplace from "regex-replace"
 
const now = new Date();
const dateOnly = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`

console.log(dateOnly);

const options = {
    filenamesOnly: false, //default
    fileContentsOnly: false //default
};

const doRegexReplace = async function(searchString,replaceString,path,options) {
    try {
        await regexReplace(searchString, replaceString, path, options);
    } catch (err) {
        console.error('err > regexReplace > testing', err);
    }
}
doRegexReplace('\\d{4}-\\d{1,2}-\\d{1,2}',dateOnly, '.\\src\\configuration.json',options);
doRegexReplace('\\d{4}-\\d{1,2}-\\d{1,2}',dateOnly, '.\\public\\sitemap.xml',options);
//callback (no support for callbacks currently)