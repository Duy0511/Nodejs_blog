var videoLink = 'https://www.youtube.com/watch?v=iaslcrZ6mVo'
const getID = ()=>{
    if(videoLink.indexOf('&') > 0){
      return (videoLink.substring(videoLink.indexOf('=')+1, videoLink.lastIndexOf('&')))
      }else{
      return (videoLink.substring(videoLink.indexOf('=')+1, videoLink.length))
      }
  }
const video = function duy(){
    if(videoLink.indexOf('&') > 0){
      return (videoLink.substring(videoLink.indexOf('=')+1, videoLink.lastIndexOf('&')))
      }else{
      return (videoLink.substring(videoLink.indexOf('=')+1, videoLink.length))
      }
  }
console.log(Date())