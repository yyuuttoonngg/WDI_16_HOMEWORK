export default function estimateStrength(password=''){
    var result = {}
    result["score"] = 0
    if (password.match(/[A-Z]/) !== null){
        result["score"] = result["score"]+ 1
        result["hasUpperCase"] = true
    }
    if (password.match(/[a-z]/) !== null){
        result["score"] += 1
        result["hasLowerCase"] = true
    }
    if (password.match(/[0-9]/) !== null){
        result["score"] += 1
        result["hasNumber"] = true
    }
    if (password.match(/\W/) !== null){
        result["score"] += 1
        result["hasSpecialChar"] = true
    }
    if (password.length > 8){
        result["score"] += 1
        result["isOver8Char"] = true
    }
    return result

}
