import React, { useEffect, useState, useCallback } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import NotifyItem from "./NotifyItem";
import { getNotify } from "../../api/api";
import COLORS from "../util/Colors";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const NotifyList = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [notifications, setNotification] = useState([]);

  const getDataNotify = async () => {
    const data = await getNotify();
    setNotification(data.data);
  };

  useEffect(() => {
    getDataNotify();
  }, [refreshing]);

  const renderItem = ({ item }: any) => {
    return <NotifyItem item={item} />;
  };

  return (
    <FlatList
      data={notifications}
      showsVerticalScrollIndicator={false}
      inverted={true}
      renderItem={renderItem}
      keyExtractor={(item: any) => item._id}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[COLORS.primaryR]}
          progressBackgroundColor={COLORS.white}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  separator: { padding: 5, backgroundColor: COLORS.primaryRLight },
});

export default NotifyList;
