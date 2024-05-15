import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "src/utils/Icon";
import NewsAPI, { INews } from "../../api/User/NewsApi";

function NewsScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState<INews[]>([]);

  const fetchNewsData = () => {
    NewsAPI.getNewsList()
      .then((response) => {
        setNewsData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  const handleDeleteNews = (id: number) => {
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn xóa bài tin này?",
      [
        {
          text: "Hủy",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Xóa",
          onPress: () => {
            setLoading(true);
            NewsAPI.deleteNews(id)
              .then(() => {
                setNewsData((prevData) => prevData.filter((item) => item.id !== id));
                setLoading(false);
                Alert.alert("Thông báo", "Xóa bài tin thành công");
                fetchNewsData(); 
              })
              .catch((error) => {
                console.error("Error deleting news:", error);
                setLoading(false);
                Alert.alert("Lỗi", "Đã xảy ra lỗi khi xóa bài tin");
              });
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon icon="back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bảng tin</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateNewRoute")} style={styles.addButton}>
          <Icon icon="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.newsContainer}>
        {loading ? (
          <ActivityIndicator style={styles.loader} size="large" color="#D2672A" />
        ) : (
          <View style={styles.newsWrapper}>
            {newsData.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.newsItem}
                onPress={() => {
                }}
              >
                <Text style={styles.newsTitle}>{item.topic}</Text>
                <Text style={styles.newsDate}>{item.date}</Text>
                <Text style={styles.newsContent}>{item.detail}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteNews(item.id)}>
                  <Text style={styles.deleteButtonText}>Xóa</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F1D6",
  },
  header: {
    backgroundColor: "#D2672A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomRightRadius: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    padding: 10,
  },
  addButton: {
    padding: 10,
  },
  newsContainer: {
    flex: 1,
  },
  newsWrapper: {
    flexGrow: 1,
    padding: 20,
  },
  newsItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  newsDate: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  newsContent: {
    fontSize: 16,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D88249",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NewsScreen;

