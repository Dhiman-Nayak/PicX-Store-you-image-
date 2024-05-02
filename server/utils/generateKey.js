import crypto from "crypto"

const generateEncryptionKey=(l)=>{
    return crypto.randomBytes(l/2).toString("hex");
}

export default generateEncryptionKey;