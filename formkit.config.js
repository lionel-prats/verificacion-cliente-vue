import { generateClasses } from "@formkit/themes"

const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: "space-y-2 mb-3",
                message: "bg-red-500 text-white text-center text-sm font-bold uppercase px-10 py-1 mt-2 mb-4 rounded",
                label: "font-bold text-lg text-white",
                input: "w-full p-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400",
            },
            submit: {
                input: "$reset bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-bold w-full p-2 my-6 md:text-2xl" 
            },
        })
    }
}

export default config

{/*  
<div class="formkit-outer">

    <div class="formkit-wrapper ...wrapper-classes">

        <label class="formkit-label ...label-classes">label</label>

        <div class="formkit-inner"> 
        
            <input class="formkit-input ...input-classes">
        
        </div>
  
    </div>

</div>

<ul class="formkit-messages ...message-classes">
    <li class="formkit-message ">Mensaje de error</li>
</ul>
*/}