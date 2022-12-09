import {
    font,
    resize,
    color,
    hp,
    wp,
    wps,
    square,
    width,
    height,
} from 'globalStyle';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    headingText: {
       // fontFamily: font.two.bold,
        color: color.textheadingDark,
        fontSize: hp(24),
        paddingHorizontal: wp(16),
        alignSelf: 'flex-start',
        paddingVertical: hp(8),
    },
    subHeadingText: {
        
        color: color.textLight,
        fontSize: hp(16),
        paddingHorizontal: wp(16),
        alignSelf: 'flex-start',
        // paddingVertical: hp(8),
    },
    activeBtn: (isActive) => ({
        width: wps(32),
        height: hp(48),
        borderRadius: hp(4),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: isActive ? color.app : color.unactiveBtn,
    }),
    activeBtnText: (isActive) => ({
        textAlignVertical: 'center',
        color: color.black,
       
        fontSize: hp(16, 0.5),
        letterSpacing: 0.05
    }),
    unactiveBtn: {
        width: wps(32),
        height: hp(48),
        borderRadius: hp(4),
        backgroundColor: color.unactiveBtn,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'

    },
    unactiveBtnText: {
       
        fontSize: hp(16),
        color: color.black
    },
    inputBlock: {

    },
    inputErrBlock: {

    },
    inputText: {

    },
    inputPlace: {

    },




    headeSubBlock: {
        // width: width / 3,
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    headeSubBlock1: {
        // width: width / 3,
        // alignItems: 'flex-end',
        paddingRight: wp(20),
    },
    addBlock: {
        // marginRight: wp(20),
        height: hp(30),
        alignItems: 'center',
        justifyContent: 'center',
        width: hp(30),
        borderRadius: hp(30) / 2,
        backgroundColor: color.app,
    },
    searchButton: {
        paddingHorizontal: wp(20),
        paddingVertical: hp(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.app,
        borderRadius: hp(20),
    },
    text: {
        fontSize: hp(25),
        color: '#000',
       
    },
    wrapper: {
        height: height / 2
    },
    slide1: {
        flex: 1,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    unActiveTextStyle: {
        fontSize: wp(16),
        color: color.textDark,
       
        // textAlign: 'left',
        // alignSelf: 'flex-start',
        // paddingLeft: wp(10),
    },
    mainBottomStyle: {
        // flexDirection: 'row',
        // alignSelf: 'center',
        // height:resize.hp(50),
        // justifyContent: 'space-around',
        // alignItems: 'center',
        // overflow: 'hidden',
        // borderColor: '#000',
        // bottom: 0,
        // backgroundColor:color.white,
        // borderBottomWidth: 2,
        flexDirection: 'row',
        alignSelf: 'center',
        // width: resize.width - resize.wp(32),
        justifyContent: 'space-around',
        alignItems: 'center',
        height: resize.hp(50),
        borderWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        overflow: 'hidden',
        borderColor: '#000',
        backgroundColor: color.bgDark,
        // borderBottomWidth: 2,
    },
    activeTextStyle: {
        fontSize: wp(16),
        color: color.app,
        // textAlign: 'left',
        // alignSelf: 'flex-start',
        // paddingLeft: wp(10),
       
    },

    headerText: {
        fontSize: hp(36),
       
        color: color.textDark,
    },
    searchIcon: hp(18),
    topCard: {
        height: hp(150),
        width: wps(32),
        marginTop: hp(30),
        // backgroundColor: color.bg,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: hp(8),
    },
    image: {
        height: hp(50),
        width: hp(50),
        resizeMode: 'contain',
    },
    text: {
        marginTop: hp(8),
        fontSize: hp(14),
        
        color: color.app,
    },
    centerCard: {
        width: wps(32),
        marginTop: hp(8),
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    innerCard: {
        height: hp(120),
        width: wps(40) / 2,
        alignItems: 'center',
        backgroundColor: color.bg,
        borderRadius: hp(8),
        justifyContent: 'center',
    },
    bottomCard: {
        height: hp(150),
        width: wps(32),
        marginTop: hp(8),
        backgroundColor: color.bg,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: hp(8),
    },
});
