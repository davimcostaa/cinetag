import Favoritos from "pages/Favoritos";
import { createContext, useContext, useState } from "react";

export const favoritosContext = createContext();
Favoritos.displayName = 'Favoritos';

export default function FavoritosProvider ({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <favoritosContext.Provider
        value={{ favorito, setFavorito }}
        >
            {children}
        </favoritosContext.Provider>
    )
    
}

export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(favoritosContext)

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista)

    }

    return {
        favorito,
        adicionarFavorito
    }
}