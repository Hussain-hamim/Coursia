import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Search,
  X,
  Star,
  Play,
  FileText,
  TrendingUp,
  Clock,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToCourseDetails = (courseData: any) => {
    router.push({
      pathname: '/course-details',
      params: courseData,
    });
  };

  const popularSearches = [
    'UI Design',
    'Web Development',
    'Mobile App',
    'Graphic Design',
    'Photography',
  ];

  const recentSearches = ['IOS Design', 'Product Design', '3D Modeling'];

  const searchResults = [
    {
      id: '1',
      title: 'IOS Design Basics',
      author: 'Phoenix Baker',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: '$256',
      rating: '4.5',
      reviews: '123',
      students: '1.2k',
      duration: '5 Hours',
      lessons: '24',
    },
    {
      id: '2',
      title: 'Product Design Mastery',
      author: 'Robert Fox',
      authorRole: 'Designer',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$189',
      rating: '4.8',
      reviews: '89',
      students: '850',
      duration: '6 Hours',
      lessons: '28',
    },
    {
      id: '3',
      title: 'UI/UX Fundamentals',
      author: 'Sarah Johnson',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '$199',
      rating: '4.7',
      reviews: '156',
      students: '1.5k',
      duration: '7 Hours',
      lessons: '32',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7c6ff5"
        translucent={false}
      />
      <LinearGradient colors={['#7c6ff5', '#9d8ff7']} style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Search</Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Search size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search courses..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearchQuery('')}
                style={styles.clearButton}
              >
                <X size={18} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {searchQuery.length === 0 ? (
          <>
            {/* Popular Searches */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <TrendingUp size={20} color="#7c6ff5" />
                <Text style={styles.sectionTitle}>Popular Searches</Text>
              </View>
              <View style={styles.tagContainer}>
                {popularSearches.map((tag, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.searchTag}
                    onPress={() => setSearchQuery(tag)}
                  >
                    <Text style={styles.searchTagText}>{tag}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Recent Searches */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Clock size={20} color="#7c6ff5" />
                <Text style={styles.sectionTitle}>Recent Searches</Text>
              </View>
              <View style={styles.tagContainer}>
                {recentSearches.map((tag, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.searchTag}
                    onPress={() => setSearchQuery(tag)}
                  >
                    <Text style={styles.searchTagText}>{tag}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        ) : (
          <>
            {/* Search Results */}
            <View style={styles.resultsHeader}>
              <Text style={styles.resultsCount}>
                {searchResults.length} results found
              </Text>
            </View>

            <View style={styles.resultsList}>
              {searchResults.map((course) => (
                <TouchableOpacity
                  key={course.id}
                  style={styles.resultCard}
                  onPress={() => navigateToCourseDetails(course)}
                >
                  <View style={styles.resultCardLeft}>
                    <Image
                      source={{ uri: course.image }}
                      style={styles.resultCardImage}
                      resizeMode="cover"
                    />
                    <TouchableOpacity style={styles.resultPlayButton}>
                      <BlurView
                        intensity={30}
                        style={styles.resultPlayButtonBlur}
                        tint="light"
                      >
                        <Play size={16} color="#ffffff" fill="#ffffff" />
                      </BlurView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resultDocumentButton}>
                      <BlurView
                        intensity={30}
                        style={styles.resultButtonBlur}
                        tint="light"
                      >
                        <FileText size={16} color="#1a1a1a" />
                      </BlurView>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.resultCardRight}>
                    <View>
                      <View style={styles.resultTags}>
                        <LinearGradient
                          colors={['#d0d0d0', '#e8e8e8', '#d0d0d0']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={styles.resultRatingTagGradient}
                        >
                          <View style={styles.resultRatingTag}>
                            <Star size={12} color="#ffa500" fill="#ffa500" />
                            <Text style={styles.resultRatingTagText}>
                              {course.rating}
                            </Text>
                          </View>
                        </LinearGradient>
                        <LinearGradient
                          colors={['#d4c5ff', '#e6deff', '#d4c5ff']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={styles.resultBestsellerTagGradient}
                        >
                          <View style={styles.resultBestsellerTag}>
                            <Text style={styles.resultBestsellerTagText}>
                              Bestseller
                            </Text>
                          </View>
                        </LinearGradient>
                      </View>
                      <Text style={styles.resultCardTitle}>{course.title}</Text>
                    </View>
                    <Text style={styles.resultCardPrice}>{course.price}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  searchContainer: {
    marginTop: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    gap: 12,
  },
  searchIcon: {
    marginRight: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  clearButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 24,
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  searchTag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchTagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  resultsHeader: {
    marginTop: 24,
    marginBottom: 16,
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  resultsList: {
    gap: 16,
    paddingBottom: 24,
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    height: 145,
  },
  resultCardLeft: {
    width: '50%',
    position: 'relative',
    overflow: 'hidden',
  },
  resultCardImage: {
    width: '100%',
    height: '100%',
  },
  resultPlayButton: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  resultDocumentButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  resultPlayButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 111, 245, 0.4)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  resultButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  resultCardRight: {
    width: '50%',
    padding: 12,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  resultTags: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 6,
  },
  resultRatingTagGradient: {
    borderRadius: 12,
    padding: 1.5,
  },
  resultRatingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10.5,
    gap: 4,
  },
  resultRatingTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  resultBestsellerTagGradient: {
    borderRadius: 12,
    padding: 1.5,
  },
  resultBestsellerTag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10.5,
  },
  resultBestsellerTagText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  resultCardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 4,
    marginBottom: 0,
  },
  resultCardPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    alignSelf: 'flex-end',
  },
});
