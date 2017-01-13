/**
 * Created by avishnikin on 12/21/2016.
 */

const initialState = {
    folderName: ["Corporate" , "Private", "Other Activities"],
    subName: [],
    photos: []
    //try to get from server
   /* loadFolderData: function() {
        $.ajax({
            url: '/directories',
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('#GET Error', status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function(){
        return {
            data: {
                participants: []
            }
        };
    },

    componentDidMount: function() {
        this.loadFolderData();
}*/

}

export default function folders(state = initialState, action) {
    switch (action.type) {
        case 'SET_FOLDER':
            return { ...state, folderName: action.payload }
        default:
            return state;
    }

}