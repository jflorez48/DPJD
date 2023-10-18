// get ip address 

import axios from 'axios';
export const IpAddress = async ({setLoading, setIpData}) => {
   try {
    let res = await axios.get(`http://api.ipstack.com/134.201.250.155?access_key=${process.env.REACT_APP_IP_ADDRESS_API_KEY}`);
    if (res) {
      setLoading(false);
      setIpData(res.data);
    }
    
   } catch (error) {
    alert(`Ip address error: ${error}`)
   }

}
// ****** Get Countries
export const GetCountries = async ({ setLoading, setCountries }) => {
   try {
     let res = await axios.get(
       `https://api.apilayer.com/number_verification/countries`,
       {
         headers: {
           apikey: process.env.REACT_APP_NUMBER_VALIDATE_API_KEY,
         },
       }
     );
     if (res) {
       setLoading(false);
       setCountries(res.data);
     }
   } catch (error) {
     alert(error.response.data.message);
     setLoading(false);
   }
 };
 // *********** Send email
export const SendEmail = async ({
  fullName,
  email,
  subject,
  phone,
  message,
  setSend,
}) => {
  try {
    const datas = { fullName, email, phone, subject, message };
    let res = await axios.post(`http://localhost:5000/send`, datas);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};
 
