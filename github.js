class GitHub{
    constructor(){
        this.client_id ='45ac13038e83afe75a29';
        this.client_secret ='04c586a3baa204a49abdf6ba83c6fc093660243b';
        this.repos_count =5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        
        const headers ={
            "Authorization" : `Token b79dee938abe6df0ae9802aaf93c48e9b18c0e29`
        }
        const url = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        const profileResponse = await fetch(url,{
           "method" :"GET",
            "headers" :headers
        });
        const urlr = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;
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
