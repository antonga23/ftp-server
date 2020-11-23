const FtpSrv = require('ftp-srv');
const homeDir = "/home/Jordan/Desktop/ftptest";
const hostname = '127.0.0.1';
const port = 80;
const ftpServer = new FtpSrv({
    url: `ftp://${hostname}:${port}`,
    pasv_url: `ftp://${hostname}`,
    anonymous: true,
});
ftpServer.on('login', (data, resolve, reject) => {
    console.log('wee0');
    // console.log("[login] Connection by", data);
    console.log("[login] Setting home dir to:", homeDir);
    // resolve({ root: '/' });
    resolve({ root: homeDir });
});
ftpServer.listen()
    .then(() => { console.log(`Server running at ftp://${hostname}:${port}/`); });