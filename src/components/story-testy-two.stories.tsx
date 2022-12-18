import { StoryTesty } from './story-testy';

const getit = () => {
  const MyDefault = {
    component: StoryTesty,
  };
  return { MyDefault };
};

const { MyDefault } = getit();

export default MyDefault;
export const True = { args: { value: true } };
export const False = { args: { value: false } };
