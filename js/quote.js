// Array of quotes

let quotes = [
    {
        quote: "The world is indeed comic, but the joke is on mankind."
    },
    {
        quote: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown."
    },
    {
        quote: "Almost nobody dances sober, unless they happen to be insane."
    },
    {
        quote: "From even the greatest of horrors irony is seldom absent."
    },
    {
        quote: "That is not dead which can eternal lie, and with strange aeons even death may die."
    },
    {
        quote: "I know always that I am an outsider; a stranger in this century and among those who are still men."
    },
    {
        quote: "I never ask a man what his business is, for it never interests me. What I ask him about are his thoughts and dreams."
    },
    {
        quote: "The crude human animal is in-eradicably superstitious, and there is every biological reason why they should be."
    },
    {
        quote: "Creative minds are uneven, and the best of fabrics have their dull spots."
    },
    {
        quote: "We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far."
    },
    {
        quote: "Ultimate horror often paralyses memory in a merciful way."
    },
    {
        quote: "The oldest and strongest emotion of mankind is to fear that which is unknown."
    },
    {
        quote: "To be bitter is to attribute intent and personality to the formless, infinite, unchanging and unchangeable void. We drift on a chartless, resistless sea. Let us sing when we can, and forget the rest..."
    },
    {
        quote: "Pleasure to me is wonder—the unexplored, the unexpected, the thing that is hidden and the changeless thing that lurks behind superficial mutability."
    },
    {
        quote: "I couldn't live a week without a private library - indeed, I'd part with all my furniture and squat and sleep on the floor before I'd let go of the 1500 or so books I possess."
    },
    {
        quote: "It is good to be a cynic — it is better to be a contented cat — and it is best not to exist at all."
    },
    {
        quote: "I have seen the dark universe yawning; where the black planets roll without aim, where they roll in their horror unheeded... Without knowledge, or lustre, or name."
    },
    {
        quote: "At night, when the objective world has slunk back into its cavern and left dreamers to their own, there come inspirations and capabilities impossible at any less magical and quiet hour. No one knows whether or not he is a writer unless he has tried writing at night."
    },
    {
        quote: "What do we know ... of the world and the universe about us? Our means of receiving impressions are absurdly few, and our notions of surrounding objects infinitely narrow. We see things only as we are constructed to see them, and can gain no idea of their absolute nature."
    },
    {
        quote: "Ocean is more ancient than the mountains, and freighted with the memories and the dreams of time."
    },
];

// Event

const $quoteBtn = $('#quoteBtn');

$quoteBtn.click(function() {
    let number = Math.floor(Math.random() * quotes.length);

    $('#hpl-quote').html(quotes[number].quote)
});
