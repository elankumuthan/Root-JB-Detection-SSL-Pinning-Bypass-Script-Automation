


console.warn(`[+] JailMonkey JailBreak Detection Bypass`);
/**
 * [*] Twitter: @DarkLotusKDB (Kamaldeep Bhati)
 * [*] DM for credit, then i will update.
 */
console.warn(`################################################`);

if (ObjC.available) {
    try {
        var className = "JailMonkey";
        var funcName = "- isJailBroken";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
            onLeave: function(retval) {
                console.log("[*] Class Name: " + className);
                console.log("[*] Method Name: " + funcName);
                console.log("\t[-] Type of return value: " + typeof retval);
                console.log("\t[-] Original Return Value: " + retval);
                var newretval = ptr("0x0")
                retval.replace(newretval)
                console.log("\t[-] New Return Value: " + newretval)
            }
        });
    } catch (err) {
        console.log("[!] Exception2: " + err.message);
    }
} else {
    console.log("Objective-C Runtime is not available!");
}
