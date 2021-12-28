import React from 'react'
import "./user.css";
import { Link } from 'react-router-dom';
import { Person, CalendarToday, MailOutline, PhoneAndroid, Publish, LocationSearching } from '@material-ui/icons';

function User() {
    return (
        <>
            <div className="user">
                <div className="userTitleContainer">

                    <h1 className="userTitle">Edit User</h1>
                    <Link to="/newuser"><button className="userAddButton">
                        Create
                    </button></Link>
                </div>

                <div className="usercontainer">
                    <div className="userleft">
                        <div className='userdetailsleft'>
                            <div className="imgleft">
                                <img className='userimg' src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
                            </div>
                            <div className="detailsofuser">
                                <h6 className='userfont'>
                                    Suchit verma</h6>
                                <p className='userfont1'>Software Engineer</p>
                            </div>



                        </div>
                        <div className="useraccdetails">
                            <p className='details1'>Account   Details</p>
                            <div className="useravatar">
                                <Person className='avatar' />
                                <p className='usercontent'>Suchit22nov14</p>
                            </div>
                            <div className="useravatar">
                                <CalendarToday className='avatar' />
                                <p className='usercontent'>22.06.1997</p>
                            </div>
                            <p className='details1'>Contact Details</p>
                            <div className="useravatar">
                                <PhoneAndroid className='avatar' />
                                <p className='usercontent'>+91 6392627733</p>
                            </div>
                            <div className="useravatar">
                                <MailOutline className='avatar' />
                                <p className='usercontent'>suchit22nov@gmail.com</p>
                            </div>
                            <div className="useravatar">
                                <LocationSearching className='avatar' />
                                <p className='usercontent'>Lucknow | Uttar Pradesh</p>
                            </div>
                        </div>




                    </div>
                    <div className="userright">

                        <div className="rightleft">
                            <div className="edit">
                                Edit
                            </div>


                            <div className="inputdetails">
                                <label htmlFor="inputtag" className="details"> Username</label>
                                <input type="text" id="inputtag" className="userinput" placeholder='suchit22nov' />
                            </div>
                            <div className="inputdetails">
                                <label htmlFor="inputtag" className="details"> Full Name</label>
                                <input type="text" id="inputtag" className="userinput" placeholder='suchit verma' />
                            </div>
                            <div className="inputdetails">
                                <label htmlFor="inputtag" className="details"> Email</label>
                                <input type="text" id="inputtag" className="userinput" placeholder='suchit22nov@gmail.com' />
                            </div>
                            <div className="inputdetails">
                                <label htmlFor="inputtag" className="details"> Phone</label>
                                <input type="text" id="inputtag" className="userinput" placeholder='+9163926277..' />
                            </div>
                            <div className="inputdetails">
                                <label htmlFor="inputtag" className="details"> Address</label>
                                <input type="text" id="inputtag" className="userinput" placeholder='Lucknow | Uttar Predesh' />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    className="userUpdateImg"
                                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </div>





                </div>
            </div>
        </>
    )
}

export default User;
