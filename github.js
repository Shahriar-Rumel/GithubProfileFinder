class GitHub{
    constructor(){
        this.client_id ='84578856d90ceaf52b21';
        this.client_secret ='c0a03c8f015c1228883534bea1319b0d8cc98bf4';
        this.repos_count =5;
        this.repos_sort='created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile= await profileResponse.json();
        const repos = await repoResponse .json();
        return{
            profile,
            repos
        }
    }
}