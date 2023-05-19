import axios from "axios";


export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) =>{
    try{
       const {
        data: { data }
        } = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
            params: {
                bl_latitude: bl_lat ? bl_lat : '9.350987561434042',
                tr_latitude: tr_lat ? tr_lat : '9.502350762182429',
                bl_longitude: bl_lng ? bl_lng : '-0.9314868488888343',
                tr_longitude:  tr_lng ? tr_lng : '-0.7830725614015351',
                limit: '30',
                currency: 'GHS',
                lunit: 'km',
                lang: 'en_US'
              },
              headers: {
                'X-RapidAPI-Key': 'd31585edf0mshaca381b5569c581p1b321ajsn428d747ba053',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              },
        }
        );
        return data;
    }
    catch{
        return null
    }
}
