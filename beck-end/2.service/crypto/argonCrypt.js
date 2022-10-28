import argon2, { hash } from "argon2";

async function argonCrypt(encrypt, reqBody) {
  let hash = await argon2.hash(encrypt, {
    type: argon2.argon2i,
    // hashLength: 512,
    // timeCost: 450,
    // memoryCost: 65536,
  });

  return hash;
}

export default argonCrypt;
