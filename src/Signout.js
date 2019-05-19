import * as firebase from 'firebase';
import './config/firebaseconfig';

export default function Signout() {

    firebase.auth().signOut()
        .then(function () {
            this.props.history.push('/');
        }).catch(function (error) {
            alert(error);
        });
}
