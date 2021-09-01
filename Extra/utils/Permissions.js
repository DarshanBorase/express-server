import constant from "../constant"

/**
 * 
 * @param {String} module_name 
 * @param {String} role 
 * @param {String} permission_type 
 */
const hasPermission = (module_name,role,permission_type) =>{
    let permissions=constant.permissions

    try{
        //Check permission type of module_name includes role or not  
        //  
        if(permissions[module_name]["all"].includes(role)){
           return true;
        }
        else{
            if(permissions[module_name][permission_type].includes(role)){
                return true;
            }
            return false;
        }

    }catch(err){
        console.log(err);
    }
}