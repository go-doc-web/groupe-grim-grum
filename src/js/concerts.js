const concerts = [
  {
    city: "Київ",
    venue: "Docker-G Pub",
    seats: 250,
    datetime: "26.10.2025, 15:00",
  },
  {
    city: "Львів",
    venue: "!FESTrepublic",
    seats: 400,
    datetime: "01.11.2025, 20:00",
  },
  {
    city: "Одеса",
    venue: "Зелений театр",
    seats: 700,
    datetime: "09.11.2025, 19:30",
  },
  {
    city: "Харків",
    venue: "ArtZavod",
    seats: 500,
    datetime: "16.11.2025, 20:00",
  },
];

const tBody = document.querySelector(".table-body");
concerts.forEach((concert) => {
  const row = document.createElement("tr");
  row.innerHTML = `
            <td>${concert.city} — ${concert.venue}</td>
            <td>${concert.seats}</td>
            <td>${concert.datetime}</td>
            <td><button class="table-btn btn">Замовити квиток</button></td>

    `;
  tBody.appendChild(row);
});
