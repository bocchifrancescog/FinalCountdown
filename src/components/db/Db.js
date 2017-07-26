export function IndexDb(name) {

  var self = this;

  self.NAME = name;
  self.VERSION = 1;
  self.objectsStores = [
    new ObjectStore(
        'events',
        [{'name' : 'when', 'keyPath': 'when', 'unique': false}]
        )
  ];

  self._db = null;
  self._conn = null;

  self.init = function() {
    self._db = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if (!self._db) {
       window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }

    self._conn = self.openDB();


  };

  self.getDb = function(){
    return self._db;
  }

  self.openDB = function(){
    //self._db.deleteDatabase(self.NAME);

    var conn = self._db.open(self.NAME, self.VERSION);

    //this creates the schemas
    conn.onupgradeneeded = function(){

        self._createObjectStores(self.objectsStores);

    }
    return conn;
  }

  self._createObjectStores = function(objectStores){
    for (var i=0; i<objectStores.length; i++){
        var objStore = objectStores[i];
        console.log(objStore)
        var newObjStore = self._conn.result.createObjectStore(objStore.name, objStore.options);

        // add indexes
        for(var j=0; j<objStore.indexes.length; j++){
            var index = objStore.indexes[j];
            newObjStore.createIndex(index.name, index.keyPath, { 'unique': index.unique });
        }
    }
  }


  self.init();

};

function ObjectStore(name, indexes, options={keyPath: "id", autoIncrement : true }){
    this.name = name;
    this.options = options;
    this.indexes = indexes;
}

/*
 * This one is responsible of CRUD operations
 */
export function DbManager(db, objectStoreName){
    var self = this;
    self._db = db;
    self.objStoreName = objectStoreName;

    self.insert = function(obj, onSuccessCallback){
        var conn = self._db.openDB();
        conn.onsuccess = function(event) {
          var tx = this.result.transaction(self.objStoreName, "readwrite");
          var store = tx.objectStore(self.objStoreName);
          store.put(obj);

          // Callback
          onSuccessCallback(store);
        };

    }

    self.readAll = function(onSuccessCallback){
        var conn = self._db.openDB();
        conn.onsuccess = function(event) {
            var tx = this.result.transaction(self.objStoreName);
            var store = tx.objectStore(self.objStoreName);
            var request = store.getAll();
            request.onsuccess = function(){
                // Callback
                onSuccessCallback(request);
               }
            }
    }
}
