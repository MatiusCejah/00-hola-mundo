import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard inicialIsFollowing={true} userName="lafuerza">
        Mia Salazar
      </TwitterFollowCard>

      <TwitterFollowCard inicialIsFollowing={false} userName="coito">
        Don Perritus
      </TwitterFollowCard>

      <TwitterFollowCard inicialIsFollowing={false} userName="motochorros">
        Incógnit
      </TwitterFollowCard>
    </section>
  );
}
