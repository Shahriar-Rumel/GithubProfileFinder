class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML =`
        <div class="profile-card">
            <div class="profile-image">
                <img src="${user.avatar_url}">
               
            </div>
            <div class="profile-info">
            <a href="${user.html_url}" id="link" target="blank"> Visit Profile</a>
            <hr>
              <div class="badge">
                <button class="badge1">Public Repos : ${user.public_repos}</button>
                <button class="badge2">Public Gists : ${user.public_gists}</button>
                <button class="badge3">Followers : ${user.followers}</button>
                <button class="badge4">Following : ${user.following}</button>
            </div>
                </div>
            <br>
            <br>
            <div class="list">
                <ul>
                <li>Username :<span>${user.login}</span></li>
                <li>Website :<span>${user.blog}</span></li>
                <li>Location :<span>${user.location}</span></li>

                <li>Member Since :<span>${user.created_at}</span></li>
                </ul>
            </div>
        
        </div>
        <h3>Latest Repos</h3>
        <div id="repos">
       
        </div>
        `;
    }

    showRepos(repos){

        let output ='';
        repos.forEach(function(repo){
            output +=`
          
            <div class="repo-list-box">
                <div class="repo-list">
                    <ul>
                    <li>Repo Name : ${repo.name}</li>
                    <li>Stars : ${repo.stargazers_count}</li>
                    <li>Language :  ${repo.language}</li>
                    <li><a href="${repo.html_url}" target="blank"><button>Visit Repo</button></a></li>

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
            
        },5000);

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