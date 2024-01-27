const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/palm.jpg",
        post: "images/ocean.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const first_post = posts[0];
const placement_post = document.getElementById("post")
placement_post.innerHTML = `
    <header class = "top">
        <h1 class = "oldagram">Oldagram</h1>
        <img src = "images/pfp.jpeg" alt = "pfp" class = "pfp">
    </header>
    <hr>

    <main>
        <section class = "container">
            <img src = "${first_post.avatar}" alt = "avatar" class = "avatar" />
            <h1>${first_post.name}</h1>
            <p class = "location">${first_post.location}</p>
            <img src = "${first_post.post}" class = "post"/>
            
        </section>

    </main>

`
