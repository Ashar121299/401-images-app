import React, {useState} from 'react';
import Images from './images';


function Page() {

    let [totalNumOfLikes, setTotalNumOfLikes] = useState(0);

    const incrementTotalLikes = () => {
        setTotalNumOfLikes(totalNumOfLikes+1)
    }
    return(
        <>
          <h1>List of images</h1>
          <h2>Total Num of Likes : {totalNumOfLikes }</h2>
          <Images 
            title ="nature1"
            imgPath="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"
            increment={incrementTotalLikes}
          />
          <Images 
            title ="nature2"
            imgPath="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
            increment={incrementTotalLikes}
          />
          <Images 
            title ="nature3"
            imgPath="https://wallpapercave.com/wp/u9AVLry.jpg"
            increment={incrementTotalLikes}
          />
        </>
    )
}

export default Page;