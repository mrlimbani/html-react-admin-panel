import React from 'react';

export default function Pro() {
    return (
        <React.Fragment>
            <div class="pcoded-content">
                <div class="pcoded-inner-content">
                    {/* <!-- Main-body start --> */}
                    <div class="main-body">
                        <div class="page-wrapper">
                            {/* <!-- Page-header start --> */}
                            <div class="page-header">
                                <div class="row align-items-end">
                                    <div class="col-lg-8">
                                        <div class="page-header-title">
                                            <div class="d-inline">
                                                <h4>User Profile</h4>
                                                <span>lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Page-header end --> */}

                            {/* <!-- Page-body start --> */}
                            <div class="page-body">
                                {/* <!--profile cover start--> */}
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="cover-profile">
                                            <div class="profile-bg-img">
                                                <img class="profile-bg-img img-fluid"
                                                    src="assets/images/user-profile/bg-img1.jpg"
                                                    alt="bg-img" />
                                                <div class="card-block user-info">
                                                    <div class="col-md-12">
                                                        <div class="media-left">
                                                            <a href="#" class="profile-image">
                                                                <img class="user-img img-radius"
                                                                    src="assets/images/user-profile/user-img.jpg"
                                                                    alt="user-img" />
                                                            </a>
                                                        </div>
                                                        <div class="media-body row">
                                                            <div class="col-lg-12">
                                                                <div class="user-title">
                                                                    <h2>Josephin Villa</h2>
                                                                    <span class="text-white">Web designer</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div class="pull-right cover-btn">
                                                                    <button type="button"
                                                                        class="btn btn-primary m-r-10 m-b-5"><i
                                                                            class="icofont icofont-plus"></i>
                                                                        Follow</button>
                                                                    <button type="button"
                                                                        class="btn btn-primary"><i
                                                                            class="icofont icofont-ui-messaging"></i>
                                                                        Message</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--profile cover end--> */}
                                <div class="row">
                                    <div class="col-lg-12">

                                        <ul class="nav nav-tabs md-tabs tab-timeline" role="tablist" id="mytab">
                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab"
                                                    href="#personal" role="tab">Personal Info</a>
                                                {/* <div class="slide"></div> */}
                                            </li>
                                        </ul>

                                        {/* <div class="tab-content"> */}
                                        {/* <div class="tab-pane active" id="personal" role="tabpanel"> */}
                                        <div class="card">
                                            <div class="card-header">
                                                {/* <h5 class="card-header-text">About Me</h5> */}
                                                <div class="edit-info">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="general-info">
                                                                <div class="row">
                                                                    <div class="col-lg-6">
                                                                        <table class="table">
                                                                            {/* <h5>About</h5> */}
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="input-group">
                                                                                            {/* <span
                                                                                                class="input-group-addon"><i
                                                                                                class="icofont icofont-user"></i></span> */}
                                                                                            <input
                                                                                                type="text"
                                                                                                class="form-control"
                                                                                                placeholder="Full Name" />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="form-radio">
                                                                                            <div
                                                                                                class="group-add-on">
                                                                                                <div
                                                                                                    class="radio radiofill radio-inline">
                                                                                                    <label>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            name="radio"
                                                                                                            checked /><i
                                                                                                                class="helper"></i>
                                                                                                        Male
                                                                                                    </label>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="radio radiofill radio-inline">
                                                                                                    <label>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            name="radio" /><i
                                                                                                                class="helper"></i>
                                                                                                        Female
                                                                                                    </label>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <input
                                                                                            id="dropper-default"
                                                                                            class="form-control"
                                                                                            type="text"
                                                                                            placeholder="Select Your Birth Date" />
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <select
                                                                                            id="hello-single"
                                                                                            class="form-control">
                                                                                            <option
                                                                                                value="">
                                                                                                ----
                                                                                                Marital
                                                                                                Status
                                                                                                ----
                                                                                            </option>
                                                                                            <option
                                                                                                value="married">
                                                                                                Married
                                                                                            </option>
                                                                                            <option
                                                                                                value="unmarried">
                                                                                                Unmarried
                                                                                            </option>
                                                                                        </select>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="input-group">
                                                                                            {/* <span
                                                                            class="input-group-addon"><i
                                                                                class="icofont icofont-location-pin"></i></span> */}
                                                                                            <input
                                                                                                type="text"
                                                                                                class="form-control"
                                                                                                placeholder="Address" />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    {/* <!-- end of table col-lg-6 --> */}
                                                                    <div class="col-lg-6">
                                                                        <table class="table">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="input-group">
                                                                                            {/* <span
                                                                            class="input-group-addon"><i
                                                                                class="icofont icofont-mobile-phone"></i></span> */}
                                                                                            <input
                                                                                                type="text"
                                                                                                class="form-control"
                                                                                                placeholder="Mobile Number" />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="input-group">
                                                                                            {/* <span
                                                                            class="input-group-addon"><i
                                                                                class="icofont icofont-social-twitter"></i></span> */}
                                                                                            <input
                                                                                                type="text"
                                                                                                class="form-control"
                                                                                                placeholder="Twitter Id" />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                {/* <tr> */}
                                                                                <td>
                                                                                    <div class="input-group">
                                                                                        {/* <span class="input-group-addon" id="basic-addon1">@</span> */}
                                                                                        <input type="text" class="form-control" placeholder="Twitter Id" />
                                                                                    </div>
                                                                                </td>
                                                                                {/* </tr> --> */}
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="input-group">
                                                                                            {/* <span
                                                                            class="input-group-addon"><i
                                                                                class="icofont icofont-social-skype"></i></span> */}
                                                                                            <input
                                                                                                type="email"
                                                                                                class="form-control"
                                                                                                placeholder="Skype Id" />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>
                                                                                        <div
                                                                                            class="input-group">
                                                                                            {/* <span
                                                                            class="input-group-addon"><i
                                                                                class="icofont icofont-earth"></i></span> */}
                                                                                            <input
                                                                                                type="text"
                                                                                                class="form-control"
                                                                                                placeholder="website" />
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    {/* <!-- end of table col-lg-6 --> */}
                                                                </div>
                                                                {/* <!-- end of row --> */}
                                                                <div class="card-header">
                                                                    <h5 class="card-header-text">Description About
                                                                        Me</h5>

                                                                </div>
                                                                <div class="view-desc">
                                                                    <p>But I must explain to you how all this
                                                                        mistaken idea of denouncing pleasure and
                                                                        praising pain was born and I will give
                                                                        you a complete account of the system,
                                                                        and expound the actual teachings of the
                                                                        great explorer of the truth, the
                                                                        master-builder of human happiness. No
                                                                        one rejects, dislikes, or avoids
                                                                        pleasure itself, because it is pleasure,
                                                                        but because those who do not know how to
                                                                        pursue pleasure rationally encounter
                                                                        consequences that are extremely painful.
                                                                        Nor again is there anyone who loves or
                                                                        pursues or desires to obtain pain of
                                                                        itself, because it is pain, but because
                                                                        occasionally circumstances occur in
                                                                        which toil and pain can procure him some
                                                                        great pleasure. To take a trivial
                                                                        example, which of us ever undertakes
                                                                        laborious physical exercise, except to
                                                                        obtain some advantage from it? But who
                                                                        has any right to find fault with a man
                                                                        who chooses to enjoy a pleasure that has
                                                                        no annoying consequences, or one who
                                                                        avoids a pain that produces no resultant
                                                                        pleasure?" "On the other hand, we
                                                                        denounce with righteous indignation and
                                                                        dislike men who are so beguiled and
                                                                        demoralized by the charms of pleasure of
                                                                        the moment, so blinded by desire, that
                                                                        they cannot foresee the pain and trouble
                                                                        that are bound to ensue; and equal blame
                                                                        belongs to those who fail in their duty
                                                                        through weakness of will, which is the
                                                                        same as saying through shrinking from
                                                                        toil and pain. These cases are perfectly
                                                                        simple and easy to distinguish. In a
                                                                        free hour, when our power of choice is
                                                                        untrammelled and when nothing prevents
                                                                        our being able To Do what we like best,
                                                                        every pleasure is to be welcomed and
                                                                        every pain avoided. But in certain
                                                                        circumstances and owing to the claims of
                                                                        duty or the obligations of business it
                                                                        will frequently occur that pleasures
                                                                        have to be repudiated and annoyances
                                                                        accepted. The wise man therefore always
                                                                        holds in these matters to this principle
                                                                        of selection: he rejects pleasures to
                                                                        secure other greater pleasures, or else
                                                                        he endures pains to avoid worse pain.
                                                                    </p>
                                                                </div>
                                                                <div class="text-center">
                                                                    <a href="#!"
                                                                        class="btn btn-primary waves-effect waves-light m-r-20">Save</a>
                                                                    <a href="#!" id="edit-cancel"
                                                                        class="btn btn-default waves-effect">Cancel</a>
                                                                </div>
                                                            </div>
                                                            {/* <!-- end of edit info --> */}
                                                        </div>
                                                        {/* <!-- end of col-lg-12 --> */}
                                                    </div>
                                                    {/* <!-- end of row --> */}
                                                </div>
                                                {/* <!-- end of edit-info --> */}
                                            </div>

                                            {/* <!-- end of card-block --> */}
                                        </div>
                                        {/* </div> */}
                                        {/* </div> */}

                                    </div>
                                </div>
                            </div>
                            {/* <!-- Page-body end --> */}
                        </div>
                    </div>
                    {/* <div id="styleSelector">

                    </div> */}
                </div>
            </div>
        </React.Fragment>
    )
}
