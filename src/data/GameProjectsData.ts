import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "VRProject (Temporal Name)", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
     <strong>VRProject (Temporal Name)</strong> is my current on-going Project in finals phase which is a VR Game. <br/>
     Which you can find Information about the current state <a href="https://github.com/gabuscuv/VRProjectLiteForRecruiter-HR">here.</a> <br/>
     You can find <a href="https://www.youtube.com/playlist?list=PLUjwTJzEXpjZi-vGFN79H84W2OptAIlkG"> here </a> a playlist about different features of the game.
     <br/>Placeholder Photo by <a href="https://unsplash.com/@unblume?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jannis Blume</a> on <a href="https://unsplash.com/s/photos/virtual-reality-woman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>.
     </div>

     <div class="paragraph center">
     <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLUjwTJzEXpjZi-vGFN79H84W2OptAIlkG" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
            <li>Adventure/Mystery Game for VR!</li>
            <li>Compatible with almost every headset thanks to OpenXR!</li>
            <li>Made with Unreal Engine 4 with future build for Unreal Engine 5</li>
            <li>Features FMOD & SteamAudio for Audio Immersion</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Optimistic Chubby Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Kübler", "img/projects/project-2-icon.png", `
    <div class="paragraph">
        <strong>Kübler</strong> is a "unfinished" project leaded by Juanjo Salvador for Spain GameDev II, Written in Love2D. <br />
        It's only in Spanish
    </div>
    <div class="paragraph">
    Main Tasks :
    <ul>
    <li>ImGui Tools/Debugger Programmer</li>
    <li>Game Programmer</li>
    <li>Music Composition (No Published)</li>
    <li>CI Automatization (for Release & Debug Builds)</li>
    </ul>
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/bR4uboKmQQU" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://juanjosalvador.itch.io/kubler" target="_blank">itch.io</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Kubler/MainTitle.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://img.itch.zone/aW1hZ2UvNzcxMzE3LzQzMTUzNDcucG5n/250x600/Q3WTMj.png" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Kubler/Shield.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Kubler/Boss.jpg" alt="Singing Addict Screenshot" />
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "TestingGround++", "img/projects/project-3-icon.png", `
    <div class="paragraph">
        <strong>TestingGround++</strong> is an improvement of last execrise from UE4 course made by <a href="https://www.udemy.com/user/bentristem/">Ben Tristem</a><br/>
        Adding Some Must-Have features.
    </div>
    <div class="paragraph center"><iframe class="youtube" src="https://www.youtube-nocookie.com/embed/UFTDGFCA2vI" frameborder="0" allowfullscreen></iframe></div>
    <div class="paragraph">
        New Features :
        <ul>
        <li>Added Multi-Tile Support (+ 2 New tiles extras).</li>
        <li>Added Enemies Multiplier.</li>
        <li>Added Title Screen, Dead Screen, Tutorial Screen, Settings Screen and Pause Screen.</li>
        <li>Added Revive/Lives/Attempts mode</li>
        <li>Added Aim Mode.</li>
        <li>Added Walk/Run Mode.</li>
        <li>Added Footsteps Sounds.</li>
        <li> Added Multi-language Support (English and Spanish).
        <li> Better Memory Management.</li>
        <li> Better Textures.</li>
        <li> Better Performance.</li>
        <li> Improved UI.</li>
        <li> Saving HighScore.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows/Linux builds available <a href="https://github.com/gabuscuv/TestingGrounds-Public/releases" target="_blank">here</a>.
        Source code is available on <a href="https://github.com/gabuscuv/TestingGrounds-Public" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/TestingGrounds/MainMenu.jpg" alt="Main Menu" />
        <img class="pc-screenshot" src="img/projects/TestingGrounds/NormalBattle.jpg" alt="Player Aiming an Enemy" />
        <img class="pc-screenshot" src="img/projects/TestingGrounds/AmmoItem.jpg" alt="Ammo/Health Item" />
        <img class="pc-screenshot" src="/img/projects/TestingGrounds/DeathScreen.jpg" alt="Death Screen" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "_4thof4th", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>_4thof4th (2017)</strong> was my end of degree project (note: 9) using my own Game Engine (Usagi Engine) based on MonoGame Game Framework. (C#) <br />
    The Game is about a Cute/Kawaii Game which suffer a Buffer overflow which result in a virtual reboot <br />
    booting in a Simulated OS (based on FreeBSD) and (again, fictional/Virtual etc) run some unknown routines which active your typical Bad AI. (HAL900,GLaDOS, etcetc) <br />
    they shows some tricks like toggling keyboard lights, reading some desktop filenames (again, it's safe) <br />
    and produces some beepings (a little melody!), all with a cheap battle end which is poor/werid bad bullet hell. <br />
    And technically don't have a ending so...
    </div>
    <br/>Placeholder Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.

    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Emulate a Customized POST with your computer data (your real BIOS and CPU are showed)!!</li>
        <li>Simulate a FreeBSD Bootstrap!!</li>
        <li>Uses your PC-Speaker (DOS-Style)</li>
        <li>Enables lights from your keyboard!!!! (?)</li>
        <li>Probably It's not a proudest work as it's was my first "game" (and one quite bad) for my own way but hey!, Not bad for a beginner, right? (?)</li>
        </ul>
    </div>

    <!-- <div class="paragraph"><div class="notice">Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.</div> -->
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/_4thof4th/MainTitle.jpg" alt="_4th" />
        <img class="pc-screenshot" src="/img/projects/_4thof4th/Overflow.jpg" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="/img/projects/_4thof4th/VirtualBios.jpg" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="/img/projects/_4thof4th/InGame.jpg" alt="Eugeneable Screenshot" />
    </div>

    <div class="paragraph">
    Trivia: Mono means "Monkey" in Spanish and Usagi means "Rabbit" in Japanese, So... <br /> Is It Rabbit over a Monkey? <br />
    *Ba dum tss*
    </div>
    `, "#e80fb7"),

];