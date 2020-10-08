const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", () => {
    createToast()
})

function createToast() {
    const toast = document.createElement
    ('div');
    toast.classList.add("toast")
    toast.innerText = "Stop, that tickles..."

    container.appendChild(toast)

    setTimeout(() => {
        toast.remove();
    }, 3000)
}