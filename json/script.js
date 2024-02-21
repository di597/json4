document.addEventListener("DOMContentLoaded", function() {
    loadCharacters();
});

async function loadCharacters() {
    try {
        const response = await fetch('persons.json');
        const characters = await response.json();
        const charactersContainer = document.getElementById('characters');
        
        characters.forEach(character => {
            const card = `
                <div class="card">
                    <h2>${character.name}</h2>
                    <p>Age: ${character.age}</p>
                    <p>Occupation: ${character.occupation}</p>
                    <img src="${character.person_photo}" alt="${character.name}">
                </div>
            `;
            charactersContainer.innerHTML += card;
        });
    } catch (error) {
        console.error('Error loading characters:', error);
    }
}
//второе задание
var xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var jsonData = JSON.parse(xhr.responseText);
    console.log(jsonData);
  } else {
    console.error("Не удалось загрузить файл: " + xhr.statusText);
  }
};
xhr.onerror = function () {
  console.error("Произошла ошибка при выполнении запроса.");
};
xhr.send();
