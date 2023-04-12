import Counter from '../components/Counter';

function Home() {
  const counters = [{ animalName: 'Bear' }, { animalName: 'Lion' }, { animalName: 'Steven' }];

  return (
    <>
      {counters.map((animal) => (
        <Counter key={animal.animalName} title={animal.animalName} />
      ))}
    </>
  );
}

export default Home;
