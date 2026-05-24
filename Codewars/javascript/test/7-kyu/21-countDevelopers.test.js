import { countDevelopers } from "../../7-Kyu/21-countDevelopers";

describe("Sample tests", () => {
  const list1 = [
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    {
      firstName: "Sumayah",
      lastName: "M.",
      country: "Tajikistan",
      continent: "Asia",
      age: 30,
      language: "CSS",
    },
  ];

  it("should find JavaScript developers from Europe", () => {
    expect(countDevelopers(list1)).toStrictEqual(1);
  });

  const list2 = [
    {
      firstName: "Oliver",
      lastName: "Q.",
      country: "Australia",
      continent: "Oceania",
      age: 19,
      language: "HTML",
    },
    {
      firstName: "Lukas",
      lastName: "R.",
      country: "Austria",
      continent: "Europe",
      age: 89,
      language: "HTML",
    },
  ];

  it("should not find HTML developers from Europe", () => {
    expect(countDevelopers(list2)).toStrictEqual(0);
  });
});
