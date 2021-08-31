import React from 'react'
import './WebHome.css'

function WebHome() {
    const images=[{
        name: 'Ahana',
        url: 'https://www.finetoshine.com/wp-content/uploads/2020/06/Piyanka-Mongia-Wallpapers-Pictures-Images-Photos-1.jpg'

    },{
        name: 'Shradha',
        url: 'https://www.aktend.com/wp-content/uploads/2019/10/Shivani-Narayanan-232.jpg'
    },{
        name: 'Claire',
        url: 'https://i2.wp.com/www.hindishayaricollections.com/wp-content/uploads/2019/09/Jannat-Zubair-Images-96-e1576689171969.jpg?fit=533%2C602&ssl=1'
    },{
        name: 'Tony',
        url: 'https://i1.wp.com/godofindia.com/wp-content/uploads/2017/05/vijay-22.jpg'
    },{
        name: 'Priyanka',
        url: 'https://cdn.mygodimages.com/mygodimg/preview/cute-rashmika-mandanna-saree-images-photos-11604909604kpc5riwjyi.jpg'
    },{
        name: 'Steve',
        url: 'https://www.imagediamond.com/blog/wp-content/uploads/2020/04/atif-aslam-images-2.jpg'
    },{
        name: 'Neha',
        url: 'https://files.oyebesmartest.com/uploads/preview/jannat-zubair-beautiful-hd-images---photos-wall0752ceo.jpg'
    },{
        name: 'Bucky',
        url: 'https://www.finetoshine.com/wp-content/uploads/2020/01/Riyaz-Aly-Wallpapers-New_-Pictures-Images-Photos.jpg'
    },{
        name: 'Peter',
        url: 'https://dotlocal.org/wp-content/uploads/2020/04/Sam-Narula-19-4.jpg'
    }
    ]
    const banners =[
        'https://cdn.dribbble.com/users/4816549/screenshots/14725534/media/9186cf9b1ec866ae22d5a96ea9dc189d.jpg?compress=1&resize=400x300',
        'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/5IafOqNJ2I1xD1SRTFN2O/c6d46937e3f0d6c0b67c04db0e9f5fe0/1_Cakes-Business-Facebook-Banner-1024x390.png?w=800&q=70',
        'https://i.pinimg.com/originals/3a/17/37/3a1737505dda077e4599be0b0e2d35d2.jpg',
        'https://iamfearlesssoul.com/wp-content/uploads/2016/11/facebook-SOUL-inspirational-cover-hgiher-M.jpg'
    ]
    const mostWatched=[
        {
            image: 'https://images.ctfassets.net/3s5io6mnxfqz/5ZHWhb7IZYugQE6g9AiAb3/82664bc995fc0694d2ab2734d841c695/AdobeStock_266317440.jpeg?fm=jpg&w=900&fl=progressive',
            heading: 'Prepare for your first skateboard jump',
            name: 'Jordon Wise',
            views: '125,908',
            lastUpdated: '2 days'
        },{
            image: 'https://programminglibrarian.org/sites/default/files/resized_oliwier-gesla-631085-unsplash.jpg',
            heading: 'Learn to Skateboard: Partnering for Health and Exercise',
            name: 'Jordon Wise',
            views: '125,908',
            lastUpdated: '2 days'
        },{
            image: 'https://programminglibrarian.org/sites/default/files/resized_oliwier-gesla-631085-unsplash.jpg',
            heading: 'Learn to Skateboard: Partnering for Health and Exercise',
            name: 'Jordon Wise',
            views: '125,908',
            lastUpdated: '2 days'
        },{
            image: 'https://programminglibrarian.org/sites/default/files/resized_oliwier-gesla-631085-unsplash.jpg',
            heading: 'Learn to Skateboard: Partnering for Health and Exercise',
            name: 'Jordon Wise',
            views: '125,908',
            lastUpdated: '2 days'
        },
    ]
    return (
        <div className="WebHomeContainer">
            <div className="EachSecond1">
                {
                    images.map((card,i)=>(
                        <div key={i} className="EachChildSecond1">
                            <div style={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
                                <img className="images1" src={card.url} alt="" />
                                <p style={{color:'gray'}}>{card.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="EachSecond1">
                {
                    banners.map((card,i)=>(
                        <div key={i} className="child2second">
                            <img className="bannerImagesWeb" src={card} alt="" />
                        </div>
                    ))
                }
            </div>
            <h2 style={{marginLeft:'30px',color:'white'}}>Most Watched</h2>
            <div className="EachSecond1">
                {
                    mostWatched.map((card,i)=>(
                        <div key={i} className="MostWatchedWebContainer">
                            <img className="MostWatchedWebImages" src={card.image} alt="" />
                            <div className="MostWatchedWebDetails">
                                <p className="WebHeading">{card.heading}</p>
                                <p style={{color:'gray',fontSize:'15px'}}>{card.name}</p>
                                <p style={{color:'gray',fontSize:'15px',marginTop:'-12px'}}>{card.views} views <srong>∙</srong> {card.lastUpdated} ago</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="EachSecond1">
                {
                    mostWatched.map((card,i)=>(
                        <div key={i} className="MostWatchedWebContainer">
                            <img className="MostWatchedWebImages" src={card.image} alt="" />
                            <div className="MostWatchedWebDetails">
                                <p className="WebHeading">{card.heading}</p>
                                <p style={{color:'gray',fontSize:'15px'}}>{card.name}</p>
                                <p style={{color:'gray',fontSize:'15px',marginTop:'-12px'}}>{card.views} views <srong>∙</srong> {card.lastUpdated} ago</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WebHome
