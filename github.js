// class GitHub{
//     constructor(){
        
//         this.repos_count =5;
//         this.repos_sort='created: asc';
//     }
//     async getUser(user){
       
//         const headers ={
//             "Authorization" : `Token ${config.API_KEY}`
//         }
//         const url = `https://api.github.com/users/${user}`;
//         const profileResponse = await fetch(url,{
//            "method" :"GET",
//             "headers" :headers
//         });
//         const urlr = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;
//         const repoResponse = await fetch(urlr,
//             {
//                 "method" :"GET",
//                  "headers" :headers
//              });
//         const profile= await profileResponse.json();
//         const repos = await repoResponse.json();
//         return{
//             profile,
//             repos
//         }
//     }
// }
class GitHub{
    constructor(){
        this.client_id ='34d26ef29a4cf3c335b1';
        this.client_secret ='d07027a1236439f438baacf3238719069b444cf8';
        this.repos_count =5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        
        // const headers ={
    
        // }
        const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&&client_secret=${this.client_secret}`;
        const profileResponse = await fetch(url);
        // ,{
        //    "method" :"GET",
        //     "headers" :headers
        // });
        const urlr = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const repoResponse = await fetch(urlr);
        // ,
        //     {
        //         "method" :"GET",
        //          "headers" :headers
        //      });
        const profile= await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}
