class GitHub{
    constructor(){
        
        this.repos_count =5;
        this.repos_sort='created: asc';
        require('dotenv').config();
    }
    async getUser(user){
       
        const headers ={
            "Authorization" : `Token process.env.API_KEY`
        }
        const url = `https://api.github.com/users/${user}`;
        const profileResponse = await fetch(url,{
           "method" :"GET",
            "headers" :headers
        });
        const urlr = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`;
        const repoResponse = await fetch(urlr,
            {
                "method" :"GET",
                 "headers" :headers
             });
        const profile= await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}
// class GitHub{
//     constructor(){
//         this.client_id ='45ac13038e83afe75a29';
//         this.client_secret ='1dc7fa858e1c16f0a82358e99c298e60a92dd961';
//         this.repos_count =5;
//         this.repos_sort='created: asc';
//     }
//     async getUser(user){
        
//         // const headers ={
//         //     "Authorization" : `Token b79dee938abe6df0ae9802aaf93c48e9b18c0e29`
//         // }
//         const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&&client_secret=${this.client_secret}`;
//         const profileResponse = await fetch(url);
//         // ,{
//         //    "method" :"GET",
//         //     "headers" :headers
//         // });
//         const urlr = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
//         const repoResponse = await fetch(urlr);
//         // ,
//         //     {
//         //         "method" :"GET",
//         //          "headers" :headers
//         //      });
//         const profile= await profileResponse.json();
//         const repos = await repoResponse.json();
//         return{
//             profile,
//             repos
//         }
//     }
// }
