$(document).ready(function() {
    run()
})





async function run() {
    // load the models
    await faceapi.loadMtcnnModel('/models')
    await faceapi.loadSsdMobilenetv1Model('/models')
    await faceapi.loadFaceLandmarkModel('/models')
    await faceapi.loadFaceRecognitionModel('/models')

    // try to access users webcam and stream the images
    // to the video element
    const videoEl = document.getElementById('inputVideo')
    navigator.getUserMedia({ video: {} },
        stream => videoEl.srcObject = stream,
        err => console.error(err)
    )
}



async function onPlay(videoEl) {
    // run face detection & recognition
    // ...

    const mtcnnForwardParams = {
        // number of scaled versions of the input image passed through the CNN
        // of the first stage, lower numbers will result in lower inference time,
        // but will also be less accurate
        maxNumScales: 10,
        // scale factor used to calculate the scale steps of the image
        // pyramid used in stage 1
        scaleFactor: 0.709,
        // the score threshold values used to filter the bounding
        // boxes of stage 1, 2 and 3
        scoreThresholds: [0.6, 0.7, 0.8],
        // mininum face size to expect, the higher the faster processing will be,
        // but smaller faces won't be detected
        minFaceSize: 200
    }
    const MODEL_URL = '/models'

    // const mtcnnForwardParams = {
    //   // limiting the search space to larger faces for webcam detection
    //   minFaceSize: 200
    // }

    // const mtcnnResults = await faceapi.mtcnn(document.getElementById('inputVideo'), mtcnnForwardParams)



    // faceapi.drawDetection('overlay', mtcnnResults.map(res => res.faceDetection), { withScore: false })
    // faceapi.drawLandmarks('overlay', mtcnnResults.map(res => res.faceLandmarks), { lineWidth: 4, color: 'red' })

    // const alignedFaceBoxes = mtcnnResults.map(
    //     ({ faceLandmarks }) => faceLandmarks.align()
    // )

    // const alignedFaceTensors = await extractFaceTensors(input, alignedFaceBoxes)

    // const descriptors = await Promise.all(alignedFaceTensors.map(
    //     faceTensor => faceapi.computeFaceDescriptor(faceTensor)
    // ))

    // // free memory
    // alignedFaceTensors.forEach(t => t.dispose())

    const options = new faceapi.MtcnnOptions(mtcnnForwardParams)
    // const input = document.getElementById('inputVideo')
    const fullFaceDescriptions = await faceapi.detectAllFaces(videoEl, options).withFaceLandmarks().withFaceDescriptors()


    const labels = ['krystal', 'anh-hieu', 'anh-viet']

    const labeledFaceDescriptors = await Promise.all(
        labels.map(async label => {
            // fetch image data from urls and convert blob to HTMLImage element
            const imgUrl = `/assets/img/faces/${label}.jpg`
            const img = await faceapi.fetchImage(imgUrl)

            // detect the face with the highest score in the image and compute it's landmarks and face descriptor
            const fullFaceDescription = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()

            if (!fullFaceDescription) {
                throw new Error(`no faces detected for ${label}`)
            }

            const faceDescriptors = [fullFaceDescription.descriptor]
            return new faceapi.LabeledFaceDescriptors(label, faceDescriptors)
        })
    )


    // 0.6 is a good distance threshold value to judge
    // whether the descriptors match or not
    const maxDescriptorDistance = 0.5
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, maxDescriptorDistance)

    const results = fullFaceDescriptions.map(fd => faceMatcher.findBestMatch(fd.descriptor))



    const boxesWithText = results.map((bestMatch, i) => {
        const box = fullFaceDescriptions[i].detection.box
        const text = bestMatch.toString()
        const boxWithText = new faceapi.BoxWithText(box, text)
        return boxWithText
    })

    const canvas = document.getElementById('overlay')
    canvas.width = 640;
    canvas.height = 480
    faceapi.drawDetection(canvas, boxesWithText)

    setTimeout(() => onPlay(videoEl))
}