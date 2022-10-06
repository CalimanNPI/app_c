import React, { useEffect, useState, useCallback } from "react";
import { FlatList, SafeAreaView, RefreshControl, Button } from "react-native";
import NotifyItem from "./NotifyItem";
import { getNotify, setNotify, setPublicity } from "../../api/api";

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
    <SafeAreaView>
      <Button onPress={setNotify} title="enviar notificacion" />
      {/*<Button onPress={setPublicity} title="enviar publi" />*/}
      <FlatList
        data={notifications}
        showsVerticalScrollIndicator={false}
        inverted={true}
        renderItem={renderItem}
        keyExtractor={(item: any) => item._id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#FF3B30"]}
            progressBackgroundColor={"#F2F2F7"}
          />
        }
      />
    </SafeAreaView>
  );
};

export default NotifyList;
