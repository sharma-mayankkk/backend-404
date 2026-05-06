import express from 'express';
const app = express();

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send("Server is ready...")
// })

//list of 5 jokes :
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Programmer Humor",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs."
        },
        {
            id: 2,
            title: "Debugging Life",
            joke: "I told my code to stop working… but it just kept throwing exceptions."
        },
        {
            id: 3,
            title: "Array Logic",
            joke: "Why did the array break up? Because it found someone better indexed."
        },
        {
            id: 4,
            title: "Frontend vs Backend",
            joke: "Frontend and Backend walked into a bar… the backend handled the request, the frontend showed the response."
        },
        {
            id: 5,
            title: "JavaScript Truth",
            joke: "Why is JavaScript so weird? Because null is an object and NaN is a number."
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`)
})