import constant from '../constant';

/**
 *
 * @param {String} moduleName
 * @param {String} role
 * @param {String} permissionType
 */
const hasPermission = (
    moduleName: string,
    role: string,
    permissionType: string
    ) => {
    const permissions = constant.permission;

    try {
        // Check permission type of module_name includes role or not
        //
        if (permissions[moduleName][' all '].includes(role)) {
           return true;
        }
        else {
            if (permissions[moduleName][permissionType].includes(role)) {
                return true;
            }
            return false;
        }

    } catch (err) {
        console.log(err);
    }
};
export default hasPermission;