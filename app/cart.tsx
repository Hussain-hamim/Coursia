import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  ShoppingCart,
  Star,
  Play,
  FileText,
  Trash2,
  Plus,
  Minus,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';

export default function CartScreen() {
  const router = useRouter();

  const cartItems = [
    {
      id: '1',
      title: 'IOS Design Basics',
      author: 'Phoenix Baker',
      authorRole: 'Mentor',
      authorAvatar:
        'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      image:
        'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 256,
      rating: 4.5,
      isBestseller: true,
      quantity: 1,
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
      price: 189,
      rating: 4.8,
      isBestseller: true,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const navigateToCourseDetails = (courseData: any) => {
    router.push({
      pathname: '/course-details',
      params: courseData,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#7c6ff5"
        translucent={false}
      />
      <LinearGradient colors={['#7c6ff5', '#9d8ff7']} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <BlurView intensity={20} style={styles.backButtonBlur} tint="light">
              <ChevronLeft size={24} color="#1a1a1a" />
            </BlurView>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Cart</Text>
          <TouchableOpacity style={styles.cartButton}>
            <BlurView intensity={20} style={styles.cartButtonBlur} tint="light">
              <ShoppingCart size={24} color="#1a1a1a" />
            </BlurView>
            {cartItems.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={styles.emptyCartContainer}>
              <ShoppingCart size={64} color="#d0d0d0" />
            </View>
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptyText}>
              Start adding courses to your cart to see them here
            </Text>
            <TouchableOpacity
              style={styles.browseButton}
              onPress={() => router.push('/(tabs)')}
            >
              <Text style={styles.browseButtonText}>Browse Courses</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <View style={styles.itemsHeader}>
              <Text style={styles.itemsCount}>
                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in
                cart
              </Text>
            </View>

            <View style={styles.cartItemsList}>
              {cartItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.cartItemCard}
                  onPress={() =>
                    navigateToCourseDetails({
                      id: item.id,
                      title: item.title,
                      author: item.author,
                      authorRole: item.authorRole,
                      authorAvatar: item.authorAvatar,
                      image: item.image,
                      price: `$${item.price}`,
                      rating: item.rating.toString(),
                      reviews: '123',
                      students: '1.2k',
                      duration: '5 Hours',
                      lessons: '24',
                    })
                  }
                >
                  <View style={styles.cartItemLeft}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.cartItemImage}
                      resizeMode="cover"
                    />
                    <TouchableOpacity style={styles.cartPlayButton}>
                      <BlurView
                        intensity={20}
                        style={styles.cartPlayButtonBlur}
                        tint="light"
                      >
                        <Play size={14} color="#ffffff" fill="#ffffff" />
                      </BlurView>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartDocumentButton}>
                      <BlurView
                        intensity={20}
                        style={styles.cartDocumentButtonBlur}
                        tint="light"
                      >
                        <FileText size={14} color="#1a1a1a" />
                      </BlurView>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cartItemRight}>
                    <View style={styles.cartItemHeader}>
                      <View style={styles.cartItemTags}>
                        <LinearGradient
                          colors={['#d0d0d0', '#e8e8e8', '#d0d0d0']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={styles.cartRatingTagGradient}
                        >
                          <View style={styles.cartRatingTag}>
                            <Star size={10} color="#ffa500" fill="#ffa500" />
                            <Text style={styles.cartRatingTagText}>
                              {item.rating}
                            </Text>
                          </View>
                        </LinearGradient>
                        {item.isBestseller && (
                          <LinearGradient
                            colors={['#d4c5ff', '#e6deff', '#d4c5ff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.cartBestsellerTagGradient}
                          >
                            <View style={styles.cartBestsellerTag}>
                              <Text style={styles.cartBestsellerTagText}>
                                Bestseller
                              </Text>
                            </View>
                          </LinearGradient>
                        )}
                      </View>
                      <TouchableOpacity style={styles.deleteButton}>
                        <Trash2 size={16} color="#ff6b6b" />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.cartItemTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={styles.cartItemAuthor} numberOfLines={1}>
                      {item.author} • {item.authorRole}
                    </Text>
                    <View style={styles.cartItemFooter}>
                      <Text style={styles.cartItemPrice}>${item.price}</Text>
                      <View style={styles.quantityControls}>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Minus size={14} color="#666" />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.quantityButton}>
                          <Plus size={14} color="#666" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.summaryCard}>
              <Text style={styles.summaryTitle}>Order Summary</Text>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Tax</Text>
                <Text style={styles.summaryValue}>${tax.toFixed(2)}</Text>
              </View>
              <View style={styles.summaryDivider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryTotalLabel}>Total</Text>
                <Text style={styles.summaryTotalValue}>
                  ${total.toFixed(2)}
                </Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.bottomBar}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
  backButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  cartButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    position: 'relative',
  },
  cartButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ff6b6b',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
    paddingHorizontal: 4,
    zIndex: 10,
  },
  cartBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyCartContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 24,
    marginBottom: 24,
  },
  browseButton: {
    backgroundColor: '#7c6ff5',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 16,
  },
  browseButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  itemsHeader: {
    marginTop: 24,
    marginBottom: 16,
  },
  itemsCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  cartItemsList: {
    gap: 16,
    marginBottom: 24,
  },
  cartItemCard: {
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
    height: 140,
  },
  cartItemLeft: {
    width: '45%',
    position: 'relative',
    overflow: 'hidden',
  },
  cartItemImage: {
    width: '100%',
    height: '100%',
  },
  cartPlayButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
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
  cartDocumentButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
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
  cartPlayButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(124, 111, 245, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.6)',
  },
  cartDocumentButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  cartItemRight: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
    minWidth: 0,
  },
  cartItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  cartItemTags: {
    flexDirection: 'row',
    gap: 6,
    flex: 1,
  },
  cartRatingTagGradient: {
    borderRadius: 10,
    padding: 1,
  },
  cartRatingTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 9,
    gap: 3,
  },
  cartRatingTagText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  cartBestsellerTagGradient: {
    borderRadius: 10,
    padding: 1,
  },
  cartBestsellerTag: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 9,
  },
  cartBestsellerTagText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  deleteButton: {
    padding: 4,
  },
  cartItemTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
    flexShrink: 1,
  },
  cartItemAuthor: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  cartItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartItemPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7c6ff5',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
    minWidth: 20,
    textAlign: 'center',
  },
  summaryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
  summaryTotalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  summaryTotalValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7c6ff5',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  totalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  totalLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7c6ff5',
  },
  checkoutButton: {
    flex: 1,
    backgroundColor: '#7c6ff5',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});
