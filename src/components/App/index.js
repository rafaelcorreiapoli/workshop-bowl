import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ListView
} from 'react-native'
import VideoGallery from '../GridList'




export default class App extends React.Component {
  constructor(props) {
    super(props)

    const videos = [{"_id":"58bd967d6228f60ddc1b4ad6","commentsCount":"0","description":"The Put It In The Bowl crew from Canada got busy in the streets of Kamloops, BC! \n\nFeaturing: Geremy Guido, Bryce Bugera, Teilhard Volk, Aiden Hryciw, Tommy Van, Mathew Wonbon, and Kyle Palamar\n\nFilm and edit: Liam Hall\nAdditional film: Corey Kowalski and Johan Rosén","has_commented":false,"hasLiked":false,"likesCount":"1","title":"Put It In The Bowl – PIITBvid","postDate":"2017-03-06T17:04:22.464Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/eAJRPeOxpCg/0.jpg","videoUrl":"eAJRPeOxpCg","views":"1"},
    {"_id":"58bed2686228f60ddc1b4b55","commentsCount":"0","description":"Featuring: Kim Boberg\n\nPresented by: Monster Energy\nFilmed and edited by: Andreas Olofsson\nAdditional Filming by: Corey Stanton and Martin Axell","has_commented":false,"hasLiked":false,"likesCount":"0","title":"Kimbo Sessions","postDate":"2017-03-07T15:31:06.665Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621680370_640.jpg","videoUrl":"206560240","views":"2"},
    {"_id":"58bdc2df6228f60ddc1b4aea","commentsCount":"1","description":"The rain at Manly Beach in Australia couldn’t stop the ripping at the first stop of the 2017 Vans Park Series. Everyone was on fire, but it was Tom Schaar that was on top from qualifiers all the way through to the Final.\n\nFeaturing: Tom Schaar, Curren Caples, Murilo Peres, Pedro Barros, Grant Taylor, Ben Hatchell, Greyson Fletcher, Chris Russell and much more.","has_commented":false,"hasLiked":false,"likesCount":"5","title":"2017 Vans Park Series Australia - Highlights","postDate":"2017-03-06T20:12:37.551Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/uz2tGbuYR4A/0.jpg","videoUrl":"uz2tGbuYR4A","views":"8"},
    {"_id":"58be0aec6228f60ddc1b4b12","commentsCount":"2","description":"Five Riders.\n\nOne run each through the Burton Stash in Avoriaz.\n\nFirst up, Andy Nudds.","has_commented":false,"hasLiked":false,"likesCount":"3","title":"STASH RUNS - Andy Nudds","postDate":"2017-03-07T01:19:38.189Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/LA79R_jyvEo/0.jpg","videoUrl":"LA79R_jyvEo","views":"4"},
    {"_id":"58becdfc6228f60ddc1b4b53","commentsCount":"0","description":"“Brindle Collective documents Tom Karangelov, Marquise Henry, Marius Syvanen, Anthony Schultz, and Axel Cruysberghs in our new film, Sankhara, as they make their way through Asia to skate the contrasting backdrops of Seoul, Hong Kong, and Tokyo.” – New Balance Numeric","has_commented":false,"hasLiked":false,"likesCount":"3","title":"Sankhara","postDate":"2017-03-07T15:12:17.961Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621776657_640.jpg","videoUrl":"206651331","views":"3"},
    {"_id":"58bd967d6228f60ddc1b4ad6","commentsCount":"0","description":"The Put It In The Bowl crew from Canada got busy in the streets of Kamloops, BC! \n\nFeaturing: Geremy Guido, Bryce Bugera, Teilhard Volk, Aiden Hryciw, Tommy Van, Mathew Wonbon, and Kyle Palamar\n\nFilm and edit: Liam Hall\nAdditional film: Corey Kowalski and Johan Rosén","has_commented":false,"hasLiked":false,"likesCount":"1","title":"Put It In The Bowl – PIITBvid","postDate":"2017-03-06T17:04:22.464Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/eAJRPeOxpCg/0.jpg","videoUrl":"eAJRPeOxpCg","views":"1"},
    {"_id":"58bed2686228f60ddc1b4b55","commentsCount":"0","description":"Featuring: Kim Boberg\n\nPresented by: Monster Energy\nFilmed and edited by: Andreas Olofsson\nAdditional Filming by: Corey Stanton and Martin Axell","has_commented":false,"hasLiked":false,"likesCount":"0","title":"Kimbo Sessions","postDate":"2017-03-07T15:31:06.665Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621680370_640.jpg","videoUrl":"206560240","views":"2"},
    {"_id":"58bdc2df6228f60ddc1b4aea","commentsCount":"1","description":"The rain at Manly Beach in Australia couldn’t stop the ripping at the first stop of the 2017 Vans Park Series. Everyone was on fire, but it was Tom Schaar that was on top from qualifiers all the way through to the Final.\n\nFeaturing: Tom Schaar, Curren Caples, Murilo Peres, Pedro Barros, Grant Taylor, Ben Hatchell, Greyson Fletcher, Chris Russell and much more.","has_commented":false,"hasLiked":false,"likesCount":"5","title":"2017 Vans Park Series Australia - Highlights","postDate":"2017-03-06T20:12:37.551Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/uz2tGbuYR4A/0.jpg","videoUrl":"uz2tGbuYR4A","views":"8"},
    {"_id":"58be0aec6228f60ddc1b4b12","commentsCount":"2","description":"Five Riders.\n\nOne run each through the Burton Stash in Avoriaz.\n\nFirst up, Andy Nudds.","has_commented":false,"hasLiked":false,"likesCount":"3","title":"STASH RUNS - Andy Nudds","postDate":"2017-03-07T01:19:38.189Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/LA79R_jyvEo/0.jpg","videoUrl":"LA79R_jyvEo","views":"4"},
    {"_id":"58becdfc6228f60ddc1b4b53","commentsCount":"0","description":"“Brindle Collective documents Tom Karangelov, Marquise Henry, Marius Syvanen, Anthony Schultz, and Axel Cruysberghs in our new film, Sankhara, as they make their way through Asia to skate the contrasting backdrops of Seoul, Hong Kong, and Tokyo.” – New Balance Numeric","has_commented":false,"hasLiked":false,"likesCount":"3","title":"Sankhara","postDate":"2017-03-07T15:12:17.961Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621776657_640.jpg","videoUrl":"206651331","views":"3"},
    {"_id":"58bd967d6228f60ddc1b4ad6","commentsCount":"0","description":"The Put It In The Bowl crew from Canada got busy in the streets of Kamloops, BC! \n\nFeaturing: Geremy Guido, Bryce Bugera, Teilhard Volk, Aiden Hryciw, Tommy Van, Mathew Wonbon, and Kyle Palamar\n\nFilm and edit: Liam Hall\nAdditional film: Corey Kowalski and Johan Rosén","has_commented":false,"hasLiked":false,"likesCount":"1","title":"Put It In The Bowl – PIITBvid","postDate":"2017-03-06T17:04:22.464Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/eAJRPeOxpCg/0.jpg","videoUrl":"eAJRPeOxpCg","views":"1"},
    {"_id":"58bed2686228f60ddc1b4b55","commentsCount":"0","description":"Featuring: Kim Boberg\n\nPresented by: Monster Energy\nFilmed and edited by: Andreas Olofsson\nAdditional Filming by: Corey Stanton and Martin Axell","has_commented":false,"hasLiked":false,"likesCount":"0","title":"Kimbo Sessions","postDate":"2017-03-07T15:31:06.665Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621680370_640.jpg","videoUrl":"206560240","views":"2"},
    {"_id":"58bdc2df6228f60ddc1b4aea","commentsCount":"1","description":"The rain at Manly Beach in Australia couldn’t stop the ripping at the first stop of the 2017 Vans Park Series. Everyone was on fire, but it was Tom Schaar that was on top from qualifiers all the way through to the Final.\n\nFeaturing: Tom Schaar, Curren Caples, Murilo Peres, Pedro Barros, Grant Taylor, Ben Hatchell, Greyson Fletcher, Chris Russell and much more.","has_commented":false,"hasLiked":false,"likesCount":"5","title":"2017 Vans Park Series Australia - Highlights","postDate":"2017-03-06T20:12:37.551Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/uz2tGbuYR4A/0.jpg","videoUrl":"uz2tGbuYR4A","views":"8"},
    {"_id":"58be0aec6228f60ddc1b4b12","commentsCount":"2","description":"Five Riders.\n\nOne run each through the Burton Stash in Avoriaz.\n\nFirst up, Andy Nudds.","has_commented":false,"hasLiked":false,"likesCount":"3","title":"STASH RUNS - Andy Nudds","postDate":"2017-03-07T01:19:38.189Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/LA79R_jyvEo/0.jpg","videoUrl":"LA79R_jyvEo","views":"4"},
    {"_id":"58becdfc6228f60ddc1b4b53","commentsCount":"0","description":"“Brindle Collective documents Tom Karangelov, Marquise Henry, Marius Syvanen, Anthony Schultz, and Axel Cruysberghs in our new film, Sankhara, as they make their way through Asia to skate the contrasting backdrops of Seoul, Hong Kong, and Tokyo.” – New Balance Numeric","has_commented":false,"hasLiked":false,"likesCount":"3","title":"Sankhara","postDate":"2017-03-07T15:12:17.961Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621776657_640.jpg","videoUrl":"206651331","views":"3"},
    {"_id":"58bd967d6228f60ddc1b4ad6","commentsCount":"0","description":"The Put It In The Bowl crew from Canada got busy in the streets of Kamloops, BC! \n\nFeaturing: Geremy Guido, Bryce Bugera, Teilhard Volk, Aiden Hryciw, Tommy Van, Mathew Wonbon, and Kyle Palamar\n\nFilm and edit: Liam Hall\nAdditional film: Corey Kowalski and Johan Rosén","has_commented":false,"hasLiked":false,"likesCount":"1","title":"Put It In The Bowl – PIITBvid","postDate":"2017-03-06T17:04:22.464Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/eAJRPeOxpCg/0.jpg","videoUrl":"eAJRPeOxpCg","views":"1"},
    {"_id":"58bed2686228f60ddc1b4b55","commentsCount":"0","description":"Featuring: Kim Boberg\n\nPresented by: Monster Energy\nFilmed and edited by: Andreas Olofsson\nAdditional Filming by: Corey Stanton and Martin Axell","has_commented":false,"hasLiked":false,"likesCount":"0","title":"Kimbo Sessions","postDate":"2017-03-07T15:31:06.665Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621680370_640.jpg","videoUrl":"206560240","views":"2"},
    {"_id":"58bdc2df6228f60ddc1b4aea","commentsCount":"1","description":"The rain at Manly Beach in Australia couldn’t stop the ripping at the first stop of the 2017 Vans Park Series. Everyone was on fire, but it was Tom Schaar that was on top from qualifiers all the way through to the Final.\n\nFeaturing: Tom Schaar, Curren Caples, Murilo Peres, Pedro Barros, Grant Taylor, Ben Hatchell, Greyson Fletcher, Chris Russell and much more.","has_commented":false,"hasLiked":false,"likesCount":"5","title":"2017 Vans Park Series Australia - Highlights","postDate":"2017-03-06T20:12:37.551Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/uz2tGbuYR4A/0.jpg","videoUrl":"uz2tGbuYR4A","views":"8"},
    {"_id":"58be0aec6228f60ddc1b4b12","commentsCount":"2","description":"Five Riders.\n\nOne run each through the Burton Stash in Avoriaz.\n\nFirst up, Andy Nudds.","has_commented":false,"hasLiked":false,"likesCount":"3","title":"STASH RUNS - Andy Nudds","postDate":"2017-03-07T01:19:38.189Z","source":"Youtube","imageUrl":"https://img.youtube.com/vi/LA79R_jyvEo/0.jpg","videoUrl":"LA79R_jyvEo","views":"4"},
    {"_id":"58becdfc6228f60ddc1b4b53","commentsCount":"0","description":"“Brindle Collective documents Tom Karangelov, Marquise Henry, Marius Syvanen, Anthony Schultz, and Axel Cruysberghs in our new film, Sankhara, as they make their way through Asia to skate the contrasting backdrops of Seoul, Hong Kong, and Tokyo.” – New Balance Numeric","has_commented":false,"hasLiked":false,"likesCount":"3","title":"Sankhara","postDate":"2017-03-07T15:12:17.961Z","source":"Vimeo","imageUrl":"https://i.vimeocdn.com/video/621776657_640.jpg","videoUrl":"206651331","views":"3"}]

    this.state = {
      videos
    }
  }

  _fetchVideos() {
    setTimeout(() => {
      this.setState({
        videos: []
      })
    }, 500)
  }

  componentDidMount() {
    // this._fetchVideos()
    // const interval = setInterval(() => {
    //   if (this.state.videos.length === 10) {
    //     clearInterval(interval)
    //     return
    //   }
    //   this.setState({
    //     videos: [...this.state.videos, this.state.videos.length]
    //   })
    //
    // }, 400)
  }
  render() {
    return (
      <View style={styles.container}>
        <VideoGallery
          videos={this.state.videos}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
})
