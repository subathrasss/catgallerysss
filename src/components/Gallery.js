import cat1 from '../images/cat1.jpg'
import cat2 from '../images/caty.jpg'
import cat3 from '../images/friends.jpg'
import cat4 from '../images/hi.jpg'
import cat5 from '../images/hifi.jpg'
import cat6 from '../images/pushycat.jpg'
import cat7 from '../images/sleepy.jpg'
import cat8 from '../images/cat1.jpg'
import cat9 from '../images/caty.jpg'
import cat10 from  '../images/friends.jpg'
import cat11 from '../images/hi.jpg'
import cat12 from '../images/pushycat.jpg'

import Photo from './Photo'

let gallerydata = [
    {
        img: cat1,
        reaction: " Surprise",
    },

    {
        img: cat2,
        reaction: "Fiery",
    },
    {
        img: cat3,
        reaction: "friendie",
    },
    {
        img: cat4,
        reaction: "Hifi",
    },
    {
        img: cat5,
        reaction: "guess what",
    },
    {
        img: cat6,
        reaction: "ya tell me",
    },
    {
        img: cat7,
        reaction: "gm",
    },
    {
        img: cat8,
        reaction: "surprise",
    },
    {
        img: cat9,
        reaction: "Fiery",
    },
    {
        img: cat10,
        reaction: "friendly",
    },
    {
        img: cat11,
        reaction: "Hifi",
    },
    {
        img: cat12,
        reaction: "ya tell me",
    }  
]


function Gallery() {
    return (
        <main className='mainbox'>
            <div className='box'>
                {
                    gallerydata.map(function (data) {
                        return <Photo pic={data.img} rec={data.reaction}></Photo>
                    })
                }
            </div>
        </main>
    )
}

export default Gallery