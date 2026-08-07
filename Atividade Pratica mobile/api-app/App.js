import { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Image,
  TextInput
} from 'react-native';

export default function App() {
  const [witches, setWitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredWitches, setFilteredWitches] = useState([]);


useEffect(() => {
  fetchActors();
}, []);

  useEffect(() => {
  const resultado = witches.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  setFilteredWitches(resultado);
}, [search, witches]);

const fetchActors = async () => {
  try {
  const response = await fetch(
  'https://api.tvmaze.com/people'
);

    const data = await response.json();

    setWitches(data);
    setFilteredWitches(data);

  } catch (error) {
    console.error("Erro ao buscar atores: ", error);
  } finally {
    setLoading(false);
  }
};

const renderItem = ({ item }) => (
  <View style={styles.card}>

    <Image
      source={{
        uri: item.image?.medium
      }}
      style={styles.image}
      resizeMode="cover"
    />

    <View style={styles.info}>

      <Text style={styles.title}>
        {item.name}
      </Text>

      <Text style={styles.category}>
        País: {item.country?.name || "Não informado"}
      </Text>

      <Text style={styles.price}>
        Nascimento: {item.birthday || "Não informado"}
      </Text>

    </View>

  </View>
);
return (
  <SafeAreaView style={styles.container}>

    <Text style={styles.headerTitle}>
      🎬 Atores e Atrizes Famosos 🎬
    </Text>

    <TextInput
      style={styles.search}
      placeholder="Pesquisar ator..."
      value={search}
      onChangeText={setSearch}
    />

    {loading ? (
      <ActivityIndicator
        size="large"
        color="#ED1D24"
        style={styles.loader}
      />
    ) : (
      <FlatList
        data={filteredWitches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    )}

  </SafeAreaView>
);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F1E8',
        paddingTop: 50,
    },

    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5B2C06',
        marginBottom: 20,
        letterSpacing: 1,
    },

    search: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        height: 50,
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#A67C52',
        fontSize: 16,
        color: '#333',

        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
    },

    loader: {
        marginTop: 40,
    },

    list: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        marginBottom: 18,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,

        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        elevation: 5,
    },

    image: {
        width: 90,
        height: 120,
        borderRadius: 12,
        marginRight: 15,
    },

    info: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5B2C06',
        marginBottom: 8,
    },

    category: {
        fontSize: 16,
        color: '#8B5A2B',
        marginBottom: 5,
    },

    price: {
        fontSize: 15,
        color: '#555',
        fontWeight: '600',
    },

    container: {
    flex: 1,
    backgroundColor: '#111',
    addingTop: 40,
},
});
