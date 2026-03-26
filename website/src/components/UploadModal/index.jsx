export default function UploadModal() {
    return (
        <div className='p-4 absolute flex-col left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[50vw] h-[50vh] bg-black text-white flex'>
            <h1>Uploading Garment</h1>
            <form action="" className='flex flex-col w-[75%]'>
                <input type="text" placeholder='Title' />
                <input type="text" placeholder="Description" />
                <input className='w-fit' type='submit'/>
            </form>
            <button className='m-2 absolute top-0 right-0 w-5 h-5 bg-white'></button>
        </div>
    )
}