import crypto from "crypto"


const encryptFile = (fileBuffer, encryptionKey) => {
    const iv = crypto.randomBytes(16);
    // console.log("ggg",encryptionKey);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv);
    
    const encryptedData = Buffer.concat([cipher.update(fileBuffer), cipher.final()]);
    
    return { encryptedData, iv };
  };

export default encryptFile