import Promise from 'es6-promise';
import $ from 'jquery';
import { SHOW_LOADING_SPINNER, HIDE_LOADING_SPINNER } from '../constants';

let livingAjax = 0;

//This a redux api call middleware, if you want to trigger this middleware, 
//you must keep the action foramt like this:
// {
//    API_CALL: true, {must specify}
//    url, '',{must specify}
//    types: [REQ_START, REQ_SUCC, REQ_FAIL], 
//    method: 'GET' OR 'POST', {default GET} 
//    data: {}
//} 
export default function apiMiddleware({ dispatch }) {
    function liveAjaxCountUp() {

        if (livingAjax === 0) {
            document.body.classList.add('hide-scrollbar');
            dispatch({type: SHOW_LOADING_SPINNER});
        }

        livingAjax++;
    }

    function livingAjaxCountDown() {
        window.setTimeout(function() {
            livingAjax--;

            if(livingAjax === 0) {
                document.body.classList.remove('hide-scrollbar');
                dispatch({type: HIDE_LOADING_SPINNER});
            }
        }, 0);
    }

    return function (next) {
        return function(action) {
            if(action.API_CALL) {
                const {url, data = {}, method = 'GET', types: [REQ_START = 'dummy', REQ_SUCC = 'dummy', REQ_FAIL = 'dummy']} = action;

                liveAjaxCountUp();
                dispatch({type: REQ_START});

                const promise = Promise.resolve($.ajax({
                    url,
                    method,
                    data,
                    dataType: 'json',
                    processData: method.trim().toLowerCase() === 'get'
                }));

                promise.then(function({data}){
                   livingAjaxCountDown();
                   dispatch({type: REQ_SUCC, payload: data});
                }, function() {
                    console.log(arguments);
                    livingAjaxCountDown();
                    dispatch({type: REQ_FAIL, error: arguments});
                })

                return promise;
            } else {
                next(action);
            }
        }
    }
}
