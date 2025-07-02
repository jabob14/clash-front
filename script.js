fetch('members.json')
  .then(response => response.json())
  .then(data => {
    const membersContainer = document.getElementById("members");
    let rank = 1;

    for (const memberId in data.memberList) {
      const member = data.memberList[memberId];
      const row = document.createElement("div");
      row.className = "row";
      row.innerHTML = `
        <div class="rank">${rank}</div>
        <div class="name">${member.name}</div>
      `;
      membersContainer.appendChild(row);
      rank++;
    }
  })
  .catch(error => {
    console.error("Failed to load member data:", error);
  });
