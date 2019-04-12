Device("Device").App("Home").MobileLabel("NBG").Tap
Device("Device").EnterKeys 0,"334759"
Device("Device").EnterKeys 1,"Tab"
Device("Device").EnterKeys 0,"1234!!AA"
Device("Device").App("NBG Mobile Banking").MobileButton("Login").Tap
Device("Device").App("NBG Mobile Banking").MobileObject("More options").Tap
Device("Device").App("NBG Mobile Banking").MobileLabel("Log out").Tap
Device("Device").App("NBG Mobile Banking").MobileButton("OK").Tap
Device("Device").Home
