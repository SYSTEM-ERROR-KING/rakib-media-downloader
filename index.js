module.exports.alldown = (url) => 
  new Promise(async (resolve, reject) => {
    const { alldown } = require(imon-media-downloader");

    try {
      const { data, msg } = await alldown(url);

      resolve({
        status: true,
        developer: "IMON",
        devfb: "https://www.facebook.com/Imon.132233?mibextid=ZbWKwL",
        devwp: "wa.me/+8801318582357", 
        data: data || msg,
      });
    } catch (error) {
      reject({ 
        status: false, 
        error: error.message || "An unexpected error occurred" 
      });
    }
  });

