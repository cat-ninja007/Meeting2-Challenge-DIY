import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

const SecondScreen = () => {
    const openAlert = (game) => {
        if(game === 'mobileLegends'){
            alert('You choose Mobile Legends!');
        } else if(game === 'pubg'){
            alert('You choose PUBG!')
        }
    }

    return(
        <View style={{
            flex:1, 
            alignItems:'center', 
            justifyContent: 'center',
            backgroundColor: 'lavender'}}>
            <View style={{ backgroundColor: 'skyblue', margin:5, padding:10, borderWidth: 2, borderColor: 'red', borderStyle: 'dashed', borderRadius: 10}}>
                <Text style={{ fontSize: 24, fontWeight: 700, textDecorationLine:'underline', fontFamily:'serif'}}>
                    Mobile Legends
                </Text>
            </View>

            <View style={{backgroundColor:'beige', borderWidth: 3, padding:8, margin: 20}}>
                <Text style={{ textAlign: 'center', fontSize:16, color: 'black'}}>
                    <Text style={{fontWeight:700}}>Mobile Legend</Text> is a multiplayer online battle arena (MOBA) game. The <Text style={{color: 'red'}}>two opposing teams fight</Text> to reach and destroy the enemy's base while defending their own base for control of a path.
                </Text>
            </View>

            <View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 12,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }} 
                    onPress={ () => openAlert('mobileLegends')}>
                    <Text style={{color: 'lightcoral'}}>
                        Mogile Legends Button
                    </Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{fontSize:32, color: 'black', fontWeight: 700, margin: 16}}>
                    vs.
                </Text>
            </View>

            <View style={{backgroundColor: 'cornflowerblue', margin:5, padding:10, borderWidth: 2, borderColor: 'red', borderStyle: 'dotted', borderRadius: 10}}>
                <Text style={{ color: 'white', textDecorationLine:'underline', fontSize:24, fontWeight: 700, fontFamily: 'serif'}}>
                    PUBG
                </Text>
            </View>

            <View style={{backgroundColor: 'beige', borderWidth: 3, padding: 10, margin: 16}}>
                <Text style={{textAlign: 'center', color: 'black', fontSize: 16}}>
                    <Text style={{fontWeight: 800}}>Player Unknown's Battlegrounds,</Text> better known as PUBG, is a multiplayer battle royale game in which <Text style={{color: 'green'}}>players drop onto an island</Text> and <Text style={{color:'blue'}}>fight to be the last one left standing.</Text>
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'white',
                        padding: 12,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }}
                    onPress={ () => openAlert('pubg')}
                >
                    <Text style={{color: 'lightcoral'}}>
                        PUBG Button
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const ChallengeScreen = () => {
    const osAlert = (system) => {
        if(system === 'ios'){
            alert('Welcome to iOS community!');
        } else if(system === 'android'){
            alert('Welcome to Android community!')
        }
    }
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View>
                <Text style={{color: 'blue', fontSize: 18, textTransform: 'uppercase', fontWeight: 700, textDecorationLine: 'underline', margin: 16}}>
                    iOS
                </Text>
            </View>
            <View style={{ backgroundColor: '#F8E09A', padding: 8, borderWidth:1, borderStyle:'dashed', borderRadius: 16, margin: 16}}>
                <Text style={{color: 'black', fontSize: 14, textAlign:'justify'}}>
                    <Text style={{fontWeight:700}}>iOS</Text> (formerly iPhone OS) is a mobile operating system created and developed by <Text style={{color:'magenta', fontWeight:700, fontStyle:'italic'}}>Apple Inc.</Text> exclussively for its hardware. It is the operating system that power many of the company's mobile devices, including the iPhone and iPod Touch.
                </Text>
            </View>
            <View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 12,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }} 
                    onPress={ () => osAlert('ios')}>
                    <Text style={{color: 'lightcoral'}}>
                        iOS Button
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{margin: 16, color: 'black', fontFamily: 'serif', fontSize: 18}}>
                    VS.
                </Text>
            </View>
            <View>
                <Text style={{color: 'green', fontSize: 18, textTransform: 'uppercase', fontWeight: 700, textDecorationLine: 'underline', margin: 16}}>
                    Android
                </Text>
            </View>
            <View style={{ backgroundColor: '#F8E09A', padding: 8, borderWidth:1, borderStyle:'dashed', borderRadius: 16, margin: 16}}>
                <Text style={{color: 'black', fontSize: 14, textAlign:'justify'}}>
                    <Text style={{fontWeight: 700}}>Android</Text> is a mobile operating system based on modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the <Text style={{color: 'purple', fontWeight: 700, fontStyle:'italic'}}>Open Handset Alliance</Text> and commercially sponsored by <Text style={{color:'blue', fontWeight:700, fontStyle:'italic'}}>Google.</Text>
                </Text>
            </View>
            <View>
                <TouchableOpacity 
                    style={{
                        backgroundColor: 'white',
                        padding: 12,
                        margin: 8,
                        borderRadius: 50,
                        borderWidth: 2
                    }} 
                    onPress={ () => osAlert('android')}>
                    <Text style={{color: 'lightcoral'}}>
                        Android Button
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChallengeScreen;
