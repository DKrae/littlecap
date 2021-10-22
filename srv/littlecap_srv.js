const cds = require('@sap/cds');

module.exports = async function() {
    //const db = await cds.connect.to('db');

    this.on('callStoredProc', async () => {
        try {
            const xsenv = require('@sap/xsenv');
            const dbClass = require("sap-hdbext-promisfied");
            let dbConn = new dbClass(await dbClass.createConnection(xsenv.readServices().sampleups.credentials));
            const hdbext = require("@sap/hdbext");
            const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'SAMPLEPROC');
            const output = await dbConn.callProcedurePromisified(sp, []);
            return output.results;
        } catch(error) {
            console.error(error)
            return {}
        }

        // try {
        //     const xsenv = require('@sap/xsenv');
        //     const dbClass = require("sap-hdbext-promisfied");
        //     let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials));
        //     const hdbext = require("@sap/hdbext");
        //     const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'SAMPLEPROC');
        //     const output = await dbConn.callProcedurePromisified(sp, []);
        //     return output.results;
        // } catch (error) {
        //     console.error(error)
        //     return {}
        // }
    })
}