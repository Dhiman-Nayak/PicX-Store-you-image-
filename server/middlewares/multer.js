// import multer from "multer"

// const storage=()=> multer.memoryStorage();

// const uploadUserImage=multer({storage:storage()}).single("file")
// export default uploadUserImage
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define the destination directory
        cb(null, 'temp/');
    },
    filename: function (req, file, cb) {
        // Define the file name
        cb(null, file.originalname+"-"+Date.now());
    }
});

const uploadUserImage = multer({ storage }).single("file");

export default uploadUserImage;
