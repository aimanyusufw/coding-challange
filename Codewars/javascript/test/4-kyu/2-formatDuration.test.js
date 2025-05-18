import { formatDuration } from "../../4-kyu/2-formatDuration";

describe("Tests", () => {
  it("test", () => {
    expect(formatDuration(1)).toStrictEqual("1 second");
    expect(formatDuration(62)).toStrictEqual("1 minute and 2 seconds");
    expect(formatDuration(120)).toStrictEqual("2 minutes");
    expect(formatDuration(3600)).toStrictEqual("1 hour");
    expect(formatDuration(3662)).toStrictEqual(
      "1 hour, 1 minute and 2 seconds"
    );
  });
});
