    import React, { useState, useEffect } from 'react';
    import {Modal, View, TextInput, Button, StyleSheet, Alert, ImageBackground, TouchableOpacity, Text, Image } from 'react-native';
    import { KeyboardAvoidingView, Platform} from 'react-native';
    import { TouchableWithoutFeedback, Keyboard } from 'react-native';
    import{AsyncStorage } from '@react-native-async-storage/async-storage'
    import {MyRequest,setItem,getItem} from '../util/request';
    export default function LoginScreen({ navigation }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [verificationTime, setVerificationTime] = useState(0);
        const [isChecked, setIsChecked] = useState(false);
        const [showImage, setShowImage] = useState(true);
        const [fieldError, setFieldError] = useState(''); 
        const [showModal, setShowModal] = useState(false);
        const phoneCheck = /^1\d{10}$/;
        useEffect(() => {
            if (verificationTime > 0) {
                const timer = setTimeout(() => {
                    setVerificationTime(verificationTime - 1);
                }, 1000);
                return () => clearTimeout(timer);
            } else {
                setShowImage(true);  // Reset the image after countdown
            }
        }, [verificationTime]);

        const handleLogin = async() => {
            setFieldError('');
            if (!phoneCheck.test(username)) {
                setFieldError('请输入正确的手机号');
                return;
            }
            if (!password) {
                setFieldError('请获取验证码');
                return;
            }
            if (isChecked) {
                var clientDetail="phone="+username+"&smsCode="+password+"&grant_type=password&client_id=mydog&scope=all&client_secret=myDog";
                const response=await MyRequest({
                    url: '/oauth/token?'+clientDetail,
					method: 'POST',
                });
                if (response.access_token!==undefined){
                    await setItem('access_token', response.access_token);
					await setItem('refresh_token', response.refresh_token);
					await setItem('userDetails', response.userDetails);
                    const refresh_token=await getItem('refresh_token');
                    console.log(refresh_token);
                    navigation.replace('MainApp');
                }
                else{
                    setFieldError('登陆失败，请重新登录');
                    return;
                }
            } else {
                setShowModal(true);
            } 
        };
        const handleAgree = () => {
            setIsChecked(true);
            setShowModal(false);    
        };
        
        const handleDisagree = () => {
            setShowModal(false);
            // You can navigate or do something else when the user disagrees
        };

        const requestVerificationCode = async() => {
            if (phoneCheck.test(username)){
                if (verificationTime === 0) {
                    setShowImage(false);  
                    setVerificationTime(60);
                    const response = await MyRequest({
                        url:'/msm/send/'+username,
                    })
                    console.log(response);
                }
            }
            else{
                setFieldError('请输入正确的手机号');
            }
        };

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../assets/登录页.png')} style={styles.container}>
                    <KeyboardAvoidingView
                        style={styles.inputContainer}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} 
                    >
                        
                        <View style={styles.inputContainer}>
                            <View>
                                <Text style={styles.headerText}>新用户登录后自动创建</Text>
                            </View>
                                <TextInput
                                    style={styles.input_phone}
                                    placeholder="请输入手机号"
                                    onChangeText={setUsername}
                                    value={username}
                                />
                                <View style={styles.verificationContainer}>
                                    <TextInput
                                        style={styles.input_verification}
                                        placeholder="请输入验证码"
                                        onChangeText={setPassword}
                                        value={password}
                                    />
                                    <TouchableOpacity style={styles.verifyButton} onPress={requestVerificationCode}>
                                        {showImage ? 
                                            <Image source={require('../assets/获取验证码.png')} style={styles.verifyImage} />
                                            :
                                            <View style={styles.countdownWrapper}>
                                                <Text style={styles.countdownText}>
                                                    {verificationTime > 0 ? `${verificationTime}s` : "Verify"}
                                                </Text>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                    <Text style={styles.errorText}>{fieldError}</Text>
                                </View>
                                <View style={styles.checkboxStatementContainer}>
                                        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                                        <View style={styles.checkbox}>
                                            {isChecked && <Text style={styles.tick}>✓</Text>}
                                        </View>
                                        </TouchableOpacity>
                                        
                                        <View style={styles.statementContainer}>
                                            <Text>我已阅读并同意</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('UserProtocol')}>
                                                <Text style={styles.hyperlink}>《用户协议》</Text>
                                            </TouchableOpacity>
                                            <Text>, </Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('PrivacyProtocol')}>
                                                <Text style={styles.hyperlink}>《隐私政策》</Text>
                                            </TouchableOpacity>
                                            <Text>及</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('UserBehavior')}>
                                                <Text style={styles.hyperlink}>《宠友圈行为规范》</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                                {/* <Button title="Login" onPress={handleLogin} /> */}
                                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                                    <Image source={require('../assets/登录.png')} />
                                </TouchableOpacity>
                            </View>
                    </KeyboardAvoidingView>
                    {showModal && (
                        <View style={styles.modalContainer}>
                            <View style={styles.statementContainerWindow}>
                                <Text>
                                    为了更好保障的保障您的合法权益，请您阅读并同意以下协议
                                    <Text onPress={() => navigation.navigate('UserProtocol')} style={styles.hyperlink}>《用户协议》</Text>
                                    <Text>, </Text>
                                    <Text onPress={() => navigation.navigate('PrivacyProtocol')} style={styles.hyperlink}>《隐私政策》</Text>
                                    <Text>及</Text>
                                    <Text onPress={() => navigation.navigate('UserBehavior')} style={styles.hyperlink}>《宠友圈行为规范》</Text>
                                    珮觅宠物将严格保护您的个人隐私
                                </Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity onPress={handleAgree} style={styles.agreeButton}>
                                    <Image source={require('../assets/agree.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleDisagree} style={styles.diagreeButton}>
                                    <Image source={require('../assets/disagree.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }




    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            padding: 20,
        },
        inputContainer: {
        
            justifyContent: 'center',
            marginBottom: 50,
        
        },
        headerText: {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 18,
        bottom:10, 
        left:2,
        
    },
        input_phone: {
            height: 45,
            borderColor: 'grey',
            borderWidth: 1,
            paddingLeft: 10,
            marginRight: 10,
            marginBottom: 50, 
            marginTop:15,
            borderRadius: 10,
            backgroundColor:'#ebebeb',
        
            
        },
        input_verification: {
        height: 45,
        borderColor: 'grey',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 60, 
        marginRight: 6,
        borderRadius: 10,
        backgroundColor:'#ebebeb',
        flex:1,
    },
        
        verificationContainer: {
            flexDirection: 'row',
            position: 'relative',
            
            
        },
        verifyButton: {
            position: 'absolute',
            top: 2,
            right: 40,
        
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            
            marginLeft: 10,
            borderRadius: 10,
            height: 40,
            width: "20%",
        },
        // countdownBox: {
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     borderWidth: 1,
        //     borderRadius: 10,
        //     lineHeight:45,
        //     height: 45,
        //     width: 130,
        //     textAlign: 'center',
        //     backgroundColor: '#000',
        //     color: '#fff',
            
        // },
        countdownWrapper: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10, 
            backgroundColor: '#000',
            height: 45,
            width: 130,
        },
        countdownText: {
            lineHeight:45,
            color: '#fff',
            textAlign: 'center',
            fontSize: 17,
            fontWeight:'bold',
        },
        checkbox: {
            width: 20,
            height: 20,
            borderWidth: 0,
            backgroundColor: '#cccaca',
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        tick: {
            fontSize: 18,  
            color: 'black'  
        },
        loginButton:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top:270,
        left:16,
        marginTop:20,

        },
        checkboxStatementContainer: {
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            top:200,
            
        },
        hyperlink: {
        color: 'blue',
        textDecorationLine: 'underline',
        },
        statementContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
        },  
        statementContainerWindow: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
        }, 
        errorText: {
            position:'absolute',
            color: 'red',
            marginRight: 50,
            marginTop: 49,
            fontSize: 15,
            fontWeight: 'bold',
        },
        modalContainer: {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            borderColor:'#000',
            borderWidth: 1,
            padding: 30,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            alignItems: 'center',
            marginBottom:15,
            marginLeft:20,
        },
        
        buttonContainer: {
            flexDirection: 'row',
            marginTop: 10,
        
            
        },
        agreeButton: {
            marginTop:10,
            marginRight: 15,  
        },
        diagreeButton: {
            marginTop: 10,
        },
    });