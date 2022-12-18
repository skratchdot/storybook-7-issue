export const StoryTesty = ({ value }: { value: boolean }) => {
  return (
    <div>
      <div>value is {value ? 'true' : 'false'}</div>
    </div>
  );
};
