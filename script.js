const github = new GitHub;

const ui = new UI;
//Search input
const searchUser = document.getElementById('searchUser');

//search user event listener

searchUser.addEventListener('keyup',(e) =>{
  
    //get input
    const userText = e.target.value;

    if(userText !==''){
       //make http call
       github.getUser(userText)
       .then (data =>{
       if(data.profile.message ==='Not Found'){
        //alert
        ui.showError('User Not Found !','alert');
        
       }else{
        //show profile 
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
       }

       });
    }else{
        //clear profile
        ui.clearProfile();
    }

});