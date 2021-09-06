---
question: When i load my game, i get a message saying something about SKSE not being installed or being the wrong version. Please halp!!
layout: faq
---

**A.** Make sure you have SKSE properly setup. Many potential issues here. Assuming you are using Skyrim Special Edition, get the appropriate version of SKSE from their website: <https://skse.silverlock.org/>
Current build is `2.0.19`, so make sure you are not using `1.7.3` which is for oldrim (Skyrim classic/legendary edition). To install, simply download the 7z archive, open it (using 7zip usually) and copy the following file directly inside your Skyrim Special Edition folder (the folder where you have `SkyrimSE.exe`). The files you need are: ```Data (folder)
skse64_1_5_97.dll
skse64_steam_loader.dll
skse64_loader.exe```You will need to run the game via SKSE and, if you are using MO2 or Vortex, you will need to run SKSE through them so that all your mods get loaded into the game.