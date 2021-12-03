try {
    if(true) {
        throw new Error("이미 존재하는 닉네임입니다.");
    }        
} catch(Error) {
    console.log(Error);
}