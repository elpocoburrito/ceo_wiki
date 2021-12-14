---
title: "Clean Skyrim and Mod Organiser 2: How do i properly setup my modding environement?"
layout: info
---

# --- Explanation ---
Okay, this will be a short guide to setting up Skyrim SE and MO2 in a clean way, which will, among other things, fix these struggles:
- Starting a fresh modlist and only having a dirty Skyrim installation, which will force you to either clean it or reinstall through steam.
- Having Steam update your Skyrim SE to Skyrim Aniversary Edition without your consent, breaking all your mods.
- Having more than one modlist using a single Skyrim SE installation.
- Having your modding tools (Loot, Bodyslide etc.) target the wrong skyrim folder.

So here we go!

# --- Initial steps ---
1. Take a functionnal Skyrim SE folder, ideally a clean unmodded one. If you dont have one, you will have to use some way to get one. A common way it to install Skyrim Aniversary Edition from steam and use the rollback patch from nexus. But this is outside the scope of this guide.
2. Copy it somewhere where you want it to be. If you have a folder for all your games, you can place it there. Make sure it isnt placed where Steam expects your Skyrim SE to be. I usually put it on my second hard drive, in the `D:\Games\Bethesda\SkyrimSE\` folder but this is up to you.
3. Create a Mod Organiser 2 installation. The MO2 instances should be on the drive you have the most space available, as the MO2 folder(s) can become very heavy. I personally place it in the `D:\Games\Bethesda\ModOrganiser2\`, with every modlist having their own instance in their `D:\Games\Bethesda\ModOrganiser_<Modlist Description>\` folder.
3.1 I like to have the MO2 folder where the Skyrim folder is, but this is optional.
4. Make sure, in MO2 settings, that the base game folder points to your new copy of Skyrim SE from step 2, not the Steam one.

# --- Fixing the skyrim installation path ---
5. Download my .reg file at the link below and follow the described steps below. Make sure you change the path in the registry file with the path of your skyrim installation you created in step 2.

https://cdn.discordapp.com/attachments/890592804001153155/920007089735229490/skyrim_path.reg

Easy route: 
1. Open this file with notepad (or any text editor, like vscode and notepad++)
2. Change the path to skyrim to your new path (make sure to follow the same syntax for the path, with the same type of slashes.)
3. Save file then double click on it and press "ok"
Note: In my case the new line #4 would be `"Installed Path"="D:\\Games\\Bethesda\\SkyrimSE"`

Hard route:
Open regedit and navigate to the registry path shown in my .reg file. Then change the install path from there.

6. Feel free to install your ENB files and core SKSE files in the Skyrim SE folder from step 2 as they cannot really be managed in MO2. If you need a different ENB depending on your modlist, i would recommend either using an ENB manager or keeping multiple `.reg` files, one for each skyrim install, and just running the file when you need to change the skyrim you work with. You should be able to play without changing the registry but making changes using tools might require to change the registry, depending on which tool it is.

# --- Recommended additional steps ---
I recommend you do the following changes, but they are optional. They might save you many headaches though.
- Clean your masters. There are many good guides for that online. This might save you hours of trying to figure out a crash. I know it did fix my crashes more than once.
- Install Display tweaks. This mod is a god send and fixes more than a dozen issues with skyrim display, physics etc. It enables playing above 60fps, fixes double cursor, fixes scrolling in game affecting other open windows like your browser and many, many others.
- Run BethINI, will significantly improve your performance and often even your visuals.