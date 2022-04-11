intent("Hello",p=>{
    p.play("Hello, I am Alan. Your personal Assistant")
    p.play("I am here to help manage your bookings, to start please say: Read me the bookings.. or.. Add a booking")
})


// FETCHING THE DATA AND LOOPING FOR ID
let USER_ID = []
//     Get all Data from database
let dataURL = "https://eu-west-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-yjsic/service/bookings/incoming_webhook/bookingData"
api.request(dataURL,(error, res,body)=>{
    let data = JSON.parse(body)

    for (let i = 0; i < data.length; i++) {
        let mongoDB = data[i];
        //                 let userID = mongoDB._id.$oid 
        USER_ID.push(mongoDB)
    }
})

// intent("I want to delete a booking",p=>{
//         p.then(deleteBooking)
// })
intent("(Read Booking|Read me the booking information|Read booking)",p =>{
    p.play("Very Well, What is the (booking|customers) ID number or the customers name that you want to know of?")
    p.then(readingData)
//     p.then(createBooking)
})
intent("(I want to add a booking|add a booking|add)",p=>{
    p.play("Are you sure you want to add a booking?")
    p.then(createBooking)
})
let newBooking = {}
// ADDING NEW DATA TO DATABASE
    let createBooking = context(()=>{
        intent("yes", p=>{
               p.play("Lets start, first what is the name?")
               p.then(nameInput)
            })
        })
    let nameInput = context(()=>{
      intent(`$(NEW_NAME* (.*))`, p=>{
          p.userData.name = p.NEW_NAME.value;
//           newBooking.push(p.userData.name)
          p.then(surnameInput)
          p.play("and the Surname")          
      } )
    })
    let surnameInput = context(()=>{
      intent(`$(NEW_SURNAME* (.*))`, p=>{
          p.userData.surname = p.NEW_SURNAME.value;
          p.then(checkInInput)
          p.play("when would they like to check in date?")
//           p.play(p.userData.name)
      } )
    })//   
  let checkInInput = context(()=>{
      intent(`$(NEW_CHECKIN* (.*))`, p=>{
         p.userData.checkIn = p.NEW_CHECKIN.value
         p.then(checkOutInput)
         p.play("and when will they checkOut?")
      })
  })
    let checkOutInput = context(()=>{
      intent(`$(NEW_CHECKOUT* (.*))`, p=>{
         p.userData.checkOut = p.NEW_CHECKOUT.value
         p.then(roomInput)
         p.play("How many rooms will they need?")
      })
  })
       let roomInput = context(()=>{
      intent(`$(NEW_ROOM* (.*))`, p=>{
         p.userData.room = p.NEW_ROOM.value
          p.then(adultInput)
          p.play("How many adults will bre present?")

      })
  })
         let adultInput = context(()=>{
      intent(`$(NEW_ADULT* (.*))`, p=>{
         p.userData.adult = p.NEW_ADULT.value
         p.then(kidsInput)
          p.play("How many children?")

      })
  })
      let kidsInput = context(()=>{
      intent(`$(NEW_KID* (.*))`, p=>{
         p.userData.kid = p.NEW_KID.value
         p.play("your booking has been completed")
         p.play(`Booking name and surname is ${p.userData.name} ${p.userData.surname}, the
                 checkin date is ${p.userData.checkIn} and they check out on ${p.userData.checkOut}. 
                 There will be ${p.userData.adult} adults and ${p.userData.kid} kids, if it is correct say it is correct, if not say wrong.`)
         p.then(createBooking)
      })
         let createBooking = context(()=>{
             intent("(correct|it is correct)", p=>{
                 p.play("Very Well, your booking has been completed")
                 p.resolve()
//                  p.play(p.userData)
//                  api.axios.post(dataURL)
             })
             intent("wrong",p=>{
                 p.play("I am sorry to hear that, lets start again shall we.")
                 p.play("")
                 p.then(createBooking)
             })
         })
  })
      
      
      
// READ DATA
let getVerifiedData = []
let readingData = context(()=>{
    let CheckedId = []
    //         STRUGGILING TO GET THE USERS KEYWORD TO BE PICKED UP BY ALAN(is semi-working)
    intent(`$(ID_INPUT* (.*))`, p =>{
        let verified = 0;
        for(let i = 0; i<USER_ID.length; i++){
            let name = USER_ID[i].name.toLowerCase() 
            let surname = USER_ID[i].surname.toLowerCase()
            if(USER_ID[i]._id.$oid === p.ID_INPUT.value){
                getVerifiedData = USER_ID[i]
                verified = 1;
            }else if((name === p.ID_INPUT.value.toLowerCase()) || (surname === p.ID_INPUT.value.toLowerCase())){
                getVerifiedData = USER_ID[i]
                verified = 1;
                break;
            }
        }
        if(verified=== 1){
            p.play(`${getVerifiedData.name} ${getVerifiedData.surname}'s booking is for the ${getVerifiedData.checkIn} and they checkout on the ${getVerifiedData.checkOut}. They have booked for ${getVerifiedData.adults} adults and ${getVerifiedData.kids} kids. This bookings unique ID number is ${getVerifiedData._id.$oid}?`)
            p.play("Do you want to change anything?")
            p.then(nextStep)
            //                      p.then(restartAlan)
        }else{
            p.play("That customer ID or Name was not correct, please try again")
            p.then(restartAlan)
        }
    })   
}) 
    let nextStep = context(()=>{
        intent("yes", p=>{
            p.play("You can delete this booking, If you want to delete say Delete")
            p.then(deleteBooking)
        })
        intent("no", p=>{
            p.play("Okay")
            p.resolve()
        })
    })
    let restartAlan = context(()=>{
        intent("(go back| restart| alan stop)")
    })
    //Access to database to CRUD

    let deleteBooking = context(()=>{
        intent("(delete booking|delete|I want to delete)", p=>{
            p.play(`${getVerifiedData.name} ${getVerifiedData.surname}'s booking has been deleted`)
            // Writing the access token to Alan Studio logs
        })
    })
   
    
   
intent("logout",p=>{
    p.play({command:"logout"})
})