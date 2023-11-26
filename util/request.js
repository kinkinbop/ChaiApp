const BASE_URL= 'http://47.94.99.63:8087'
export const MyRequest=(options)=>
{
	return new Promise((resolve,reject)=>
	{
        const res=fetch(BASE_URL+options.url,{
           method:options.method||'GET',
           headers:options.header,
           body:JSON.stringify(options.data),
        })
        .then(response=>{
         if (response.status === 200) {
           resolve(response.json());
        } else {
           reject(response.json());
        }
        })
        .catch(error=>{
           console.log(error);
        })
	})
}
export const setItem =(key,item) => {
   try {
        AsyncStorage.setItem(key, JSON.stringify(item));
   } catch (error) {
       // Error saving data
   }
}
export const getItem =(keyname) => {
   try {
       const value =AsyncStorage.getItem(keyname);
       console.log (value);
   }catch(error){

   }
}