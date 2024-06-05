import { useState } from "react"

function Posts() {
  const [posts, setPosts] = useState([
    {
      "_id": "6660e1a0b8b2663560929217",
      "title": "Primeiro post do usuário Fransuelio",
      "description": "Mais uma descricao do post"
    },
    {
      "_id": "6660e1a0b8b2663560929217",
      "title": "Segundo post do usuário Fransuelio",
      "description": "Mais uma descricao do post"
    }
  ]);

  const PostsList = posts.map((post) => (
    <div key={post._id}>
      <h3>{post.title}</h3>
    </div>
  ));
  return (
    <div>
      <h2>Posts</h2>
      <div>Listagem de posts do usuário</div>

      {posts.length === 0 ? 'Nenhum post encontrado' : PostsList}
    </div>
  )
}

export default Posts