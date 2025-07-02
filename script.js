fetch('members.json')
  .then(response => response.json())
  .then(data => {
    const membersContainer = document.getElementById("members");
    let rank = 1;

    const rankColors = {
      1: "#f8d65a",
      2: "#d1e0e9",
      3: "#e8b13f"
    };

    for (const memberId in data.memberList) {
      const member = data.memberList[memberId];
      const row = document.createElement("div");
      row.className = "row";

      if (rankColors[rank]) {
        row.style.backgroundColor = rankColors[rank];
      }

      row.innerHTML = `
        <div class="rank">${rank}</div>
        <div class="name">${member.name}</div>
        <div class="donations">${member.donations}</div>
        <div class="capital">${member.capitalAttacks}</div>
        <div class="games">${member.clanGamesScore}</div>
        <div class="stars">${member.clanWarLeagueStars}</div>
        <div class="score">${member.totalScore}</div>
      `;
      membersContainer.appendChild(row);
      rank++;
    }
  })
  .catch(error => {
    console.error("Failed to load member data:", error);
  });
