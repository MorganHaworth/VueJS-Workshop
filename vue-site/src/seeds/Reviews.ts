import Review from "@/interfaces/ReviewInterface";

const initialReviews: Array<Review> = [
    {
        name: 'Amy S.',
        numStars: 5,
        reviewContent: 'Best place ever! I\'ve never been to such a clean establishment. The location is perfect too.',
        id: 1
    },
    {
        name: 'Naomi Q.',
        numStars: 4,
        reviewContent: 'This restaurant has amazing food. I could talk for hours about how respectful the staff is. I just wish the food was done sooner.',
        id: 2
    },
    {
        name: 'Jonathan B.',
        numStars: 5,
        reviewContent: 'I would eat here everyday if I lived close enough. It\'s affordable and delicious!!',
        id: 3
    }
]

export default initialReviews;