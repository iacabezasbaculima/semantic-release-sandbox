# semantic-release-sandbox

Sandbox to test [`semantic-release`](https://github.com/semantic-release/semantic-release).

The `conventionalcommits` preset is used to analyse commits and generate release notes.

The following plugin is required to use the `conventionalcommits` preset.

- [conventional-changelog-conventionalcommits](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits)

The [semantic-release-action](https://github.com/cycjimmy/semantic-release-action) GitHub Action is used to run `semantic-release` in CI.

Pull requests are also validated against the conventional commit spec by:

- [Use squash merges that use PR title as commit message](https://github.blog/changelog/2022-05-11-default-to-pr-titles-for-squash-merge-commit-messages/)

This will ensure that PR merge commits are picked up by `semantic-release` and to include PR numbers in the commit message by default.

Examples of repositories using `semantic-release`:

- [action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request)
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda)
