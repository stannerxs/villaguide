document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('teamsContainer');
    if (!container) return;
  
    fetch('assets/data/teams.json')
      .then(response => response.json())
      .then(data => {
        data.teams.forEach(team => {
          // Create card element
          const card = document.createElement('a');
          card.className = 'card team-card';
          card.href = team.link;
          // Set entire card background to team color
          card.style.backgroundColor = team.color;
  
          // Create image element for the team logo
          const img = document.createElement('img');
          img.src = team.image;
          img.alt = team.name + ' Logo';
          img.className = 'team-card-logo';
  
          // Append image to card (omit team name)
          card.appendChild(img);
  
          // Append card to container
          container.appendChild(card);
        });
      })
      .catch(error => console.error('Error loading team data:', error));
  });
  