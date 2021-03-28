class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML =`
        <div class="profile-card">
            <div class="profile-image">
                <img src="${user.avatar_url}">
                <a src="${user.link}" id="link"> Visit Profile</a>
            </div>
            <div class="profile-info">
                <span class="badge badge1">Public Repos : ${user.public_repos}</span>
                <span class="badge badge2">Public Gists : ${user.public_gists}</span>
                <span class="badge badge3">Followers : ${user.followers}</span>
                <span class="badge badge4">Following : ${user.folowing}</span>
            </div>
            <br>
            <br>
            <ul class="list">
            <li>Company :<span>${user.company}</span></li>
            <li>Website :<span>${user.blog}</span></li>
            <li>Location :<span>${user.location}</span></li>

            <li>Member Since :<span>${user.created_at}</span></li>
            </ul>
        </div>
      
        <div id="repos">
        <h3>Latest Repos</h3>
        </div>
        `;
    }

    showRepos(repos){

        let output =' ';
        repos.forEach(function(repo){
            output +=`
            <div class="repo-list-box">
                <div class="repo-list">
                    <ul>
                    <li>Repo Name :${repo.name}</li>
                    <li>Stars :${repo.stargazers_count}</li>
                    <li>Repo Name :${repo.watcher_count}</li>
                    <li>Repo Name :${repo.forms_count}</li>

                    </ul>
                </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML= output;

    }
    showError(message,className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className =className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const search = document.querySelector('.header');

        container.insertBefore(div,search);
        
        setTimeout(()=>{
            this.clearAlert();
            
        },3000);

    }

    clearAlert(){
        const currentAlert =document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    clearProfile(){
        this.profile.innerHTML='';
    }
}