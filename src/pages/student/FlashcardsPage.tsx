import Flashcard from '../../components/Flashcard/Flashcard';

const FLASHCARDS = [
  { id: 1, front: "What is JSX?", back: "JSX stands for JavaScript XML. It allows us to write HTML in React." },
  { id: 2, front: "What is a Hook?", back: "Hooks are functions that let you “hook into” React state and lifecycle features from function components." },
  { id: 3, front: "What is the Virtual DOM?", back: "A lightweight representation of the real DOM that React uses to optimize updates." },
  { id: 4, front: "What is Prop Drilling?", back: "The process of passing data from a parent component down through multiple levels of children to reach a specific component." },
];

export default function FlashcardsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-serif font-bold text-[#E8EAF6]">Flashcards</h1>
        <p className="text-[#8B92B8]">Öğrendiklerini pekiştirmek için kartları kullan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FLASHCARDS.map((card) => (
          <Flashcard key={card.id} front={card.front} back={card.back} />
        ))}
      </div>
    </div>
  );
}
