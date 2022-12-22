# Storybook Issue 20321

For more information, see:
[[Bug]: v7/csf3 stories are not recognized when functions generate the csf format](https://github.com/storybookjs/storybook/issues/20321)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) via:

```
npx sb@next repro
```

with the following choices:

```
✔ 🌈 Select the repro renderer › react
✔ 📝 Select the repro base template › cra_typescript
```

then i added a new component with 2 stories that should work:

- src/components/story-testy.tsx
- src/components/story-testy-one.stories.tsx
- src/components/story-testy-two.stories.tsx
