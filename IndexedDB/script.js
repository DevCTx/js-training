// Dans la console du navigateur (F12)

// Attendre un peu puis tout exécuter
setTimeout(() => {
  let request = indexedDB.open("Sample DB", 1);

  request.onerror = function(event) {
    console.log("❌ Error opening database");
  };

  request.onupgradeneeded = function(event) {
    let db = event.target.result;
    db.createObjectStore("customers", { keyPath: "id" });
    console.log("✅ Object store créé !");
  };

  request.onsuccess = function(event) {
    let db = event.target.result;
    console.log("✅ Database opened successfully");
    
    // D'abord ajouter un client
    let addTx = db.transaction(["customers"], "readwrite");
    let addStore = addTx.objectStore("customers");
    let addRequest = addStore.add({ id: 1, name: "John Doe", email: "john@example.com" });
    
    addRequest.onsuccess = function() {
      console.log("✅ Data added");
      
      // PUIS le récupérer
      let getTx = db.transaction(["customers"]);
      let getStore = getTx.objectStore("customers");
      let getRequest = getStore.get(1);
      
      getRequest.onsuccess = function(event) {
        console.log("✅ Customer:", getRequest.result);
      };
    };
  };
}, 1000);
138
VM2225:15 ✅ Object store créé !
VM2225:20 ✅ Database opened successfully
VM2225:28 ✅ Data added
VM2225:36 ✅ Customer: {id: 1, name: 'John Doe', email: 'john@example.com'}

