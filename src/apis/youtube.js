import axios from 'axios';
const KEY = "AIzaSyAVTXdSiCDxsABnagj0oFPD8GsUaij7QwA";




export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        amaxResults :5,
        key:KEY 
    }
});
