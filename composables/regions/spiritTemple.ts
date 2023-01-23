import {LocationTypes, Tags} from "../constants";

export const spiritTemple = {
    name: "Spirit Temple",
    bgColor: 'bg-amber-600',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Child side, left room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Child side, right room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Child side, sun room (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Main statue room, center torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Main statue room, lullaby hand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Main statue room, lullaby upper",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Sun block room, torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Silver Gauntlet chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Adult side, lullaby room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Adult side, boulder room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Adult side, mirror room (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Adult side, sun switch room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Hallway (2 invisible)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Mirror shield chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Boss key room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Mirror room",
            description: "Shine light onto the sun to spawn the chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },  
        {
            title: "Twinrova",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Child side, right room, on fence",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Child side, sun switch room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Hall before child side iron knuckles",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Main statue room, left upper ledge",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Adult side, boulder room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        

        // rupees and hearts
        {
            title: "Shifting walls climb (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // crates
        {
            title: "Before child climb (4)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.vanilla]
        },
        
        // pots
        {
            title: "Lobby (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Flying pot in bridge room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla, Tags.child]
        },
        {
            title: "Anubis room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla, Tags.child]
        },
        {
            title: "Child climb room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Before child iron knuckle (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Adult climb flying pots (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Main statue room, flying pots (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Beamos hallway",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Mirror room, flying pots (6)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },

        // MQ
        // items
        {
            title: "Entrance, free chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Entrance, switch chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Entrance, eye switch chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Entrance, adult side, silver rupees",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Child side, left room, free chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Child side, left room, kill enemies",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Child side, hammer switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Child side, sun room, kill enemies",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Child side, sun room, on pillar",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Silver block hallway, eye switch",
            description: "This is accessed as child, use din's fire on the frozen eye switch to access the hallway, the eye switch is hidden in the pit",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Main statue room, eye switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Main statue room, lullaby chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Main statue room, upper right ledge",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Sun block room chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Silver gauntlet chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Song of time block puzzle room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Before mirror chest, free chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Before mirror chest, sun room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Mirror shield chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Adult side, lullaby room, leevers",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Adult side, song room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Mirror room, invisible chest by bars",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Twinrova",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Sun block room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Adult side, lullaby room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Adult side, room after song room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Iron knuckle room (2 skulltulas)",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // rupees
        {
            title: "Child side (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq, Tags.child]
        },

        // crates
        {
            title: "Main statue room (2)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Big mirror (4)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq, Tags.adult]
        },

        // pots
        {
            title: "Lobby (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Child, torch slug",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq, Tags.child]
        },
        {
            title: "Child, gibdo room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq, Tags.child]
        },
        {
            title: "Child, stalfos room (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq, Tags.child]
        },
        {
            title: "Child climb",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Main statue room, floor (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Main statue room, top left (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Sun block room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Adult descent (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq, Tags.adult]
        },
        {
            title: "After shifting walls (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq, Tags.adult]
        },
        {
            title: "Big mirror (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq, Tags.adult]
        },

    ]
};