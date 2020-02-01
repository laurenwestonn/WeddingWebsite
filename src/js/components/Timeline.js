import React from 'react'
import line_bottom from '../../images/borders/line_bottom.png'

const storyEvents = [
    {
        date: "2012?",
        title: "First meeting",
        location: "Red Dead Redemption; PS3",
        description: "They first met on the game Red Dead Redemption when Rob was trying to do a glitch on the game with one of his friends. Lauren thought it looked interesting so went over to join in the fun. At the time she was too nervous to talk on the microphone so they never actaully spoke but they ended up adding each other anyway."
    },
    {
        date: "May? 2014",
        title: "First chat",
        location: "Grand Theft Auto; PS3",
        description: "Years later, they were paired into the same online session on the infamous Grand Theft Auto 5. Lauren saw Rob's name on the list of players, saw that he was also on her friend's list and was intrigued by his Manchester accent. So she drove over to his character, aimed her gun at him and driveby killed him dead on the spot. What an ice breaker! From then on they started playing together regularly and talking all the time online."
    },
    {
        date: "Summer 2014",
        title: "First real conversation",
        location: "Video calls, Snapchat",
        description: "They found each others company so much fun they nervously decided to talk outside of the Playstation. They'd video chat for hours every night. It was funny that they'd been talking for so long and Lauren still didn't know Rob's real name, only his account name on the playstation."
    },
    {
        date: "July 2014",
        title: "First meet up",
        location: "Heaton Park",
        description: "They finally decided to meet up in a place central to them both. They had such a fun time climbing trees, performing wrestling rolls, rowing a boat. They stayed 'til sunfall and clearly must've been nervous because they didn't eat a single thing all day."
    },
    {
        date: "8th October 2014",
        title: "We became official",
        location: "Circus",
        description: "After some time, Lauren managed to break down Rob's walls around his heart enough for him to accept that he'd fallen for her. He asked her to offically be his in a circus of all places! Lauren wouldn't let go of him after he'd asked."
    },
    {
        date: "12th June 2015",
        title: "First holiday",
        location: "Gran Canaria; Hotel Paradise Lago Taurito",
        description: "First time they got to spend every single day of a week together and loved every moment of it."
    },
    {
        date: "8th February 2018",
        title: "The Proposal",
        location: "Disneyland Paris; Fireworks show",
        description: "All holiday, Rob had nervously been carrying around Lauren's ring. There were a few telltale occurrances of what was to come, so Rob thought the surprise had been ruined. But luckily Lauren had absolutely no idea... After watching the incredible fireworks show, Rob asked a member of staff to \"take a photo of us\" in front of the castle. They posed for the photo, he then turned to her, started declaring his love, got down on his knee (he even got his knee wet in the snow!) and asked Lauren to be his forever. It couldn't have been more perfect."
    },
    {
        date: "8th September 2018",
        title: "Moved in together",
        location: "Failsworth",
        description: "Rob had been doing up their 2 bedroom house while Lauren had been away working at a summer camp in America, after graduation. It's a lovely starting house."
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