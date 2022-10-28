import * as dotenv from "dotenv";

const { createHmac } = await import("node:crypto");

dotenv.config();

function basicCrypt(item) {
  var toEcntrypt = item + process.env.SECRET;

  var salt = process.env.SALT;
  var hash = createHmac("sha512", salt).update(toEcntrypt).digest("hex");

  for (let x = 0; x < 150; x++) {
    var hash = createHmac("SHA512", hash + process.env.SALT)
      .update(process.env.SECRET + toEcntrypt)
      .digest("hex");
    //reqBody.item
  }
  item = hash;
  // console.log(item);
  return item;
}

export default basicCrypt;
