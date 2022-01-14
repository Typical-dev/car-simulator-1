AFRAME.registerComponent("keyControls",{
    schema:{speedOfRotation:{type:"number", default:0}},
    tick:function(){
        mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation
        this.el.setAttribute("rotation", {x:mapRotation.x, y:mapRotation.y, z:mapRotation.z})
    },
    init:function(){
        window.addEventListener("keydown", (e) =>{
            if(e.key === "A" || e.key === "a"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.01
                }
            }
            if(e.key === "D" || e.key === "d"){
                if(this.data.speedOfRotation < -0.1){
                    this.data.speedOfRotation -= 0.01
                }
            }
        })
    }
})