import transformedPolishLettersPattern from './letters';
import strAllReplace from '../strUtilities/strAllReplace';


function transformToSelectOptions (arrayOfRegions){
    let results = [];
    strAllReplace(arrayOfRegions);
    for(var i=0;i<arrayOfRegions.length;i++)
    {
        let tmpObject = {
            value:`${arrayOfRegions[i]}`,
            label:`${arrayOfRegions[i].toLowerCase()}`
        }
        results.push(tmpObject);
    }
    return results;
}

export default transformToSelectOptions;