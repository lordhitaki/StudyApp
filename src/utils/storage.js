import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorites(key){
    const favorites = await AsyncStorage.getItem(key)
    try{
        return JSON.parse(favorites) || [];
    }
    catch{
        return []
    }
}

export async function saveFavorite(key, newItem){
    let myFavorites = await getFavorites(key)

    let hasItem = myFavorites.some( item => item.id === newItem.id)

    if(hasItem){
        return;
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
}

export async function removeFavorite(id){
    let pokes = await getFavorites("@pokedex")

    let myFavorites = pokes.filter(item => {
        return(item.id !== id)
    })
    await AsyncStorage.setItem("@pokedex", JSON.stringify(myFavorites))
    return myFavorites
}

export async function isfavorites(poke){
    let myPokes = await getFavorites("@pokedex")

    const favorites = myPokes.find(item => item.id === poke.id)

    if(favorites){
        return true
    }
    return false
} 