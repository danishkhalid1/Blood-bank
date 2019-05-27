import * as firebase from 'firebase';
import '../../firebase/firebaseconfig';
import history from '../../history';


export class BloodBankActions {

    static DONOR_DATA = 'DONOR_DATA';
    static DONOR_FULL_DATA = 'DONOR_FULL_DATA';
    static SIGNUP = 'SIGNUP';
    static SIGNIN = 'SIGNIN';
    static ERROR_SIGNIN = 'ERROR_SIGNIN';
    static ERROR_SIGNUP = 'ERROR_SIGNUP';
    static POST_NEW_DONOR = 'POST_NEW_DONOR';
    static NULL = 'NULL';

    //--------------------------------------SIGN IN------------------------------------------

    static signin(data){
        return dispatch=> {
            firebase.auth().signInWithEmailAndPassword(data.email, data.pass)
        .then((res) => {

            localStorage.setItem("User", JSON.stringify(res.user.uid));
            history.push('/donors');            
            dispatch({ type: BloodBankActions.SIGNIN, payload: res.user.uid });

        })
        .catch((error) => {
            dispatch({ type: BloodBankActions.ERROR_SIGNIN, payload: error.message });
        })
        }
    }


    //--------------------------------------SIGN UP------------------------------------------

    static signup(data) {
        return dispatch => {

            firebase.auth().createUserWithEmailAndPassword(data.email, data.pass)
                .then((res) => {
                    //console.log(res.user.uid);
                    if (res) {

                        firebase.database().ref().child('users').child(res.user.uid).set({
                            username: data.username,
                            email: data.email,
                            number: data.number,
                            bloodgroup: data.bloodgroup,
                            gender: data.gender,
                            Id: res.user.uid,
                        });

                    dispatch({ type: BloodBankActions.SIGNUP, payload: res.user.uid });
                    localStorage.setItem("User", JSON.stringify(res.user.uid));
                    history.push('/donors');    

                    }
                })
                .catch((error) => {
                    dispatch({ type: BloodBankActions.ERROR_SIGNUP, payload: error.message });

                })
        }
    }

    //--------------------------------------FETCHING DATA------------------------------------------

    static getdonordata(data) {
        return dispatch => {
            firebase.database().ref().child('users').orderByChild('bloodgroup').equalTo(data.value).on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: BloodBankActions.DONOR_DATA, payload: dataarr });
            })
        }

    }

    static getdonorFulldata() {
        return dispatch => {
            // let UserItem = localStorage.getItem("User");
            let UserItem = JSON.parse(localStorage.getItem("User"));
            console.log(UserItem);
            firebase.database().ref().child('users').child('G6M0ttGeKGXodFzDlz5l0h3MMQH3').on("value", snap => {
                let dbdata = snap.val();
                let dataarr = [];
                for (var key in dbdata) {
                    dataarr.push(dbdata[key])
                }

                dispatch({ type: BloodBankActions.DONOR_FULL_DATA, payload: dataarr });
            })
        }

    }

    static postnewdonor(data) {

        return dispatch => {
            // console.log(data.value);
            // const ref = firebase.database().ref().child('Donors').push();
            // firebase.database().ref().child('Donors').child(ref.key).set({
                
            //     CompanyName: ,
            //     Email: data.email,
            //     Salary: data.salary,
            //     JobProfile: data.jobprofile,
            //     Bond: data.bond,
            //     Criteria: data.criteria,
            //     id: ref.key,
            // });
            dispatch({ type: BloodBankActions.POST_NEW_DONOR, payload: data });

        }

    }
    //--------------------------------------SIGN OUT------------------------------------------

    static signout() {
        return dispatch => {
            firebase.auth().signOut().then(function () {
                window.location.reload('');
                localStorage.clear()
                    history.push('/');

            }).catch(function (error) {
                alert(error.msg)
            });
        }
    }


}