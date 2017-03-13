import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'


export default ({
  hasLiked
}) => (
  <Ionicons
    name={hasLiked ? 'ios-heart' : 'ios-heart-outline'}
    color="#FFF"
    size={14}
  />
)
