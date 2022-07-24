let projects = []

function addPro(event) {
    event.preventDefault()

    let name = document.getElementById("nama").value
    let message = document.getElementById("desc").value
    let image = document.getElementById("file")
    let node = document.getElementById("node").checked
    let js = document.getElementById("js").checked
    let react = document.getElementById("react").checked
    let angular = document.getElementById("angular").checked

    image = URL.createObjectURL(image.files[0])

    let project = {
        name,
        message,
        image,
        html,
        css,
        js,
        node
    }

    projects.push(project)
    renderprojects()
}

function renderprojects() {
    let hproject = document.getElementById("project-post")

    hproject.innerHTML = ""

    for (let i = 0; i < projects.length; i++) {
        hproject.innerHTML += `
        
    <a href="detail-project.html">
        <div class="post">
            <img class="gmbr" src="${projects[i].image}" alt="">
            <h2><a href="detail-project.html" target="_blank">${projects[i].name}</a></h2>  
            <p class="duration">duration : 1 Month</p>
            <div class="description"><p>${projects[i].message}</p></div>
            <div id="icon" class="icon">
                ${projects[i].node?`<i class="fa-brands fa-node"></i>` : ""}
                ${projects[i].js?`<i class="fa-brands fa-js fa-2x"></i>` : ""}
                ${projects[i].react?`<i class="fa-brands fa-react"></i>` : ""}
                ${projects[i].angular?`<i class="fa-brands fa-angular"></i>` : ""}
            </div>
            <div class="upload">
                <button type="button" class="edit">edit</button>
                <button type="button" class="delete">delete</button>
            </div>
        </div>
    </a>
        `
    }
}
