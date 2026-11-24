id
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.logo}>🎓 SchoolMate</Text>
        <Text style={styles.subtitle}>Your Offline AI Study Assistant</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcome}>Welcome to SchoolMate!</Text>
        <Text style={styles.description}>
          Learn smarter, study anywhere, even without internet.
        </Text>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>📚 Study Materials</Text>
          <Text style={styles.cardText}>
            Access your learning materials.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>🤖 AI Study Assistant</Text>
          <Text style={styles.cardText}>
            Get help understanding your lessons.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>📝 Practice Questions</Text>
          <Text style={styles.cardText}>
            Test your knowledge and improve.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>📖 My Learning</Text>
          <Text style={styles.cardText}>
            Continue your learning journey.
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.footer}>SchoolMate Offline • Learn Without Limits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
  },
  header: {
    backgroundColor: '#123B70',
    paddingTop: 65,
    paddingBottom: 30,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#DCE8F8',
    fontSize: 14,
    marginTop: 8,
  },
  content: {
    padding: 20,
  },
  welcome: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#123B70',
    marginBottom: 8,
  },
  description: {
    fontSize: 15,
    color: '#667085',
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#123B70',
  },
  cardText: {
    fontSize: 14,
    color: '#667085',
    marginTop: 7,
  },
  footer: {
    textAlign: 'center',
    color: '#667085',
    padding: 15,
    fontSize: 12,
  },
});
