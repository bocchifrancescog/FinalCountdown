import React from "react"
import {IndexDb, DbManager} from './Db'

export function Client(){
    var self = this;
    var idxdb = new IndexDb('MyDatabase');
    var eventMgr = new DbManager(idxdb, 'events');

    this.addEvent = function(value, onSuccessCallback=function(){}){
        eventMgr.insert(value, onSuccessCallback);
    };

    /*
     * Returns the list of future events objects sorted by date (field 'when')
     */
    this.getEvents = function(onSuccessCallback){
        eventMgr.readAll(function(request){

            console.log(request.result);

            // taking only the future ones
            var res = [];
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            for (var i=0;i<request.result.length;i++){
                var tmp = request.result[i];
                if (tmp.when > yesterday){
                    res.push(tmp);
                }else{
                    //Todo probably I can delete it
                }

            }
            // sort by date
            res.sort(function(a,b) {
                return (a.when > b.when) ? 1 : ((b.when > a.when) ? -1 : 0);
            });

            // running external callback
            onSuccessCallback(res);
            }
        );
    };
}
