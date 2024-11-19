'use client';

import { useState, useContext } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogClose } from "../../../components/ui/dialog";
import { SemInfoContext } from "../context";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '@/lib/firebase'; 
import { uploadImageToAIDSSemester,uploadImageToAIMLSemester } from '@/actions';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';


const ImageUploadDialog = () => {
    const {  openDialog7,setOpenDialog7,seminfo, branchdrop, component } = useContext(SemInfoContext);
    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false);

    const submitImage = async (e) => {
    e.preventDefault();

    if (!image) {
        console.error("No file selected");
        return;
    }

    setLoading(true);

    try {
        const fileName = `${Date.now()}-${image.name}`;
        const storageRef = ref(storage, `images/${fileName}`);
        const snapshot = await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(snapshot.ref);

        const uploadFunction = branchdrop === "AI&DS" 
            ? uploadImageToAIDSSemester 
            : uploadImageToAIMLSemester;

        const pathToRevalidate = branchdrop === "AI&DS" ? "/aids" : "/aiml";
        await uploadFunction(seminfo, component, downloadURL, pathToRevalidate);

        console.log("Image uploaded and database updated successfully.");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        setLoading(false);
        setOpenDialog7(false);
    }
};

    
  

    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    };

    return (
        <div>
            <Dialog open={openDialog7} onOpenChange={setOpenDialog7}>
            <DialogContent className="w-[90vw] max-w-[400px] p-6 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <DialogClose className="absolute top-3 right-3 text-gray-500 focus:outline-none text-2xl">
                    ✕
                </DialogClose>
                
                <VisuallyHidden>
                    <DialogTitle>Upload Image</DialogTitle>
                </VisuallyHidden>

                <div>
                    <form onSubmit={submitImage}>
                        <input type="file" accept="image/*" onChange={onInputChange} />
                        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                            Submit
                        </button>
                    </form>
                    {loading && <p className="text-blue-500">Uploading, please wait...</p>}
                </div>
            </DialogContent>
        </Dialog>
        </div>   
    );
};

export default ImageUploadDialog;
