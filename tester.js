function removeProperty(obj, prop) {

    if (obj.hasOwnProperty(prop)) {
        // return Object.entries(obj).filter(([key,value])=>key !== prop).reduce((acc,[key,value])=>{
        //     acc[key] = value;
        //     return acc;
        // },{})
        const newObj = Object.assign({},obj);
        obj.address.state = "HELLLO";
        return newObj;
    // console.log(obj)
    //   return true
    } else {
      return false
    }}

    
    const randomObject = {
        id: 12345,
        name: "John Doe",
        age: 29,
        email: "johndoe@example.com",
        address: {
            street: "123 Elm Street",
            city: "Springfield",
            state: "IL",
            zipCode: "62701"
        },
        hobbies: ["reading", "coding", "traveling"],
        isActive: true,
        metadata: {
            createdAt: "2025-01-18T10:00:00Z",
            updatedAt: "2025-01-18T10:30:00Z"
        }
    };
    
    console.log(removeProperty(randomObject,"address"));
    