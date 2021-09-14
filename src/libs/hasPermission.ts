import { permissions } from './constant';

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
        console.log(moduleName, role, permissionType, permissions );

    try {

        if (permissions[moduleName][permissionType].includes(role)) {
            console.log(
              `${role} has permission to ${permissionType}  ${moduleName}`
            );
            return true;
          } else {
            console.log(
              `${role} not has permission to ${permissionType}  ${moduleName}`
            );
        }
    } catch (err) {
        console.log(err);
    }
};
export default hasPermission;