export function checkSession(spawnedSession, IdEngineConfig) {

    // Is settion allready activated?
    if (spawnedSession?.IsActivated()) {
        return;
    }

    try {
        // get dynamic key
        const dynKey = spawnedSession.GetActivationRequest();

        const req = new XMLHttpRequest();
        req.open('POST', IdEngineConfig.activationUrl, false); // false for sync request
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // json content type will be preflighted!
        req.send("dynKey=" + dynKey);

        console.log("dynKey=" + dynKey);
        if (req.status === 200 & req.responseText.length > 0) {
            spawnedSession.Activate(req.responseText); // sesson activation
        } else {
            postMessage({ requestType: 'wasmEvent', data: { type: 'error', desc: 'something wrong with activation server' } });
            throw Error('something wrong with activation server');
        }

    } catch (error) {
        postMessage({ requestType: 'wasmEvent', data: { type: 'error', desc: error } });
    }
}


/**
*  GetTemplateDetectionResultsCount - Returns the number of detected document pages (templates).
*  GetTemplateDetectionResult: Returns the document page (template) detection result by index.
*  (Rectangles of document, photo and etc).
*/

export function getTemplateDetection(result) {
    const tempData = [];
    for (let i = 0; i < result.GetTemplateDetectionResultsCount(); i++) {
        //
        const templateResult = result.GetTemplateDetectionResult(i);
        const tmpl = [];
        const q = templateResult.GetQuadrangle();
        tmpl.push(q.GetPoint(0));
        tmpl.push(q.GetPoint(1));
        tmpl.push(q.GetPoint(2));
        tmpl.push(q.GetPoint(3));
        tempData.push(tmpl);
    }
    return tempData;
}

/**
*  GetTemplateSegmentationResultsCount - Returns the number of document page
*  (templates) segmentation results.
*  GetTemplateSegmentationResult: Returns the document page (template)
*  segmentation result by index.
*  Rectangles of mrz zones and other text fields.
*/

export function getTemplateSegmentation(result) {
    const tempData = [];
    for (let i = 0; i < result.GetTemplateSegmentationResultsCount(); i++) {
        const IdTemplateSegmentationResult = result.GetTemplateSegmentationResult(i);

        for (let QuadranglesMapIterator = IdTemplateSegmentationResult.RawFieldQuadranglesBegin();
            !QuadranglesMapIterator.Equals(IdTemplateSegmentationResult.RawFieldQuadranglesEnd());
            QuadranglesMapIterator.Advance()) {
            const sgm = [];
            const q = QuadranglesMapIterator.GetValue();
            sgm.push(q.GetPoint(0));
            sgm.push(q.GetPoint(1));
            sgm.push(q.GetPoint(2));
            sgm.push(q.GetPoint(3));
            tempData.push(sgm);
        }
    }
    return tempData;
}

/* Get text fields */
export function getTextFields(result) {

    const data = {};
    const tf = result.TextFieldsBegin();
    for (; !tf.Equals(result.TextFieldsEnd()); tf.Advance()) {
        const key = tf.GetKey();
        const field = tf.GetValue();
        data[key] = field.GetValue().GetFirstString();
    }
    return data;
}

/* Get images fields */
export function getImageFields(result) {
    const images = {};

    const img = result.ImageFieldsBegin();
    for (; !img.Equals(result.ImageFieldsEnd()); img.Advance()) {
        const key = img.GetKey();
        const field = img.GetValue();
        images[key] = field.GetValue().GetBase64String();
    }
    return images;

}