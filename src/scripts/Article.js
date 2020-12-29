export function getArticles(){

  return new Promise((resolve, reject) => {
      /**
       * newsapi no longer support non localhost request for free
       * change news api that is free even non localhost
       */
    
        // axios
        // .get("https://newsapi.org/v2/top-headlines?country=nz&apiKey=9d223797796543eb8e4ceb3fa511324b")
        // .then(response => {
        //   // create an array of articles only with relevant data
        //   const newArticles = response.data.articles.map(a => {
        //     return {
        //       author: a.author,
        //       content: a.content==null?'':a.content,
        //       description: a.description,
        //       publishedTime: a.publishedAt,
        //       title: a.title,
        //       siteUrl: a.url,
        //       imgUrl: a.urlToImage,
        //       active:false
        //     };
        //   });
        //   resolve(newArticles);
        //   return;
        // })
        // .catch(error => reject(error));
      resolve([
        {
          "author": null,
          "content": "Search and rescue volunteers have been called in to assist police in the search for for Mika Quinn who was reported missing on December 27.\r\n Quinn was last seen at her Lower Hutt address in Stokes V… [+822 chars]",
          "description": "Search and rescue volunteers have been called in to assist police looking for Mika Quinn​, who was last seen in Lower Hutt, before her car was found at a Wellington south coast beach.",
          "publishedTime": "2020-12-28T22:40:00Z",
          "title": "Search and rescue team helping look for missing woman Mika Quinn - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/national/123830948/search-and-rescue-team-helping-look-for-missing-woman-mika-quinn",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/o/g/image.related.StuffLandscapeSixteenByNine.1420x800.21q4kk.png/1609195219293.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "The man who died at the Hidden Valley Festival has been named.\r\nHe was Tuitu'u Junior Vaiangina, 29.\r\nEmergency services were called to the festival in Matakana, north of Auckland, after he suffered … [+617 chars]",
          "description": "Emergency services were called to the festival after he suffered a medical event.",
          "publishedTime": "2020-12-28T21:46:00Z",
          "title": "Hidden Valley death: Tuitu'u Junior Vaiangina named as man who died at Matakana music festival - New Zealand Herald",
          "siteUrl": "https://www.nzherald.co.nz/nz/hidden-valley-death-tuituu-junior-vaiangina-named-as-man-who-died-at-matakana-music-festival/7OZDOP7IR7L7FI4IIVHSKXQDVM/",
          "imgUrl": "https://www.nzherald.co.nz/resizer/G6HOMeO1i2-s-9iB_pt7LSREo1M=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/6NR5227US7LHYFB33BXILBF6GY.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "More than 190,000 ceiling fans sold at Home Depot are being recalled after reports that the blades fell off while spinning, hitting people and causing property damage.\r\n The Hampton Bay Mara indoor a… [+955 chars]",
          "description": "The ceiling fans are being recalled after reports that the blades fell off while spinning, hitting people and causing property damage.",
          "publishedTime": "2020-12-28T21:33:00Z",
          "title": "More than 190000 ceiling fans recalled after blades fly off in US - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/world/americas/300194553/more-than-190000-ceiling-fans-recalled-after-blades-fly-off-in-us",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/m/b/image.related.StuffLandscapeSixteenByNine.1420x800.4yq7ll.png/1609191236472.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "The ashes of James Doohan, who played Scotty on the original Star Trek, are reportedly hidden on the International Space Station.\r\n One of the first private astronauts to travel to the space station,… [+1503 chars]",
          "description": "The ashes of James Doohan, who played Scotty on the original Star Trek, are reportedly hidden on the International Space Station.",
          "publishedTime": "2020-12-28T21:24:00Z",
          "title": "Secret mission hid Star Trek actor James Doohan ashes on the International Space Station - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/entertainment/celebrities/300194539/secret-mission-hid-star-trek-actor-james-doohan-ashes-on-the-international-space-station",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/l/e/image.related.StuffLandscapeSixteenByNine.1420x800.4yq7l7.png/1609190877933.jpg",
          "active": false
        },
        {
          "author": "Jonathan Mitchell",
          "content": "By Jonathan Mitchell, of RNZ\r\nThe Government is being warned against introducing a pre-departure Covid-19 test for desperate New Zealanders attempting to get home from high-risk countries.\r\nYesterday… [+3533 chars]",
          "description": "Dr Siouxsie Wiles says requiring a pre-departure test may create unfair barriers.",
          "publishedTime": "2020-12-28T21:19:21Z",
          "title": "Covid 19 coronavirus: Government warned against pre-departure testing - New Zealand Herald",
          "siteUrl": "https://www.nzherald.co.nz/nz/covid-19-coronavirus-government-warned-against-pre-departure-testing/CXJWZVDZJ3NPJQGIEBQYPHDXCY/",
          "imgUrl": "https://www.nzherald.co.nz/resizer/R34kG-z0hjPpDJXjVfrIjTVj924=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/PIT6V5G3IJQFVX3XKURW4MZFMU.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "US police have released a video showing the moment an RV exploded in downtown Nashville on Christmas day, killing the vehicles occupant and injuring three others.\r\n Metro Nashville PD shared new surv… [+3610 chars]",
          "description": "The video shows a Nashville police officer walking about a block from the RV just seconds before it exploded.",
          "publishedTime": "2020-12-28T21:08:00Z",
          "title": "Police release video of Nashville Christmas day explosion - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/world/americas/300194521/police-release-video-of-nashville-christmas-day-explosion",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/l/g/image.related.StuffLandscapeSixteenByNine.1420x800.4yq7kp.png/1609190315754.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "A growing Covid-19 outbreak at Manchester City led to the postponement of their Premier League match against Everton and forced the team to close their training ground.\r\n Pep Guardiola's team had ann… [+7220 chars]",
          "description": "Outbreak within Man City postpones the match hours before kick-off, while Leicester and Chelsea are held to frustrating draws.",
          "publishedTime": "2020-12-28T20:40:00Z",
          "title": "Everton vs Man City postponed due to Covid-19 outbreak, Leicester, Chelsea held to draws - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/sport/football/world-game/300194448/everton-vs-man-city-postponed-due-to-covid19-outbreak-leicester-chelsea-held-to-draws",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/i/r/image.related.StuffLandscapeSixteenByNine.1420x800.4yq7io.png/1609189026619.jpg",
          "active": false
        },
        {
          "author": "Alanna Durkin Richer",
          "content": "\"Full House\" actor Lori Loughlin was released from prison Monday after spending two months behind bars for paying half a million dollars in bribes to get her two daughters into college.\r\nLoughlin was… [+2733 chars]",
          "description": "She spent two months in jail for paying $500k in bribes to get her daughter into school.",
          "publishedTime": "2020-12-28T19:29:43Z",
          "title": "College admissions scam: Full House actor Lori Loughlin released from prison - New Zealand Herald",
          "siteUrl": "https://www.nzherald.co.nz/entertainment/college-admissions-scam-full-house-actor-lori-loughlin-released-from-prison/OBYEA2US3CCICCLFVJT746G5ZE/",
          "imgUrl": "https://www.nzherald.co.nz/resizer/h-4Q9-9zAHkTd7vTKpGNPq0jCKw=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/LUTB7SU5SNXGNSUS7A4BBNRINY.jpg",
          "active": false
        },
        {
          "author": "Dan Colasimone",
          "content": "It's fast, largely pain-free and takes a huge contraceptive responsibility off women it's no wonder more and more men are choosing to get the snip, and especially so during the coronavirus pandemic.\r… [+8131 chars]",
          "description": "It's fast, largely pain-free and takes a huge contraceptive responsibility off women — it's no wonder more and more men are choosing to get the snip.",
          "publishedTime": "2020-12-28T18:51:00Z",
          "title": "More Australian men are getting vasectomies than ever before, despite some common myths enduring - ABC News",
          "siteUrl": "https://www.abc.net.au/news/2020-12-29/getting-a-vasectomy-myths-australia/12917746",
          "imgUrl": "https://www.abc.net.au/cm/rimage/12969422-16x9-large.jpg?v=2",
          "active": false
        },
        {
          "author": "Chelsea Boyle",
          "content": "One person has died following a two-vehicle collision in Pahiatua, bringing the holiday road toll to seven.\r\nPolice were notified of the crash on Nikau Rd at 4.58am.\r\nAnother person suffered serious … [+2241 chars]",
          "description": "Police were notified of the crash on Nikau Rd at 4.58am.",
          "publishedTime": "2020-12-28T18:45:12Z",
          "title": "Fatal Pahiatua crash brings holiday road toll to seven - New Zealand Herald",
          "siteUrl": "https://www.nzherald.co.nz/nz/fatal-pahiatua-crash-brings-holiday-road-toll-to-seven/KEZWD6TZTIRYYTX3V3MGSZB264/",
          "imgUrl": "https://www.nzherald.co.nz/resizer/gORDBOL0JAcr8GNgw47nlbvof0o=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/RNOP33UF5I6BLMRXWCDZRAPGXU.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "Eleven-test Kiwis forward Elijah Taylor has signed a two-year deal with English Super League club Salford just weeks after the New Zealand High Court ruled his former manager had misappropriated $400… [+3936 chars]",
          "description": "New contract in England a fillip for former Warriors favourite after financial setback and being cut by his NRL club.",
          "publishedTime": "2020-12-28T18:45:00Z",
          "title": "Former Kiwi Elijah Taylor joins Super League club after losing $400000 to manager - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/sport/league/123830834/former-kiwi-elijah-taylor-joins-super-league-club-after-losing-400000-to-manager",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/4/l/1/image.related.StuffLandscapeSixteenByNine.1420x800.21q4he.png/1609181149482.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "Faf du Plessis fell for 199 to miss out on a first career test double-century but that was the only disappointment for South Africa as they took complete control of the first test against a Sri Lanka… [+3640 chars]",
          "description": "South Africa star agonisingly misses out on first double century, but Sri Lanka have much greater issues with five players injured, three being ruled out for the test.",
          "publishedTime": "2020-12-28T18:32:00Z",
          "title": "South Africa vs Sri Lanka: Faf du Plessis out for 199 as Sri Lanka are crippled by injuries - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/sport/cricket/300194457/south-africa-vs-sri-lanka-faf-du-plessis-out-for-199-as-sri-lanka-are-crippled-by-injuries",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/j/a/image.related.StuffLandscapeSixteenByNine.1420x800.4yq7ix.png/1609180326886.jpg",
          "active": false
        },
        {
          "author": "Press Association 2020",
          "content": "Covid-19 cases recorded in a single day have risen above 40,000 for the first time, as Public Health England (PHE) warned “hospitals are at their most vulnerable”.\r\nThe Government said that, as of 9a… [+4957 chars]",
          "description": "The number of coronavirus patients receiving treatment is heading towards the April peak.",
          "publishedTime": "2020-12-28T18:11:00Z",
          "title": "Covid-19 cases top 40000 with hospitals 'at their most vulnerable' - Wimbledon Guardian",
          "siteUrl": "https://www.wimbledonguardian.co.uk/news/national/18973369.covid-19-cases-top-40-000-hospitals-at-vulnerable/",
          "imgUrl": "https://www.wimbledonguardian.co.uk/resources/images/12178039/",
          "active": false
        },
        {
          "author": "Bella Fowler and Lauren McMah",
          "content": "NSW Health has issued alerts for major shopping outlets and public transport routes in the heart of Sydney, amid concerns the city's Covid-19 outbreak will spread further.\r\nThe move comes as people w… [+3043 chars]",
          "description": "Nine people fined from northern Sydney who attended wedding in the CBD.",
          "publishedTime": "2020-12-28T18:04:07Z",
          "title": "Covid 19 coronavirus: Downtown Sydney on alert, wedding guests fined - New Zealand Herald",
          "siteUrl": "https://www.nzherald.co.nz/world/covid-19-coronavirus-downtown-sydney-on-alert-wedding-guests-fined/UUWSKQQDPJR62RTM5ZYBB6EFAU/",
          "imgUrl": "https://www.nzherald.co.nz/resizer/Get5e1NfXSn2LLDyDI7jzH2J_bY=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/X2T4IRZLGC7Q5XKQG3MTG46CE4.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "A man returning to New Zealand from the Pacific who was staying at a managed isolation facility in Auckland has died.\r\nActing deputy chief executive of managed isolation and quarantine (MIQ) Andrew M… [+503 chars]",
          "description": "The 63yo man died on Monday.",
          "publishedTime": "2020-12-28T17:46:20Z",
          "title": "Man dies at Auckland managed isolation facility - Newshub",
          "siteUrl": "https://www.newshub.co.nz/home/new-zealand/2020/12/man-dies-at-auckland-managed-isolation-facility.html",
          "imgUrl": "https://www.newshub.co.nz/home/new-zealand/2020/12/man-dies-at-auckland-managed-isolation-facility/_jcr_content/par/image.dynimg.1280.q75.jpg/v1609177575857/GOOGLEMAPS_MILLENIUM_GRAND_AUCK_1120.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "One of Donald Trump's favourite newspapers, The New York Post, has implored him to \"stop the insanity\" and move on from his election defeat in a blunt editorial.\r\nThe Post is one of the four major pa… [+5716 chars]",
          "description": "The Post endorsed Trump before the election. Now all that has changed.",
          "publishedTime": "2020-12-28T17:07:13Z",
          "title": "'Stop the insanity': New York Post slaps down Donald Trump - New Zealand Herald",
          "siteUrl": "https://www.nzherald.co.nz/world/stop-the-insanity-new-york-post-slaps-down-donald-trump/UY6FQ4LOZZE4LSBHR6JZ2FRIOI/",
          "imgUrl": "https://www.nzherald.co.nz/resizer/_MPxqVECeqQyFoBbia4wMULf5Gs=/1200x675/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/H33D6NVQ345WM3CSAFVOAKSJXY.jpg",
          "active": false
        },
        {
          "author": "Associated Press",
          "content": "LONDON: British hospitals are canceling non-urgent procedures and scrambling to find space for COVID-19 patients as coronavirus cases continue to surge despite tough new restrictions imposed to curb … [+3926 chars]",
          "description": "British authorities are blaming a new variant of the coronavirus for soaring infection rates in London and southeast England.",
          "publishedTime": "2020-12-28T16:57:00Z",
          "title": "British hospitals scramble for space as COVID-19 cases soar amid new variant concerns - The New Indian Express",
          "siteUrl": "https://www.newindianexpress.com/world/2020/dec/28/british-hospitals-scramble-for-space-as-covid-19-cases-soar-amid-new-variant-concerns-2242345.html",
          "imgUrl": "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/12/28/w600X390/london_AP.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "Wellingtonians spent less at the Boxing Day sales than last year, but an expert says bargain hunters may be waiting until more goods, disrupted by pandemic-induced supply chain issues, come into the … [+3767 chars]",
          "description": "Boxing Day spending was down by 5.8 per cent as people become more particular with what they spend their money on, a retail expert says.",
          "publishedTime": "2020-12-28T16:00:00Z",
          "title": "Wellingtonians spend less at Boxing Day sales - but bargain hunters may be waiting for new stock - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/business/123829811/wellingtonians-spend-less-at-boxing-day-sales--but-bargain-hunters-may-be-waiting-for-new-stock",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/h/m/image.related.StuffLandscapeSixteenByNine.1420x800.21q3oz.png/1609154362905.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "",
          "description": "Iran is set to begin human trials of its own coronavirus vaccine.A pharmaceutical company has been registering volunteers, following successful tests on anim...",
          "publishedTime": "2020-12-28T11:05:27Z",
          "title": "Iran: Human testing of COVID vaccine to begin after animal trials - Al Jazeera English",
          "siteUrl": "https://www.youtube.com/watch?v=SgPGsZ9Pc3s",
          "imgUrl": "https://i.ytimg.com/vi/SgPGsZ9Pc3s/maxresdefault.jpg",
          "active": false
        },
        {
          "author": null,
          "content": "Australia face a big challenge to avoid defeat in the second cricket test against India at the Melbourne Cricket Ground after the home side suffered another batting collapse on Monday's third day of … [+3137 chars]",
          "description": "Rahane and Jadeja lifted India to a strong position, and their bowlers rammed home the advantage on a dominant third day.",
          "publishedTime": "2020-12-28T07:31:00Z",
          "title": "Australia vs India: Visitors move in for the kill at the MCG as Aussie top order collapses again - Stuff.co.nz",
          "siteUrl": "https://www.stuff.co.nz/sport/cricket/123828640/australia-vs-india-visitors-move-in-for-the-kill-at-the-mcg-as-aussie-top-order-collapses-again",
          "imgUrl": "https://resources.stuff.co.nz/content/dam/images/4/y/q/7/i/g/image.related.StuffLandscapeSixteenByNine.1420x800.21q2sg.png/1609140675262.jpg",
          "active": false
        }
      ]);
    });

}

