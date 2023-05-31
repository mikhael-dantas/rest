export const Oi = () => {
    console.log("oi")
    async function getPosts() {
        "use server"
        console.log("server2")
        return ["lala"]
    }
    return (
        <div>
            <button onClick={() => getPosts()}>
                clicke
            </button>
        </div>
    )
}