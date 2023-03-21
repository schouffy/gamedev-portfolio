<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm Gabriel Bustillo del Cuvillo, <strong> Gaby for everyone </strong>, I'm a Software Developer since 2017.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-BustilloDelCuvilloGabriel-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download Essential Resume (PDF) 🇬🇧</a>
        <a class="download-link" href="d/resume-BustilloDelCuvilloGabriel-en-gamedev.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download Essential Resume GameDev (PDF) 🇬🇧</a>
        <a class="download-link" href="d/cv-BustilloDelCuvilloGabriel-es.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Descargar CV Esencial (PDF) 🇪🇸</a>
        <a class="download-link" href="d/cv-BustilloDelCuvilloGabriel-es-gamedev.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Descargar CV Esencial GameDev (PDF) 🇪🇸</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Gaby" /> 
    </div>

    <div style="clear:both"></div>

      <div class="notice">
      All content below It's a long and detailed version of my resume. <br />
      If you want the 1-page version,  Please download the "Essential Resume" from the links above.
      </div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Game Developer</h3>
      <h4>2017-2022</h4>
      <div> You can see my work <router-link to="/game-projects">here</router-link>,
      </div>


      <h3>Software Developer - Itixo s.r.o/ICT Capital s.r.o</h3>
      <h4>2018-2020 - Prague, Czech Republic</h4>
      <div>
      <ul>
        <li>Software Creation y maintenance in .NET Framework and migration tasks to .NET Standard/Core.</li>
        <li>Refactoring Tasks.</li>
        <li>Creation and Design of Unit Tests for old and new projects</li>
      </ul>
      </div>

      <div class="tech-stack">C#, .Net Framework/Core/Standard, JavaScript, ASP.Net Classic, Microsoft SQL Server, Microsoft Azure</div>

      <h3>Software Developer - KnowledgeMill Limited</h3>
      <h4>2017 - London, England</h4>

      <div>Remade a Web Application originally made with 
      Microsoft Silverlight to Node.js with REST API reverse engineering (because lack of documentation) <br />
        <ul>
        Detailed achievements:
        <li>Improving WebApp offering Microsoft Exchange Service Support and Integration like other newer Company’s products.</li>
        <li>Redesign Front Page.</li>
        <li>RPM Packing and init.d configuration</li>
      </ul>
      </div>
      <div class="tech-stack">Node.js, ECMA6+, BootStrap, Microsoft Exchange Service, CentOS/RPM</div>

      <h3>Software Developer As Trainee - Viewnext</h3>
      <h4>2017 - Caceres, Spain</h4>

      <div class="tech-stack">IBM Websphere, IBM MQ Manager, ESQL</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" />
        <SkillRate name="C++" />
        <SkillRate name="JavaScript" />
        <SkillRate name="Golang" />
      </div>

      <div class="skill-set">
        <h3>GameDev</h3>
        <SkillRate name="Unreal Engine 4"/>
        <SkillRate name="MonoGame" />
        <SkillRate name="FMOD" />
        <SkillRate name="ImGui" />
        <SkillRate name="Love2D" />
      </div>
      
      <div class="skill-set">
        <h3>Web Things</h3>
        <SkillRate name="node.js"/>
        <SkillRate name="ASP.Net Classic" />
      </div>

      <div style="clear:both" />

      <h2>Education</h2>

      <h3>
        <a href="https://www.todofp.es/dam/jcr:7655e32d-08a3-47a7-a479-ddb6f032c63e/n-tsdesarrolloaplicacionesmultiplataformaen-pdf.pdf">
        Higher IT Studies in Multi-Platform Applications Development</a> - 2017</h3>
      <h4>IES Agora, Caceres, Spain</h4>
      <div>In Spain: Técnico Superior en Desarrollo de Aplicaciones Multiplataforma  <br />
      European Qualification Framework: EQ5
      <br />
      International Standard Classification of Education: ISCED5</div>
      
      <h3><a href="https://www.todofp.es/dam/jcr:3a2f6e25-6324-4ced-8c08-ca6f65927900/n-tsistemasmicroinformaticosredesen-pdf.pdf">
        IT Technician Studies</a>- 2014</h3>
      <h4>Educatec,Caceres, Spain</h4>
      <div>
        In Spain: Técnico en Sistemas Microinformáticos y Redes <br />
        
        International Standard Classification of Education: ISCED3</div>

      <h2>Courses and Certifications</h2>
      <h3> <a href="https://www.udemy.com/certificate/UC-OHE75YJE/">
      Unreal Engine C++ Developer: Learn C++ and Make Video Games</a>- 2019</h3>
      <h4> by Ben Tristem & Sam Pattuzzi on Udemy</h4>
      
      <h3><a href="/img/certificates/CCNA2.jpg">CCNA Discovery 2 : Working at a Small-to-Medium Business or ISP - 2013</a></h3>
      <h4>Cisco</h4>
      
      <h3><a href="/img/certificates/CCNA1.jpg">CCNA Discovery 1 : Networking for Home and Small Businesses - 2013</a></h3>
      <h4>Cisco</h4>

      <h3><a href="/img/certificates/Photoshop.jpg">Adobe Photoshop CS3 Course - 2013</a></h3>
      <h4>Grupo System</h4>

      <h2>Languages</h2>

      <h3>Spanish</h3>
      <div>Native Language</div>

      <h3>English</h3>
      <div>I lived and worked in England for 5 months at the end of 2017 and did bussiness with Czech People for almost 3 years with British Clients</div>


      <h2>Besides...</h2>
      <div>
        <h3>I 💚 IT tinkering</h3>
        <div>Since I was a child, I always loved tinkering with computers things, something as installing vintages OS, installing Ubuntu on an external HDD and booting from it, Install Gnome 2 in Mac OS X (XQuartz&MacPorts), doing cross/distributed compiling, I compiled a kernel for an integrated router
