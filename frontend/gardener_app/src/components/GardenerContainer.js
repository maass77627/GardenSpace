import Gardener from "./Gardener"

function GardenerContainer({gardeners}) {
// console.log("garden container loaded")
    console.log(gardeners)
    return (
        <div id="gardencontainer">
            {gardeners.map((gardener) => <Gardener key={gardener.id} gardener={gardener}></Gardener>)}
        </div>
    )
}
export default GardenerContainer