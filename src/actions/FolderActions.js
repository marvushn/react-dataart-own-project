/**
 * Created by avishnikin on 12/26/2016.
 */
export function setFolder(folderName) {
    return {
        type: 'SET_FOLDER',
        payload: folderName
    }
}