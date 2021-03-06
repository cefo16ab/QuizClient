const SDK = {

    // kode taget fra linket: https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js
    getQueryParam: (sParam) => {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    },

    serverURL: "http://localhost:7777/api",

    request: (options, cb) => {

        let headers = {};
        if (options.headers) {
            Object.keys(options.headers).forEach((h) => {
                headers[h] = (typeof options.headers[h] === 'object') ? JSON.stringify(options.headers[h]) : options.headers[h];
            });
        }

        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            headers: headers,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: (data, status, xhr) => {

                cb(null, data, status, xhr);
            },
            error: (xhr, status, errorThrown) => {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });

    },


    Quiz: {
        createQuiz: (courseId, quizTitle, cb) => {
            SDK.request({
                method: "POST",
                url: "/quiz",
                data: {
                    courseId: courseId,
                    quizTitle: quizTitle,
                },
            }, (err, data) => {


                if (err) return cb(err);
                console.log(err);

                SDK.Storage.persist("courseId", data.courseId);
                SDK.Storage.persist("quizTitle", data.quizTitle);

                cb(null, data);
            });
        },


        createQuestion: (quizId, questionTitle, cb) => {
            SDK.request({
                method: "POST",
                url: "/question",
                data: {
                    quizId: quizId,
                    questionTitle: questionTitle,
                },
            }, (err, data) => {


                if (err) return cb(err);
                console.log(err);


                cb(null, data);
            });
        },

        createChoice: (questionId, choiceTitle, answer, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: {
                    questionId: questionId,
                    choiceTitle: choiceTitle,
                    answer: answer,
                },
            }, (err, data) => {


                if (err) return cb(err);
                console.log(err);


                cb(null, data);
            });
        },

        deleteQuiz: (id, cb) => {


            SDK.request({
                method: "DELETE",
                url: "/quiz/" + id


            }, (err, data) => {
                if (err) return cb(err);
                cb(null, data);
            });
        },

        loadQuestions: (quizId, callback) => {


            SDK.request({
                method: "GET",
                url: "/question/" + quizId,

            }, (err, data) => {
                if (err) return callback(err);
                callback(null, data);
            });
        },


        findById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/quiz" + "/" + id,
            }, cb);
        },

        findQuestionById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/question" + "/" + id,
            }, cb);
        },

        findChoiceById: (id, cb) => {
            SDK.request({
                method: "GET",
                url: "/choice" + "/" + id,
            }, cb);
        },

    },

    Choice: {
        createChoice: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/choice",
                data: data,

            }, cb);
        },

    },
    question: {
        createQuestion: (data, cb) => {
            SDK.request({
                method: "POST",
                url: "/question",
                data: data,

            }, cb);
        }
    },
    User: {

        current: () => {
            return SDK.Storage.load("user");
        },
        createUser: (firstName, lastName, userName, password, type, cb) => {
            SDK.request({
                method: "POST",
                url: "/user/",
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    username: userName,
                    password: password,
                    type: type,
                }
            }, cb);
        },
        logOut: () => {

            SDK.Storage.remove("userId");
            SDK.Storage.remove("user");
            window.location.href = "index.html";
        },



        deleteUser: (id, cb) =>{
            SDK.request({
                    method: "DELETE",
                    url: "/user/" + id,
                },

                (err, data) => {

                    if (err) return cb(err);


                    cb(null, data);
                });


        },
        login: (username, password, cb) => {
            SDK.request({
                data: {
                    username: username,
                    password: password,

                },
                url: "/user/login",
                method: "POST"
            }, (err, data) => {

                //On login-error
                if (err) return cb(err);

                SDK.Storage.persist("userId", data.userId);
                SDK.Storage.persist("user", data);

                cb(null, data);

            });
        },



        loadNavUser: (cb) => {
            $("#nav-container-user").load("navUser.html", () => {
                const currentUser = SDK.User.current();
                if (currentUser) {
                    $(".navbar-right").html(`
           
            <li><a href="#" id="logout-link">Logout</a></li>
          `);

                } else {
                    $(".navbar-right").html(`
            <li><a href="login.html">Log-in <span class="sr-only">(current)</span></a></li>
          `);
                }
                $("#logout-link").click(() => SDK.User.logOut());
                cb && cb();


            });


        },


        loadNav: (cb) => {
            $("#nav-container").load("nav.html", () => {
                const currentUser = SDK.User.current();
                if (currentUser) {
                    $(".navbar-right").html(`
           
            <li><a href="#" id="logout-link">Logout</a></li>
          `);

                } else {
                    $(".navbar-right").html(`
            <li><a href="login.html">Log-in <span class="sr-only">(current)</span></a></li>
          `);
                }
                $("#logout-link").click(() => SDK.User.logOut());
                cb && cb();


            });


        }


    },



    Storage: {
        prefix: "DøkQuizSDK",
        //Function for storing element in local storage
        persist: (key, value) => {
            window.localStorage.setItem(SDK.Storage.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        //Function for loading element from local storage
        load: (key) => {
            const val = window.localStorage.getItem(SDK.Storage.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        },
        //Function for deleting element in local storage
        remove: (key) => {
            window.localStorage.removeItem(SDK.Storage.prefix + key);
        }
    },


};