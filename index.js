$(function() {
$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});
});

 window.addEventListener('load', async () => { 
             const GITHUB_USERNAME = 'YatinGupta777'; 
             const COMMITS_CONTAINER = '#githubCommits'; 
             const LANGUAGES_CONTAINER = '#githubLanguages'; 
  
             const githubStats = await GithubStats(GITHUB_USERNAME); 
  
             let githubCommits = document.querySelector(COMMITS_CONTAINER); 
             /* Render SVG for commit contributions */ 
             let commitsContribSVG = githubStats.commitsContribSVG({ 
                 rows: 7, 
                 space: 4, 
                 rectWidth: 16, 
                 levelColors: [ 
                     { 
                         minCommits: 0, 
                         color: '#ebedf0' 
                     }, 
                     { 
                         minCommits: 1, 
                         color: '#c6e48b' 
                     }, 
                     { 
                         minCommits: 9, 
                         color: '#7bc96f' 
                     }, 
                     { 
                         minCommits: 17, 
                         color: '#239a3b' 
                     }, 
                     { 
                         minCommits: 26, 
                         color: '#196127' 
                     } 
                 ] 
             }); 
             githubCommits.appendChild(commitsContribSVG); 
  
             let githubLanguageDistribution = document.querySelector(LANGUAGES_CONTAINER); 
             /* Render SVG for language contributions */ 
             let languageContribSVG = githubStats.languagesContribSVG({ 
                 barHeight: 20, 
                 barWidth: githubLanguageDistribution.offsetWidth, 
                 lineSpacing: 4, 
                 languageNameWidth: 100, 
                 fontSize: 14 
             }); 
             githubLanguageDistribution.appendChild(languageContribSVG); 
         }); 