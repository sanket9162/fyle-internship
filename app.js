const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");

const getUser = async (username) => {
  const res = await fetch(APIURL + username);
  const data = await res.json();
  console.log(data);
  const card = `
<div class="user-info">
        <div>
          <img class="avtar" src="${data.avatar_url}" alt="" />
        </div>
        <div class="user-detail">
          <h1>${data.name}</h1>
          <p>${data.bio}</p>
          <h3>${data.location}</h3>
          <h3>${data.twitter_username}</h3>
        </div>
      </div>
      <h1 class="github-link">${data.html_url}</h1>
      <div class="repo-card">

        </div>
      </div> 
`;
  main.innerHTML = card;
  getReops(username)
};
const getReops = async(username) =>{
    const repos = document.querySelector(".repo-card")
    const res = await fetch(APIURL + username + "/repos?")
    
    const data = await res.json();
    data.forEach(
        (item)=>{
        const elem1 = document.createElement("div")
        const elem2 = document.createElement("h1")
        const elem3 = document.createElement("p")
        const elem4 = document.createElement("div")

        elem1.classList.add("repo")
        elem2.innerHTML = item.name
        elem3.innerHTML = item.description
        // elem1.innerHTML = elem2
        elem1.appendChild(elem2)
        elem1.appendChild(elem3)
        repos.appendChild(elem1)
            
        }
    )
    console.log(data)
}


const formSubmit = () =>{
    const searchBox = document.querySelector("#search")
    if(searchBox.value != ""){
        getUser(searchBox.value)
    }
    // console.log(click)
    return false
}