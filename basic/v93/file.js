import fs from "fs/promises"
import fsn from "fs"
import path from "path"

let basedir = "C:\\Users\\ASUS\\Desktop\\Web Development\\basic\\v93"
 
let files = await fs.readdir(basedir)
console.log(files)


for (const items of files) {
    let ext = items.split(".")[items.split(".").length - 1];
    console.log(ext)
    if(ext != "js" && ext != "json" && items.split(".").length > 1){
        if(fsn.existsSync(path.join(basedir , ext))){
            fs.rename(path.join(basedir , items) , path.join(basedir , ext , items))
        } else {
            fs.mkdir(ext)
            fs.rename(path.join(basedir , items) , path.join(basedir , ext , items))
        }
    }
}