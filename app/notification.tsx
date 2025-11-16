import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function NotificationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.notificationCard}>
          <LinearGradient
            colors={['#7c6ff5', '#9d8ff7']}
            style={styles.notificationBanner}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200' }}
              style={styles.bannerImage}
            />
            <View style={styles.bannerText}>
              <Text style={styles.bannerTitle}>3D Design</Text>
              <Text style={styles.bannerTitle}>Basic</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>$22.99</Text>
                <Text style={styles.originalPrice}>$34.99</Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.notificationDetails}>
            <View style={styles.notificationIcon}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=100' }}
                style={styles.notificationIconImage}
              />
            </View>
            <View style={styles.notificationText}>
              <Text style={styles.notificationTitle}>Course successfully enrolled</Text>
              <Text style={styles.notificationTime}>17:00</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationItem}>
          <View style={styles.notificationIcon}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=100' }}
              style={styles.notificationIconImage}
            />
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Thank you for purchasing</Text>
            <Text style={styles.notificationTime}>17:00</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationItem}>
          <View style={styles.notificationIconGradient}>
            <LinearGradient
              colors={['#7c6ff5', '#9d8ff7']}
              style={styles.iconGradient}>
              <Text style={styles.iconText}>3D</Text>
            </LinearGradient>
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>3D Design Basic</Text>
            <Text style={styles.notificationTime}>17:00</Text>
          </View>
          <Text style={styles.notificationPrice}>$24.99</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationItem}>
          <View style={styles.notificationIcon}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=100' }}
              style={styles.notificationIconImage}
            />
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Thank you for purchasing</Text>
            <Text style={styles.notificationTime}>17:00</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.notificationItem}>
          <View style={styles.notificationIcon}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=100' }}
              style={styles.notificationIconImage}
            />
          </View>
          <View style={styles.notificationText}>
            <Text style={styles.notificationTitle}>Characters Animation</Text>
            <Text style={styles.notificationTime}>17:00</Text>
          </View>
          <Text style={styles.notificationPrice}>$24.99</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 16,
    overflow: 'hidden',
  },
  notificationBanner: {
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bannerImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  bannerText: {
    marginLeft: 16,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  originalPrice: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textDecorationLine: 'line-through',
  },
  notificationDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  notificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    overflow: 'hidden',
  },
  notificationIconImage: {
    width: '100%',
    height: '100%',
  },
  notificationIconGradient: {
    width: 48,
    height: 48,
    borderRadius: 12,
    overflow: 'hidden',
  },
  iconGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  notificationText: {
    flex: 1,
    marginLeft: 12,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  notificationPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
});
