module.exports = {
  branches: ["main"],
  ci: false,
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        writerOpts: {
          commitsSort: "scope",
          generateGroupHeader: true,
          groupBy: "committerName",
          //mainTemplate: require("fs").readFileSync("./custom.hbs", "utf-8"),
        },
        presetConfig: {
          types: [
            {
              type: "feat",
              section: ":sparkles: Features",
              hidden: false,
            },
            {
              type: "fix",
              section: ":bug: Bug Fixes",
              hidden: false,
            },
            {
              type: "ci",
              section: ":arrows_counterclockwise: CI",
              hidden: false,
            },
          ],
        },
      },
    ],
    [
      "@semantic-release/github",
      {
        successComment:
          "This ${issue.pull_request ? 'PR is included' : 'issue has been resolved'} in version ${nextRelease.version} :tada:",
        labels: false,
        releasedLabels: false,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message:
          "chore(release): version ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