I am using Gentoo as my daily-driver OS which theoretically is one of the hardest OS to install and using a QEMU/KVM Setup with VGA Passthrough if I need something from Windows (mainly VR Stuff and Games with Anti-cheats). 
         <br/><br/>
        So, Yeah, I love Tinker IT Stuff</div>
        
        <h3>I ❤️ VideoGames</h3>
        <div> Some of my Favorites Videogames are: 
          <ul>
            <li>Atelier Saga (Specially Rorona Plus)</li>
            <li>Ace Attorney Saga (T&T my favourite)</li>
            <li>Another Code</li>
            <li>BeatSaber</li>
            <li>ID Software IP (old&new ones)</li> 
            <li>Metro Saga</li> 
            <li>Transistor</li>
            <li>Vanillaware Games (My Favourite: Odin Sphere)</li> 
            <li>Valve Games(HL, Portal, etc)</li>
            <li>Valkyria Chronicles Saga</li>
            <li>Zero Escape Saga</li> 
          </ul>
  <br/>
        
	So, I would say my game genre favourites: (Graphic) Adventure, JRPGs (especially cute ones), (No-Military) FPS, Rhythm and Beat em' up or Hack 'n' Slash Games. <br/><br/>
        I don't play a lot of Mobile Games/GaaS because of my huge backlog & lack of time (mainly developing games) but I always have installed Rhythm games like デレステ (deresute), ミリシタ(mirishita), Bandori, SB69:Fes A Live (69 in japanese is pronounced as ro-ku (rock)) </div>

        <h3>I 🧡 Anime/Manga/Akiba-kei</h3>
        <div>
        Some of my Anime Favorites: The Eccentric Family, Humanity Has Declined, Serial Experiments Lain, From the New World, Kids on the Slope, Idolm@ster. <br />
	
	Also I like normal TV Shows like: The Good Place, The Marvelous Mrs. Maisel.
   <br />
   (Sorry!, There is a big gap between my ratio of eastern:western tv shows watched)
	</div>
        <h3>I 💛 Music</h3>
        <div> 
                As I'm a guitarist (and a bit about Piano/Keyboard) I love so much musical improvisation and Music Arrangement,
        I don't have any preference, I like Classical Music, Jazz/Blues, Any Kind of Pop, Any kind of Rock/Metal of any era. <br/><br/>
        But I would say, Nowadays I listen to a lot of Videogames OST, AniSongs, Virtual Japanese Idols (I'm not meaning Vocaloid or Hatsune Miku but also I like it),
        Oh, yeah, I know I'm Spanish, But I don't like flamenco</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.notice {
    border:1px solid rgb(85, 0, 0);
    background-color: rgb(196, 144, 144);
    color: rgb(99, 1, 1);
    padding: 10px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>
