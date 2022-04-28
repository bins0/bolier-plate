const mongoose =require('mongoose');

const userSchema = mongoose.Scgena({
    name: {
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,//스페이스없애줌
        unique:1//똑같은 이메일쓰지못하게
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{//관리자인지 클라이언트인지 구별하기위해 숫자1:관리자 0:일반유저
        type:Number,
        default:0//role지정안하면 자동 숫자 0 
        },
    image:String,
    token:{//유효성관리
        type:String
    },
    tokenExp:{//위의 토큰 사용기간
        type:Number
    }
})

//('모델이름') 스키마
const User = mongoose.model('User',userSchema)
//다른파일에도 이모델을 사용하게
module.exports = { User }