const publicIp = require("public-ip");

// It works, it gets a new ip every single time!
(async () => {
	console.log(await publicIp.v4());
	process.exit(0);
})();
