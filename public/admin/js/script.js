// Button Status

const buttonsStatus = document.querySelectorAll("[button-status]")
if(buttonsStatus.length > 0) {
    let url = new URL(window.location.href)

    buttonsStatus.forEach(button => {
        button.addEventListener ("click", () => {
            const status = button.getAttribute("button-status");
            if(status){
                url.searchParams.set("status", status)
            }else{
                url.searchParams.delete("status")
            }

            window.location.href = url
        })
    })
}

// End Button Status

// Search

const formSearch = document.querySelector("#form-search")

if(formSearch){
    let url = new URL(window.location.href)
    formSearch.addEventListener("submit",(e)=>{
        e. preventDefault();
        console. log(e.target.elements.keyword.value);
        const keyword = e.target.elements.keyword.value
        if(keyword){
            url.searchParams.set("keyword", keyword)
        }else{
            url.searchParams.delete("keyword")
        }
        window.location.href = url.href;
    })
}
// End Search

// Pagination
    
const buttonsPagination = document.querySelectorAll("[button-pagination]")
console.log(buttonsPagination);

if(buttonsPagination){
    let url = new URL(window.location.href)
    buttonsPagination.forEach(button => {
        button.addEventListener ("click", () => {
            const page = button.getAttribute("button-pagination");
            url.searchParams.set("page", page)

            window.location.href = url
        })
    })
}
// End Pagination

// Checkbox-multi

const checkboxMulti = document.querySelector("[checkbox-multi]")

if(checkboxMulti){
    const inputCheckAll = document.querySelector("input[name='checkall']")
    const inputIds = document.querySelectorAll("input[name='id']")

    inputCheckAll.addEventListener('click', ()=>{
        if(inputCheckAll.checked){
            inputIds.forEach(input=>{
                input.checked = true
            })
        }else{
            inputIds.forEach(input=>{
                input.checked = false
            })
        }
    })

    inputIds.forEach(input=>{
        input.addEventListener('click', ()=>{
            const countChecked = checkboxMulti.querySelectorAll("input[name='id']:checked").length
            if(countChecked == inputIds.length){
                inputCheckAll.checked = true
            }else{
                inputCheckAll.checked = false
            }
        })
    })
    
    
}

// End chẹcbox-multi

// Form-change-multi
const formChangeMulti = document.querySelector("[form-change-multi]")

if(formChangeMulti){
    formChangeMulti.addEventListener('submit', (e)=>{
        e.preventDefault()
        const checkboxMulti = document.querySelector("[checkbox-multi]")
        const inputChecked = checkboxMulti.querySelectorAll("input[name='id']:checked")

        // Logic Delete-all
        const typeChange = e.target.elements.type.value

        if(typeChange == "delete-all"){
            const isConfirm = confirm("Bạn chắc chắn muốn xoá?")

            if(!isConfirm){
                return;
            }
        }

        // End Logic Delete-all


        if(inputChecked.length>0){
            let ids = []
            inputChecked.forEach(input=>{
                const id = input.value
                if(typeChange == "change-position"){
                    const position = input.closest("tr").querySelector("input[name='position']").value
                    console.log(position);
                    ids.push(`${id}-${position}`)
                }else{
                    ids.push(id)
                }

            })
            ids = ids.join(" ")

            const inputIds = formChangeMulti.querySelector("input[name='ids']")
            inputIds.value = ids

            formChangeMulti.submit()
        }
    })
}


// End form-change-multi

// Show alert
    const showAlert = document.querySelector("[show-alert]")
    if(showAlert){
        const time = parseInt(showAlert.getAttribute("data-time"))
        const closeAlert = showAlert.querySelector("[close-alert]")

        setTimeout(() => {
            showAlert.classList.add("alert-hidden")
        }, time);

        closeAlert.addEventListener("click",()=>{
            showAlert.classList.add("alert-hidden")
        })
    }
// End show alert

// upload image
    const uploadImage = document.querySelector("[upload-image]")
    if(uploadImage){
        const uploadImageInput = document.querySelector("[upload-image-input]")
        const uploadImagePreview = document.querySelector("[upload-image-preview]")

        uploadImageInput.addEventListener("change", (e)=>{
            
            const file = e.target.files[0]
            if(file){
                uploadImagePreview.src = URL.createObjectURL(file)
            }
        })
    }

// end upload image