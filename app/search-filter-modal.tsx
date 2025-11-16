import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import {
  X,
  Sliders,
  Star,
  Clock,
  TrendingUp,
  DollarSign,
} from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

interface SearchFilterModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SearchFilterModal({
  visible,
  onClose,
}: SearchFilterModalProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'business', label: 'Business' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const sortOptions = [
    { id: 'popular', label: 'Most Popular', icon: TrendingUp },
    { id: 'newest', label: 'Newest', icon: Clock },
    { id: 'rating', label: 'Highest Rated', icon: Star },
    { id: 'price-low', label: 'Price: Low to High', icon: DollarSign },
    { id: 'price-high', label: 'Price: High to Low', icon: DollarSign },
  ];

  const priceRanges = [
    { id: 'all', label: 'All Prices' },
    { id: 'free', label: 'Free' },
    { id: 'under-50', label: 'Under $50' },
    { id: '50-100', label: '$50 - $100' },
    { id: 'over-100', label: 'Over $100' },
  ];

  const ratings = [
    { id: 'all', label: 'All Ratings' },
    { id: '4.5', label: '4.5+ Stars' },
    { id: '4.0', label: '4.0+ Stars' },
    { id: '3.5', label: '3.5+ Stars' },
  ];

  const handleApply = () => {
    // Apply filters logic here
    onClose();
  };

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedSort('popular');
    setSelectedPrice('all');
    setSelectedRating('all');
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <LinearGradient
            colors={['#7c6ff5', '#9d8ff7']}
            style={styles.modalHeader}
          >
            <View style={styles.modalHeaderTop}>
              <View style={styles.headerLeft}>
                <Sliders size={24} color="#ffffff" />
                <Text style={styles.modalHeaderTitle}>Filter Courses</Text>
              </View>
              <TouchableOpacity
                onPress={onClose}
                style={styles.closeButton}
              >
                <BlurView
                  intensity={20}
                  style={styles.closeButtonBlur}
                  tint="light"
                >
                  <X size={20} color="#1a1a1a" />
                </BlurView>
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <ScrollView
            style={styles.modalBody}
            showsVerticalScrollIndicator={false}
          >
            {/* Category Filter */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Category</Text>
              <View style={styles.filterOptions}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    style={[
                      styles.filterOption,
                      selectedCategory === category.id &&
                        styles.filterOptionActive,
                    ]}
                    onPress={() => setSelectedCategory(category.id)}
                  >
                    <Text
                      style={[
                        styles.filterOptionText,
                        selectedCategory === category.id &&
                          styles.filterOptionTextActive,
                      ]}
                    >
                      {category.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Sort Options */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Sort By</Text>
              <View style={styles.filterOptions}>
                {sortOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <TouchableOpacity
                      key={option.id}
                      style={[
                        styles.sortOption,
                        selectedSort === option.id && styles.sortOptionActive,
                      ]}
                      onPress={() => setSelectedSort(option.id)}
                    >
                      <Icon
                        size={18}
                        color={
                          selectedSort === option.id ? '#ffffff' : '#7c6ff5'
                        }
                      />
                      <Text
                        style={[
                          styles.sortOptionText,
                          selectedSort === option.id &&
                            styles.sortOptionTextActive,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Price Range */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Price Range</Text>
              <View style={styles.filterOptions}>
                {priceRanges.map((range) => (
                  <TouchableOpacity
                    key={range.id}
                    style={[
                      styles.filterOption,
                      selectedPrice === range.id && styles.filterOptionActive,
                    ]}
                    onPress={() => setSelectedPrice(range.id)}
                  >
                    <Text
                      style={[
                        styles.filterOptionText,
                        selectedPrice === range.id &&
                          styles.filterOptionTextActive,
                      ]}
                    >
                      {range.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Rating Filter */}
            <View style={styles.filterSection}>
              <Text style={styles.filterSectionTitle}>Rating</Text>
              <View style={styles.filterOptions}>
                {ratings.map((rating) => (
                  <TouchableOpacity
                    key={rating.id}
                    style={[
                      styles.filterOption,
                      selectedRating === rating.id && styles.filterOptionActive,
                    ]}
                    onPress={() => setSelectedRating(rating.id)}
                  >
                    <Text
                      style={[
                        styles.filterOptionText,
                        selectedRating === rating.id &&
                          styles.filterOptionTextActive,
                      ]}
                    >
                      {rating.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>

          {/* Footer Actions */}
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleReset}
            >
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleApply}
            >
              <LinearGradient
                colors={['#7c6ff5', '#9d8ff7']}
                style={styles.applyButtonGradient}
              >
                <Text style={styles.applyButtonText}>Apply Filters</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '85%',
    overflow: 'hidden',
  },
  modalHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  modalHeaderTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  closeButtonBlur: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  modalBody: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  filterSection: {
    marginBottom: 32,
  },
  filterSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  filterOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  filterOption: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterOptionActive: {
    backgroundColor: '#7c6ff5',
    borderColor: '#7c6ff5',
  },
  filterOptionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  filterOptionTextActive: {
    color: '#ffffff',
  },
  sortOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    gap: 8,
    width: '100%',
  },
  sortOptionActive: {
    backgroundColor: '#7c6ff5',
    borderColor: '#7c6ff5',
  },
  sortOptionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  sortOptionTextActive: {
    color: '#ffffff',
  },
  modalFooter: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  resetButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#666',
  },
  applyButton: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  applyButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});

