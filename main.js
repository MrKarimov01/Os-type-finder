function osFinder() {
    const os = require("os")
    const osFreeram = (os.freemem() / 1024 / 1024/1024).toFixed()*1;
    const osFullram = (os.totalmem() / 1024 / 1024/1024).toFixed()*1;
    const osWorkingram = osFullram - osFreeram;
    const WinUserName = os.userInfo().username;
    const coreType = os.cpus()[0].model
    const WinType = os.arch()
    
    
    function OsFinder(CoreType,WinUserName,WinType,Ram,FreeRam,WorkingRam){
        const returnos = `
        CoreType: ${CoreType}
        WinUserName: ${WinUserName}
        WinType: ${WinType}
        Ram: ${Ram} GB
        FreeRam: ${FreeRam} GB
        WorkingRam: ${WorkingRam} GB
        `
        return returnos
    }
    console.log(OsFinder(coreType,WinUserName, WinType, osFullram,osFreeram ,osWorkingram));
    
}
osFinder()