const Instructions = ({ steps }: { steps: string[] }) => {
  return (
    <div>
      <h3>Steps: </h3>
      {steps.map((step: any, i: any) => (
        <p key={i}>{step}</p>
      ))}
    </div>
  );
};

export default Instructions;
