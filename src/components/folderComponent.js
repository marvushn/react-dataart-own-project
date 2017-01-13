/**
 * Created by avishnikin on 12/22/2016.
 */
import React, { PropTypes, Component } from 'react'

export default class folders extends Component {
    onfolderClick(e) {
        this.props.setFolder(+e.target.textContent)
    }
    render () {
        console.log(this.props.data);
        const { folderName, subName } = this.props

        const folderOneByOne = folderName.map((folder) =>
             //return (
                 <tr>
                    <td>
                      {folder}
                    </td>
                 </tr>
             //)
        );

        return <div>
                    <table className="foldersContainer">
                        <tbody>
                                { folderOneByOne }
                        </tbody>
                    </table>
                    <h3>active folder is {folderName}</h3>
               </div>
    }
}

/*Folder.propTypes = {
    folderName: PropTypes.string.isRequired,
    subName: PropTypes.string.isRequired,
    setFolder: PropTypes.func.isRequired
}*/