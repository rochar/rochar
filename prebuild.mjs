import regexReplace from "regex-replace"
 
const now = new Date();

const searchString = '\\d{2}/\\d{2}/\\d{4}';
const replaceString = now.toLocaleDateString();
const path = '.\\src\\configuration.json';
 
const options = {
    filenamesOnly: false, //default
    fileContentsOnly: false //default
};

const doRegexReplace = async function() {
    try {
        await regexReplace(searchString, replaceString, path, options);
    } catch (err) {
        console.error('err > regexReplace > testing', err);
    }
}
doRegexReplace();
//callback (no support for callbacks currently)