import { View, Text } from 'react-native'
import { Drawer } from 'expo-router/drawer'

const DrawerLayout = () => {
  return <Drawer>
    <Drawer>
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'User',
            title: 'Users',
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Schedule',
            title: 'Schedules',
          }}
        />
      </Drawer>
  </Drawer>
}

export default DrawerLayout;