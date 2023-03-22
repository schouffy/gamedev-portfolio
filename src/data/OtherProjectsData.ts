import ProjectData from '@/data/ProjectData'

export default [
  new ProjectData("project-7", "Beaten Games", "img/projects/BeatenGames-icon.png", `
  <div class="paragraph">
    <strong>BeatenGames</strong> is a SPA (single-page application) written in JS/React.JS<br />
    This SPA is automatized list which uses data from a static (for now) JSON generated with information from my game database plus some reference from the IGDB database
          </div>
          <div class="paragraph center">
          <div class="notice">
          Live WebPage available <a href="https://cutt.ly/x81PC7S" target="_blank">here</a>.
          Source code is available on <a href="https://github.com/gabuscuv/BeatenGames-Source" target="_blank">GitHub</a>.
          </div>
      </div>

        <div class="paragraph">
          Main features :
          <ul>
          <li>Selectable by Years without Page Reloads</li>
          <li>Responsive Dynamic Web Design for Phones, Tablets and High resolution displays</li>
          <li>Done in ~2 work days</li>
          </ul>
      </div>

  `, "#c10606", false, true),
    new ProjectData("project-6", "BacklogDatabase-Utils", "img/projects/HLTB2GameList-icon.png", `
    <div class="paragraph">
      <strong>BacklogDatabase-Utils</strong> is a autofiller database & other utils CLI program for my personal Game Database written in C#. <br />
      It uses information from IGDB (API Keys required) and HowLongToBeat.
            </div>
            <div class="paragraph center">
            <div class="notice">
            Available on <a href="https://github.com/gabuscuv/BacklogDatabase-Utils" target="_blank">Github</a>
            </div>
        </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>Add Scores, Year Release from IGDB</li>
            <li>Add time required for beat it from HowLongToBeat (It's broken right now because a deprected third-party library, It's planned fix the library by myself)</li>
            <li>Export data for other applications like BeatenGames</li>
            </ul>
        </div>

    `, "#c10606", false, true),
    new ProjectData("project-8", "HLTB2GameList", "img/projects/toolkit/cmd.jpg", `
    <div class="paragraph">
                <strong>HLTB2GameList</strong> is a workaround script written in Python for a malfunction feature of BacklogDatabase-Utils (because a deprected third-party library, It's planned fix the library by myself)           
                </div>

    <div class="paragraph center">
              <div class="notice">
                Source Code available on <a href="https://github.com/gabuscuv/HLTB2GameList" target="_blank">Github</a>
              </div>
          </div>
          </div>

`, "#1ca1e2", false, false),
];