import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "ArrowDialogueParse", "img/projects/project-6-icon.png", `
    <div class="paragraph">
      <strong>ArrowDialogueParse</strong> is a simple & quick format converter program/script written in golang. <br />
      This parser allows converts all dialogue from a Arrow project to CSV which makes importable to another Game Engine like Unreal Engine.
            </div>
            <div class="paragraph center">
            <div class="notice">
            Available on <a href="https://github.com/gabuscuv/ArrowDialogueParser" target="_blank">Github</a>
            </div>
        </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Fast, Quick & Simple</li>
            <li>Unattended mode using a JSON config file!</li>
            <li>Allows use Node Notes as Metadata!</li>
            </ul>
        </div>

    `, "#c10606", false, false),
    new ProjectData("project-7", "UE4 Toolkit", "img/projects/toolkit/cmd.jpg", `
    <div class="paragraph">
                <strong>UE4 Toolkit</strong> is a set of scripts written in Powershell & Bash that helps about automatization compiling and cooking UE4 Games since CLI. <br />
                without need open UE4Editor, Ideal for Continous Integration Tasks.
          </div>

    <div class="paragraph center">
              <div class="notice">
                Available on <a href="https://github.com/gabuscuv/UE4-Toolkit-Public" target="_blank">Github</a>
              </div>
          </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Allows Cooking your UE4 Game, copy all extra files (like README, NOTICE or ChangeLog files) & compress in one-click/enter</li>
              <li>Allows you retry failed compilations or initial compilations in one-click/enter</li>
              <li>Make easy set up custom ssh keys, name, e-mail commits, and checks if it's not installed git lfs</li>
              </ul>
          </div>

`, "#1ca1e2", false, true),
];