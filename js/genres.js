var genres = [
    {
        genre: "country"
        , title: "Country Slinger"
        , no: 0
        , doc: {
            title: "Johnny Cash at San Quentin"
            , img: "country_document.jpg"
            , desc: "Johnny Cash at San Quentin was craaaazzzyyy"
        }
        , video: {
            title: "Cash Behind Bars"
            , link: "https://www.youtube.com/embed/T7zSstHWRAs"
            , desc: " take a peak at this rare footage of country crooner, Johnny Cash, performing for the inmates at infamous San Quentin prison"
        }
        , gallery: {
            title: " It’s Dolly’s World"
            , desc: " go through this visual timeline of country legend Dolly Parton and how she’s sustained 5 decades in the music industry."
            , photos: ["media/country_photo01.jpg", "media/country_photo02.jpg", "media/country_photo03.jpg", "media/country_photo04.jpg"]
        }
}, {
        genre: "metal"
        , title: "Headbanger"
        , no: 1
        , doc: {
            title: "Metal Addiction"
            , img: "metal_document.jpg"
            , desc: "In 2007, a Swedish man had his heavy metal addiction classified as a disability, and was given financial benefits and allowed time off work to go to metal gigs. He went to 300 gigs per year."
        }
        , video: {
            title: "Led Zeppelin, or The Nobs?"
            , link: "https://www.youtube.com/embed/bheNgUIvBNc"
            , desc: "Led Zeppelin performed in Denmark under the name 'The Nobs' because Eva von Zeppelin, granddaughter of the inventor of Zeppelin airships, threatened to sue them otherwise for tarnishing the family name."
        }
        , gallery: {
            title: "The Black Sabbath self-titled debut album cover"
            , desc: "The album cover was photographed by Keith MacMillan (aka Marcus Keef) using technique called ‘false colour photography’ which makes green colours appear pink as well as other distinctive changes to conventional ‘true colour’ photography."
            , photos: ["media/metal_photo01.jpg", "media/metal_photo02.jpg", "media/metal_photo03.jpg", "media/metal_photo04.jpg"]
        }
}, {
        genre: "EDM"
        , title: "Mix Master"
        , no: 2
        , doc: {
            title: "Solveig Brand Headbands"
            , img: "edm_document.jpg"
            , desc: "Famous DJ, Martin Solveig, has a company make several hundred headbands each tour so he never wears the same one"
        }
        , video: {
            title: "Radioactive Rarity"
            , link: "https://www.youtube.com/embed/X5KZR29Zz4Q"
            , desc: "Give this rare performance of Kraftwerk from French TV in 1978 performing their song Radioactivity"
        }
        , gallery: {
            title: "Daft Punked"
            , desc: "Scroll through this collection of the amazing pieces of technology that are Daft Punk’s helmets throughout the years"
            , photos: ["media/edm_photo01.jpg", "media/edm_photo02.jpg", "media/edm_photo03.jpg"]
        }
}, {
        genre: "pop"
        , title: "Pop Princess"
        , no: 3
        , doc: {
            title: "She Files Taxes?"
            , img: "pop_document.jpg"
            , desc: "Scan your way through one of Madonna’s old signed tax return forms.  yes, even Madonna has to pay taxes"
        }
        , video: {
            title: "The Stardust"
            , link: "https://www.youtube.com/embed/dLYafk0Lui0"
            , desc: "David Bowie is a great performer.  Watch some of his classic performances as the Stardust continues to shine on."
        }
        , gallery: {
            title: "Prince of Pop"
            , desc: "Michael Jackson is hands down a pop icon.  Take a look through some of the most legendary looks and styles from his illustrious career."
            , photos: ["media/pop_photo01.jpg", "media/pop_photo02.jpg", "media/pop_photo03.jpg"]
        }
}, {
        genre: "soul"
        , title: "Soulful Songstress"
        , no: 4
        , doc: {
            title: "An SNL Wonder"
            , img: "soul_document.jpg"
            , desc: "This is a special contract signed by soul icon, Stevie Wonder, when he was scheduled to host and perform at SNL in 1983"
        }
        , video: {
            title: "FRANK"
            , link: "https://www.youtube.com/embed/VOOPVQtuuh0"
            , desc: "Enjoy this look at a rare commercial Amy Winehouse recorded for her first studio album, Frank, from 2003"
        }
        , gallery: {
            title: "Aretha & A Chapeau"
            , desc: "Have a look through some of the Aretha Franklin’s classic looks and her favorite accessory, a haute couture ha"
            , photos: ["media/soul_photo01.jpg", "media/soul_photo02.jpg", "media/soul_photo03.jpg"]
        }
}, {
        genre: "punk"
        , title: ""
        , no: 5
        , doc: {
            title: "Iggy"
            , img: "punk_document.jpg"
            , desc: "Born James Jewell Osterberg, Jr., the name Iggy Pop came about when his bandmates found out that he was in a high school garage band, ‘The Iguanas’"
        }
        , video: {
            title: "The Ramones Speak"
            , link: "https://www.youtube.com/embed/C4yT59oosxo"
            , desc: "Take a look at iconic punk duo, The Ramones, as they gave an exclusive interview during their tour of Australia in 1980"
        }
        , gallery: {
            title: "A Boy & His Guitar"
            , desc: "Green Day frontman, Billie Joe Armstrong, has always had a great love for his first guitar, ‘Blue’, which his mother gift to him for his 11th birthday"
            , photos: ["media/punk_photo01.jpg", "media/punk_photo02.jpg", "media/punk_photo03.jpg"]
        }
}, {
        genre: "disco"
        , title: ""
        , no: 6
        , doc: {
            title: "Marvin on the Move"
            , img: "disco_document.jpg"
            , desc: "Take a peek inside the life of singer, Marvin Gaye, with a rare scan of his official passport from the mid-60’s"
        }
        , video: {
            title: "ABBA Ido"
            , link: "https://www.youtube.com/embed/3FsVeMz1F5c"
            , desc: "Take a look at this performance from when Swedish disco group, ABBA, competed in the 1974 Eurovision song contest"
        }
        , gallery: {
            title: "The Supreme Diva"
            , desc: "Look at these rare photos of the ultimate boss, Diana Ross, through her time with the Supremes to her solo career"
            , photos: ["media/disco_photo01.jpg", "media/disco_photo02.jpg", "media/disco_photo03.jpg"]
        }
}, {
        genre: "rap"
        , title: ""
        , no: 7
        , doc: {
            title: "Love, Tupac"
            , img: "punk_document.jpg"
            , desc: "have a read through this rare letter from rap icon, Tupac Shakur, to his high school crush, who he calls Beethoven - for her impressive piano skills"
        }
        , video: {
            title: "Pablo Flushed Away"
            , link: "https://www.youtube.com/embed/4mKePTjq9ns"
            , desc: "Kanye’s recent album, the Life of Pablo, might have hit shelves sooner, had baby North West, not flushed Kanye West’s iPhone down the toilet"
        }
        , gallery: {
            title: "WuTang for Life"
            , desc: "Go through these rare photos of some of the legendary members of the WuTang Clan during the early 90’s"
            , photos: ["media/rap_photo01.jpg", "media/rap_photo02.jpg", "media/rap_photo03.jpg"]
        }
}, {
        genre: "rock"
        , title: ""
        , no: 8
        , doc: {
            title: "Paging Thom"
            , img: "rock_document.jpg"
            , desc: "Born James Jewell Osterberg, Jr., punk icon Iggy Pop was given the name from his bandmates after playing in a high school band, ‘The Iguanas’"
        }
        , video: {
            title: "Help! Behind the Scenes"
            , link: "https://www.youtube.com/embed/PQYnOR_EoAc"
            , desc: "Rare backstage footage of the famous rock band The Beatles as they record for their hit album Help!"
        }
        , gallery: {
            title: "A Boy & His Guitar"
            , desc: "Take a look at some exclusive images of Billie Joe Armstrong and  his first guitar, ‘Blue’, which his mother gave him at age 11"
            , photos: ["media/rock_photo01.jpg", "media/_photo02.jpg", "media/rock_photo03.jpg"]
        }
}, {
        genre: "indie"
        , title: ""
        , no: 9
        , doc: {
            title: "Call Me Iggy"
            , img: "indie_document.jpg"
            , desc: "From the cover of Radiohead’s ‘Airbag’ EP was actually the number of Thom Yorke’s old pager, which fans dialed to get a special message from the singer."
        }
        , video: {
            title: "Creep for MTV"
            , link: "https://www.youtube.com/embed/bfCc7PFQ-Fw"
            , desc: "Enjoy this rare footage of Radiohead performing their well-known hit, Creep, at an MTV Music Festival in 1994"
        }
        , gallery: {
            title: "Behind The Strokes"
            , desc: "Take a view into the world of The Strokes and their lives as they toured and performed during the early 2000’"
            , photos: ["media/indie_photo01.jpg", "media/indie_photo02.jpg", "media/indie_photo03.jpg"]
        }
}
];
var questions = [
    {
        genre: "country"
        , title: "Country Slinger"
        , no: 0
    }, {
        genre: "metal"
        , title: "Headbanger"
        , no: 1
    }, {
        genre: "EDM"
        , title: "Mix Master"
        , no: 2
    }, {
        genre: "pop"
        , title: "Pop Princess"
        , no: 3

    }, {
        genre: "soul"
        , title: "Soulful Songstress"
        , no: 4

    }

];