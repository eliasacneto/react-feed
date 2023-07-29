import { Header } from "./components/Header/Header";
import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";


export function App(){
return (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author="Elias Neto"
          content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore temporibus iste libero ullam voluptate maiores quasi natus dolor! Accusantium corporis quam quisquam nisi repudiandae sapiente enim fugit repellat natus."
        />
                <Post
          author="Elias Neto"
          content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore temporibus iste libero ullam voluptate maiores quasi natus dolor! Accusantium corporis quam quisquam nisi repudiandae sapiente enim fugit repellat natus."
        />
      </main>
    </div>

  </div>


  )
}