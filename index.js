console.log("hii");

const data = [
    {
        name: 'Mario',
        age: 18,
        city: 'London',
        language: 'C++',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Simit',
        age: 18,
        city: 'America',
        language: 'Javascript',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Jack',
        age: 18,
        city: 'Australia',
        language: 'Python',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Mario',
        age: 18,
        city: ' New York',
        language: 'Ruby',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        name: 'John',
        age: 18,
        city: 'Bangalore',
        language: 'Linux',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    }
]

function cvIterator(profiles) {
    let netIndex = 0;
    return {
        next: function () {
            return netIndex < profiles.length ?
                { value: profiles[netIndex++], done: false } :
                { done: true }
        }
    };
}
const candidates = cvIterator(data);

nextCv();
//Button Next
const next = document.getElementById('next');
next.addEventListener('click', nextCv);


function nextCv() {
    const currentCadidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCadidate != undefined){
    image.innerHTML = `<img src="${currentCadidate.image}" alt="">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name:${currentCadidate.name}</li>
    <li class="list-group-item">${currentCadidate.age} year old</li>
    <li class="list-group-item">From: ${currentCadidate.city}</li>
    <li class="list-group-item">Language: ${currentCadidate.language}</li>
  </ul>`
    }
    else{
        alert("End Of Applications")
        window.location.reload();
    }
}