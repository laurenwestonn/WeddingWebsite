import React from 'react'
import line_bottom from '../../images/borders/line_bottom.png'

const storyEvents = [
    {
        date: "2012?",
        title: "First meeting",
        location: "Red Dead Redemption; PS3",
        description: "I stumbled upon two guys trying to glitch outside of the map and thought it looked interesting. I was suprised to find people online, getting along, and not shooting the brains out of each other. At the time I was too nervous to talk on the microphone, but we ended up adding each other anyway."
    },
    {
        date: "May? 2014",
        title: "First chat",
        location: "Grand Theft Auto; PS3",
        description: "Years later, we were paired into the same session online on the infamous GTA. I saw I had him added and was intrigued by his Manchester accent. Apparently, I drove by and shot him. From then on we started playing together regularly."
    },
    {
        date: "Summer 2014",
        title: "First real conversation",
        location: "Video calls, Snapchat",
        description: "We found each others company so much fun we nervously decided to talk outside of the Playstation. We'd video chat for hours every night. Was funny having to ask his name after all this time."
    },
    {
        date: "July 2014",
        title: "First meet up",
        location: "Heaton Park",
        description: "We finally decided to meet up in a place central to both of us. We had such a fun time climbing trees, performing wrestling rolls, rowing a boat. We stayed 'til sunfall. And we must've been nervous because we didn't eat a single thing."
    },
    {
        date: "8th October 2014",
        title: "We became official",
        location: "Circus",
        description: "After some time, I broke down Rob's walls around his heart enough for him to accept he'd fallen for me. He asked me to offically be his in a circus of all places! I wouldn't let go of him after he'd asked."
    },
    {
        date: "12th June 2015",
        title: "First holiday",
        location: "Gran Canaria; Hotel Paradise Lago Taurito",
        description: "First time we got to spend every single day of a week together. We loved every moment of it."
    },
    {
        date: "8th February 2018",
        title: "The Proposal",
        location: "Disneyland Paris; Fireworks show",
        description: "All holiday, Rob had nervously been carrying around my ring. There were a few telltale occurrances of what was to come, so Rob thought I'd known. But I had absolutely no idea... After watching the incredible fireworks show, Rob asked a member of staff to \"take a photo of us\" in front of the castle. We posed for the photo. He turned to me. Started declaring his love to me. Got down on his knee (yes, he got his knee wet in the snow!). And asked me to be his forever. It couldn't have been more perfect."
    },
    {
        date: "8th September 2018",
        title: "Moved in together",
        location: "Failsworth",
        description: "Rob had been doing up our 2 bedroom house while I had been away working in a summer camp in America, after graduation. It's a lovely starting house."
    }
]

function Timeline() {
    return (
    <div className="timeline">
        <div className="header">
            <h1 className="timeline-title">{'{'}Our Story{'}'}</h1>
            <div className="image-wrapper" >
                <img className="underline" src={line_bottom} alt="underline" aria="no"/>
            </div>
        </div>
        <div className="timeline-line" />
        {storyEvents.map((evt, index) => 
            <div className={`story-event ${index % 2 === 0 ? `left` : `right`}`} key={index}>
                <div className={`timeline-line ${index > 0 && `not-first`}`} />
                <div className="bullet-point" />
                <div className="date">{evt.date}</div>
                <div className="title">{evt.title}</div>
                <div className="location">{evt.location}</div>
                <div className="description">{evt.description}</div>
            </div>
        )}
    </div>
    )
}

export default Timeline