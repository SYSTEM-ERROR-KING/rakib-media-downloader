module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require("nayan-media-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        dev: "RAKiB CHOWDHURY",
        devfb: "https://www.facebook.com/SYSTEM.ERROR.KING?mibextid=ZbWKwL",
        devwp: "https://Wa.me/+8801771306867", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });
