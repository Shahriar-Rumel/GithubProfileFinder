class GitHub{
    constructor(){
        // this.client_id ='00ade7b7bc5ddafcc555';
        // this.client_secret ='3e037eeaa35d6ed413dbd00ff5716ce550b4abfa';
        this.repos_count =5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
        
        const headers ={
            "Authorization" : `Token 0d9d538e4bbbba41022646e25e0a69424acfc582`
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