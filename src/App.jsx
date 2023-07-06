import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Manga from './pages/Manga'
import Header from './components/Header'
import MangaDetails from './pages/MangaDetails'
import Capitulos from './pages/capitulos'
import Images from './pages/imagens'
import ListItem2 from './components/ListItem2'
import CreateManga from "./pages/Crud/Manga/getManga"
import PostManga from "./pages/Crud/Manga/postManga"
import UpadateManga from "./pages/Crud/Manga/updateManga"
import DeletaManga from "./pages/Crud/Manga/deleteManga"
import ImagensList from "./pages/Crud/imagenscrud/getImagens"
import CreateImagem from "./pages/Crud/imagenscrud/postImagens"
import DeleteImagem from "./pages/Crud/imagenscrud/deleteImagens"
import Updateimagem from './pages/Crud/imagenscrud/updateImagens'

import CapitulosList from "./pages/Crud/capituloscrud/getcapitulos"
import CreateCapitulo from "./pages/Crud/capituloscrud/postcapitulos"//nao funciona
import DeleteCapitulo from "./pages/Crud/capituloscrud/deletecapitulos"
import UpdateCapitulo from "./pages/Crud/capituloscrud/updatecapitulos"
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/get" element={<CreateManga />} />
      <Route path="/post" element={<PostManga />} />
      <Route path="/update/:mangaId" element={<UpadateManga />} />
      
      <Route path="/deleta/:mangaId" element={<DeletaManga />} />
      <Route path="/manga" element={<Manga />} />
      <Route path="/mangas/details/:id" element={<MangaDetails />} />
      <Route path="/*" element={<Home />} />
      <Route path="/capitulos/:id/imagens" component={ListItem2} />
      <Route path="/capitulos/:mangaId" element={<Capitulos />} />
      <Route path="/capitulos/:mangaId/imagens/:cap_id" element={<Images />} />

      <Route path="/imagens" element={<ImagensList/>} />
      <Route path="/imagens/create" element={<CreateImagem/>} />
      <Route  path="/imagens/delete/:id" element={<DeleteImagem/>} />
      <Route path="/upadateimagem/:id" element={<Updateimagem />} />

      <Route path="/capitulos" element={<CapitulosList/>} />
     <Route path="/capitulos/create" element={<CreateCapitulo/>}/>
     <Route path="/capitulos/delete/:id" element={<DeleteCapitulo/>}/>
     <Route path="/upadatecapitulo/:id" element={<UpdateCapitulo />} />
     
    </Routes>
    </>
  )
}

export default App