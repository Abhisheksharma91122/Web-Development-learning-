import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basepath = "C:\\Users\\ASUS\\Desktop\\Web Development\\basic\\v91";

let files = await fs.readdir(basepath)
console.log(files)

for (const items of files) {
    // console.log(items.split(".").length)
    let ext = items.split(".")[items.split(".").length - 1]
    console.log("Runnig for : " + ext)
    if(ext != "json" && ext != "js" && items.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath , ext))){
            // move the file to this directory if its not a js and json file 
            fs.rename(path.join(basepath,items),path.join(basepath , ext , items));
        } else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath,items),path.join(basepath , ext , items));
        }
    }
}